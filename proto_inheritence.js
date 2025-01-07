class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    describe() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
  
    study() {
      return `${this.name} is studying for grade ${this.grade}.`;
    }
  }
  
  const person1 = new Person("Alice", 40);
  console.log(person1.describe());
  
  const student1 = new Student("John", 20, "A");
  console.log(student1.describe());
  console.log(student1.study());
  