class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const john = new Person("John");
  
  john.greet(); 
  
  console.log(john.__proto__ === Person.prototype); 
  console.log(john.__proto__.greet === Person.prototype.greet); 
  