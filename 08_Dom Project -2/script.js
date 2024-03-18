const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const msg = document.querySelector(".msg");
  
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please give a valid weight";
  } else {
    const bmi = Math.round(weight / ((height * height) / 10000).toFixed(2));
    //result show
    result.innerHTML = `<span> BMI = ${bmi}</span>`;

    if (bmi < 16) {
      msg.innerHTML = "(Severe Thinness)";
    } else if (bmi <= 17) {
      msg.innerHTML = "(Moderate Thinness)";
    } else if (bmi <= 18.5) {
      msg.innerHTML = "(Mild Thinness)";
    } else if ((bmi) => 18.5 || bmi < 25) {
      msg.innerHTML = "(Normal)";
    } else if (bmi > 25 || bmi < 30) {
      msg.innerHTML = "(Overweight)";
    } else {
      msg.innerHTML = "(Obese)";
    }
  }
});
