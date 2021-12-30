let botao_um = document.getElementsByTagName('button')[0];
let botao_dois = document.getElementsByTagName('button')[1];
let botao_tres = document.getElementsByTagName('button')[2];

botao_um.addEventListener('click', um);
botao_dois.addEventListener('click', dois);
botao_tres.addEventListener('click', tres);

function um() {
    window.alert('Você clicou no 1º botão');
}

function dois() {
    window.alert('Você clicou no 2º botão');
}

function tres() {
    window.alert('Você clicou no 3º botão');
}