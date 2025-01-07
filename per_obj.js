class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    isAdult() {
      return this.age >= 18 ? "Yes, I am an adult." : "No, I am not an adult.";
    }
  }

  const person2 = new Person("Bob", 17);

  person2.greet(); 

  console.log(person2.isAdult()); 
  