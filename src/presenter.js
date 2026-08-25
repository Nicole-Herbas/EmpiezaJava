import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const sumarButton = document.querySelector("#sumar-button");
const first1 = document.querySelector("#primer-numero1");
const second1 = document.querySelector("#segundo-numero1");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const multiplicarButton = document.querySelector("#multiplicar-button");
const multiplicarDiv = document.querySelector("#resultado-div-multiplicar");

const saludarForm = document.querySelector("#saludar-form");
const saludarButton = document.querySelector("#saludar-button");
const saludarDiv = document.querySelector("#saludar-div");

const nombreInput = document.querySelector("#nombre");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

multiplicarButton.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first1.value);
  const secondNumber = Number.parseInt(second1.value);

  multiplicarDiv.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});

saludarButton.addEventListener("click", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;

  saludarDiv.innerHTML = "<p>" + "Holaaaa" + " " + nombre + "</p>";
});
