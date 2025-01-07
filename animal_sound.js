class Animal {
    speak() {
      console.log("Animal makes a sound");
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log("Woof!");
    }
  }
  
  const animal = new Animal();
  animal.speak();
  
  const dog = new Dog();
  dog.speak();
  