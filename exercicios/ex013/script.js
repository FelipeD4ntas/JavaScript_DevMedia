let btn = document.getElementsByTagName('button')[0];
var res = document.querySelector('#res');

btn.addEventListener('click', clicou);

function clicou() {
    var data_atual = new Date();
    res.innerHTML = `O que recebi do sistema foi:<br><mark>${data_atual}</mark>`
}