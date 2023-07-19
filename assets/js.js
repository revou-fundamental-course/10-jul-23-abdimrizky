function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var gender = document.getElementById("gender").value;
  
    if (height && weight) {
      var bmi = weight / ((height / 100) ** 2);
  
      var result = "BMI: " + bmi.toFixed(2) + "<br>";
  
      if (gender === "male") {
        var idealWeight = (height - 100) - ((height - 100) * 10 / 100);
        result += "Berat Badan Ideal Pria: " + idealWeight.toFixed(2) + " kg";
      } else if (gender === "female") {
        var idealWeight = (height - 100) - ((height - 100) * 15 / 100);
        result += "Berat Badan Ideal Wanita: " + idealWeight.toFixed(2) + " kg";
      }
  
      document.getElementById("result").innerHTML = result;
    } else {
      document.getElementById("result").innerHTML = "Mohon masukkan tinggi dan berat badan.";
    }
  }
  