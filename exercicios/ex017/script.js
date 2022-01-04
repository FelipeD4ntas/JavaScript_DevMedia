let btn = document.getElementsByTagName('button')[0];
let saida = document.querySelector('#box-saida');
var res = document.createElement('p');
var número = Math.round(Math.random() * 100);


btn.addEventListener('click', clicou);
res.innerHTML = `<p>Já pensei em um valor entre 1 e 100...</p>`;
saida.appendChild(res);

function clicou() {
    var palpite = window.prompt(`Qual é o seu palpite?`);
    if (palpite < número) {
        res.innerHTML += `<p>Você digitou <mark>${palpite}</mark>. Meu número é MAIOR!</p>`
    } else if (palpite > número) {
        res.innerHTML += `<p>Você digitou <mark>${palpite}</mark>. Meu número é MENOR!</p>`
    } else {
        res.innerHTML += `<p><span>PARABÉNS!</span> Você acertou! Eu tinha sorteado o valor <mark>${número}</mark>!</p>`
    }
}