var botão = document.getElementsByTagName('button')[0];

botão.addEventListener('click', clicou);

function clicou() {
    var número = window.prompt('Digite um número qualquer:');
    var ant = número - 1;
    var suc = Number(número) + 1;
    window.alert(`Antes de ${número}, temos o número ${ant}.\nDepois de ${número}, temos o número ${suc}.`)
}