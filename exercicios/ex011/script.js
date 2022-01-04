let btn = document.getElementsByTagName('button')[0];
var res = document.querySelector('#res');

btn.addEventListener('click', clicou);

function clicou() {
    var número = window.prompt(`Digite um número:`);

    if (número % 2 == 0) {
        res.innerHTML = `O número ${número} que foi digitado é <strong>PAR</strong>`
    } else {
        res.innerHTML = `O número ${número} que foi digitado é <strong>ÍMPAR</strong>`
    }
}