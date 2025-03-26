const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mango').then(()=>{
    console.log('Connected to MongoDB')
});

const authMiddleware = (req, res, next) => {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).json({ msg: "No token, authorization denied" });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ msg: "Token is not valid" });
    }
  };

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" },
  dueDate: { type: Date },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", UserSchema);
const Task = mongoose.model("Task", TaskSchema);

app.post(
  "/api/mango/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) return res.status(400).json({ msg: "User already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);
      user = new User({ name, email, password: hashedPassword });
      await user.save();

      res.status(201).json({ msg: "User registered successfully" });
    } catch (err) {
      res.status(500).send("Server error");
    }
  }
);

app.post("/api/mango/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

app.post("/api/tasks", authMiddleware, async (req, res) => {
  const { title, description, status, dueDate } = req.body;
  try {
    const task = new Task({ title, description, status, dueDate, assignedTo: req.user.userId });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

app.get("/api/tasks", authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.user.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

app.get("/api/tasks/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.assignedTo.toString() !== req.user.userId)
      return res.status(404).json({ msg: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

app.put("/api/tasks/:id", authMiddleware, async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task || task.assignedTo.toString() !== req.user.userId)
      return res.status(404).json({ msg: "Task not found" });

    task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

app.delete("/api/tasks/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.assignedTo.toString() !== req.user.userId)
      return res.status(404).json({ msg: "Task not found" });

    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: "Task deleted" });
  } catch (err) {
    res.status(500).send("Server error");
  }
});



const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
