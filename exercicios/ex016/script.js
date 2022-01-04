let btn = [
    document.getElementsByTagName('button')[0],
    document.getElementsByTagName('button')[1]
]
let saida = document.querySelector('#box-saida');

btn[0].addEventListener('click', gerar);
btn[1].addEventListener('click', limpar);

var res = document.createElement('p');
saida.appendChild(res);

function gerar() {
    var número = Math.round(Math.random() * 100);
    res.innerHTML += `<p>Acabei de pensar no número <mark>${número}</mark></p>`;
}

function limpar() {
    res.innerHTML = ``;
}