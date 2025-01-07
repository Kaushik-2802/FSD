const temperatureConverter = {
  
    toCelsius: function (fahrenheit) {
      return ((fahrenheit - 32) * 5) / 9;
    },
  
 
    toFahrenheit: function (celsius) {
      return (celsius * 9) / 5 + 32;
    },
  };
  
  function convertTemperature() {
  
    const inputTemperature = parseFloat(prompt("Enter the temperature value:"));
    const inputUnit = prompt(
      "Enter the unit of the temperature (C for Celsius, F for Fahrenheit):"
    ).toUpperCase();
  

    if (inputUnit === "C") {
      const fahrenheit = temperatureConverter.toFahrenheit(inputTemperature);
      console.log(
        `${inputTemperature}°C is equal to ${fahrenheit.toFixed(2)}°F.`
      );
    } else if (inputUnit === "F") {
      const celsius = temperatureConverter.toCelsius(inputTemperature);
      console.log(
        `${inputTemperature}°F is equal to ${celsius.toFixed(2)}°C.`
      );
    } else {
      console.log("Invalid unit. Please enter C for Celsius or F for Fahrenheit.");
    }
  }

  convertTemperature();
  