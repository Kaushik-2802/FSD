
class Student {

    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }
 

    study() { 
      console.log(`${this.name} is studying.`);
    };

    getGrade() {
      return `${this.name}'s grade is ${this.grade}.`;
    };
  }
  
  const student1 = new Student("abc", "A");

  student1.study(); 
  console.log(student1.getGrade()); 