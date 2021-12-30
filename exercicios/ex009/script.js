var botao_um = document.getElementsByTagName('button')[0];
var botao_dois = document.getElementsByTagName('button')[1];
var botao_tres = document.getElementsByTagName('button')[2];
var botao_quatro = document.getElementsByTagName('button')[3];var botao_zerar = document.getElementById('zerar');
var box_res = document.getElementById('resultados');
var res = document.createElement('p');

botao_um.addEventListener('click', um);
botao_dois.addEventListener('click', dois);
botao_tres.addEventListener('click', tres);
botao_quatro.addEventListener('click', quatro);
botao_zerar.addEventListener('click', zerar);
box_res.appendChild(res);

function um() {
    res.innerHTML += `<p>Clicou no <strong>primeiro botão</strong></p>`;
}

function dois() {
    res.innerHTML += `<p>Clicou no <strong>segundo botão</strong></p>`;
}

function tres() {
    res.innerHTML += `<p>Clicou no <strong>terceiro botão</strong></p>`;
}

function quatro() {
    res.innerHTML += `<p>Clicou no <strong>quarto botão</strong></p>`;
}

function zerar() {
    res.innerHTML = ``;
}

