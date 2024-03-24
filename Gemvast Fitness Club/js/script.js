const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.querySelector(".bmi-cal .btn");

  calculateBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const height = parseFloat(document.querySelector(".bmi-cal .height").value);
    const weight = parseFloat(document.querySelector(".bmi-cal .kg").value);
    const bmiResult = document.querySelector(".bmi-cal .bmi-result");

    if (isNaN(height) || isNaN(weight)) {
      alert("Please enter valid height and weight.");
      return;
    }

    const bmi = weight / ((height / 100) * (height / 100));

    // Display BMI result
    bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)}.`;

    // Determine BMI category
    if (bmi < 18.5) {
      bmiResult.textContent += " You are underweight.";
    } else if (bmi < 25) {
      bmiResult.textContent += " You have a normal weight.";
    } else if (bmi < 30) {
      bmiResult.textContent += " You are overweight.";
    } else {
      bmiResult.textContent += " You are obese.";
    }

    // Set text color to white
    bmiResult.style.color = "white";
  });
});
