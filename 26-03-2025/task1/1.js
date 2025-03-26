const express=require('express')
const app = express()
const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/users').then(()=>{
   console.log("connected to mongodb")
})
app.use(express.json())

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    createdAt:{type:Date,default:Date.now}
});

const User=mongoose.model('User',userSchema)

app.post('/api/users/register',async (req,res)=>{
try{
    const {name,email,password}=req.body
    if (await User.findOne({email:email})) {
        return res.status(400).json({message:"Email already exists"})
    }
    const user=new User({name,email,password})
    await user.save()
    res.status(201).json({message:"User created successfully"})
}catch(err){
    res.status(500).json({message:"Error in user creation"})
}
});

app.get('/api/users/:id', async (req,res)=>{
    try{
        const id=req.params.id
        const user=await User.findById(id)
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json(user)
        }catch(err){
            res.status(500).json({message:"Error in user"})
        }
});

app.put('/api/users/:id', async (req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if (!user) return res.status(404).json({message:"user not found"})
        
        res.status(200).json({message:"User updated successfully"})
    }catch(err){
        res.status(500).json({message:"Error in user update"})
    }
});

app.delete('/api/users/:id', async (req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({message:"User not found"})
        
        res.status(200).json({message:"user deleted successfully"})
    }catch(err){
        res.status(500).json({message:"Error in user deletion"})
    }
});

app.get('/',(req,res)=>{
    res.send('server is running')
})
app.listen(3000,()=>console.log("server started at port 3000"))