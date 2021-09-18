"use strict";

const number = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".operator");
const result = document.querySelector(".result");
const clearScreen = document.querySelector(".clear");
const Bacspace = document.querySelector(".backspace");
const evalute = document.querySelector(".big-btn");
const history = document.querySelector(".history");
clearScreen.addEventListener("click", function () {
  result.textContent = "";
  history.textContent = "";
});
operator.forEach(function (entries, i) {
  entries.addEventListener("click", function (e) {
    result.textContent += entries.textContent;
  });
});
number.forEach(function (entries, i) {
  entries.addEventListener("click", function (e) {
    result.textContent += entries.textContent;
    history.textContent = result.textContent;
  });
});
Bacspace.addEventListener("click", function (e) {
  let res = String(result.textContent);
  result.textContent = res.slice(0, res.length - 1);
  history.textContent = res.slice(0, res.length - 1);
});
evalute.addEventListener("click", function (e) {
  try {
    String(eval(result.textContent));
    result.textContent = String(eval(result.textContent));
  } catch (error) {
    result.textContent = "Error(Press AC)";
  }
});
