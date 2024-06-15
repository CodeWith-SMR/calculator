let body = document.querySelector(".body");
let toggle = document.querySelector(".toggle");

toggle.onclick = function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
};
const display = document.querySelector(".display");
const btn = document.querySelectorAll("span");
const specialVal = ["%", "/", "*", "-", "+", "="];
let output = "";

const calculate = (btn) => {
  if (btn === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btn === "AC") {
    output = "";
  } else if (btn === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === " " && specialVal.includes(btn)) return;
    output += btn;
  }
  display.value = output;
};

btn.forEach((span) => {
  span.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
