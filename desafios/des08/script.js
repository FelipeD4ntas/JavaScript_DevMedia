let botão = document.getElementsByTagName('button')[0];
let res = document.getElementById('res');

botão.addEventListener('click', calcular);

function calcular() {
    var produto = window.prompt(`Qual é o produto que você está comprando?`);
    var preço = window.prompt(`Qual é o preço do produto ${produto}?`);
    var desconto = (preço * 10) / 100;
    var valor_final = preço - desconto;
    res.innerHTML = `<h2>Calculando desconto de 10% para ${produto}...`
    res.innerHTML += `<p>O preço originar era <strong>R$ ${preço.replace('.', ',')}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar ${desconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de desconto (-10%).</p>`;
    res.innerHTML += `<p>No fim, você vai pagar ${valor_final.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no produto ${produto}.`
}