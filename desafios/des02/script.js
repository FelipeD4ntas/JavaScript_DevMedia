var botão = document.getElementsByTagName('button')[0];

botão.addEventListener('click', clicou);

function clicou() {
    var nome = window.prompt('Qual é o seu nome?');
    var idade = window.prompt(`Olá, ${nome}! Quantos anos você tem?`);
    window.alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
}
