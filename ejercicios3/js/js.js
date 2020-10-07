const input = document.getElementById("inpu");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");
const formu = document.getElementById("formulario");
var variable;

formu.addEventListener("click", (e) => {
  if (e.target.value == "Entero") {
    variable = 25;
    resultado.innerHTML = `<span> el variable es de tipo ${typeof variable} y de valor : ${variable} </span>`;
  } else if (e.target.value == "String") {
    variable = " ahora soy una cadena";
    resultado.innerHTML = `<span> el variable es de tipo ${typeof variable} y de valor : ${variable} </span>`;
  } else if (e.target.value == "bolean") {
    variable = true;
    resultado.innerHTML = `<span> el variable es de tipo ${typeof variable} y de valor : ${variable} </span>`;
  } else if (e.target.value == "null") {
    variable = null;
    resultado.innerHTML = `<span> el variable es de tipo ${typeof variable} y de valor : ${variable} </span>`;
  } else {
    variable = undefined;
    resultado.innerHTML = `<span> el variable es de tipo ${typeof variable} y de valor : ${variable} </span>`;
  }
});
