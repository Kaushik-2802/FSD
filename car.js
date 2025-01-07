class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getDetails() {
      return `${this.year} ${this.make} ${this.model}`;
    }
  }
  
  class ElectricCar extends Car {
    constructor(make, model, year, batteryCapacity) {
      super(make, model, year);
      this.batteryCapacity = batteryCapacity;
    }
  
    getBatteryInfo() {
      return `Battery Capacity: ${this.batteryCapacity} kWh`;
    }
  }
  
  const car = new Car("Toyota", "Corolla", 2020);
  console.log(car.getDetails());
  
  const electricCar = new ElectricCar("Tesla", "Model 3", 2021, 75);
  console.log(electricCar.getDetails());
  console.log(electricCar.getBatteryInfo());
  