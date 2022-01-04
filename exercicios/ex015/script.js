let btn = document.getElementsByTagName('button')[0];
let saida = document.querySelector('#box-saida');
btn.addEventListener('click', iniciar);

var res = document.createElement('p');
res.innerHTML = `Aqui vai aparecer algo...`;
saida.appendChild(res);

function iniciar() {
    var ano_atual = new Date();
    var ano = ano_atual.getFullYear();
    var nasc = window.prompt(`Em que ano você nasceu?`);
    var idade = ano - nasc;
    res.innerHTML = `Quem nasceu em ${nasc} vai completar ${idade} anos em ${ano}.`;
}