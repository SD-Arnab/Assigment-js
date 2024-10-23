
function BMICalculator(weight, height) {
  this.weight = weight;    
  this.height = height;   

  
  this.calculateBMI = function() {
      return this.weight / (this.height ** 2);
  };


  this.classifyBMI = function() {
      let bmi = this.calculateBMI();  
      if (bmi < 18.5) {
          return "Underweight";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
          return "Normal weight";
      } else if (bmi >= 25.0 && bmi <= 29.9) {
          return "Overweight";
      } else {
          return "Obesity";
      }
  };

  
  this.displayResults = function() {
      let bmi = this.calculateBMI();  I
      let category = this.classifyBMI();  
      console.log(`BMI: ${bmi.toFixed(2)}`);
      console.log(`Category: ${category}`);
  };
}


let personBMI = new BMICalculator(70, 1.75); 