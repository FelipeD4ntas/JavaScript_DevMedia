let btn = document.getElementsByTagName('button')[0];
var res = document.querySelector('#res');

btn.addEventListener('click', verificar);

function verificar() {
    var ano = window.prompt(`Qual é o ano que você quer verificar?`);
    res.innerHTML = `<h2>Analisando o ano de ${ano}...`

    if (ano % 4 == 0) {
        res.innerHTML += `<p>O ano de ${ano} <mark id="bissexto">é bissexto</mark> &#9989;</p>`
    } else {
        res.innerHTML += `<p>O ano de ${ano} <mark id="nao_bissexto">não é bissexto</mark> &#10060;</p>`
    }
}