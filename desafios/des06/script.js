let botão = document.getElementsByTagName('button')[0];
botão.addEventListener('click', converter);
var saida = document.getElementById('res');

function converter() {
    let celsius = window.prompt(`Digite uma temperatura em ºC (Celsius)`);
    let kelvin = Number(celsius) + 273.15;
    let F = (celsius * 1.8) + 32;
    saida.innerHTML = `<h2>A temperatura de ${celsius.replace('.', ',')}ºC, corresponde a...`;
    saida.innerHTML += `<p>${kelvin.toLocaleString('pt-BR')}ºK (<strong>Kelvin</strong>)`;
    saida.innerHTML += `<p>${F.toLocaleString('pt-BR')}ºF (<strong>Fahrenheit</strong>)`;
}