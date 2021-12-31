let preco_dolar = window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?');
let botão = document.getElementsByTagName('button')[0];
var res = document.getElementById('res');
botão.addEventListener('click', converter); 

function converter() {
    let reais = window.prompt(`Quantos R$ você tem na carteira?`);
    let dolar = reais / preco_dolar;

    res.innerHTML = `<h2>Com R$${reais.toLocaleString('pt-BR')} você consegue compar US$${dolar.toLocaleString('en-US')}</h2>`;
}