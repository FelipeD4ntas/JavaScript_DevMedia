var botão = document.getElementsByTagName('button')[0];

botão.addEventListener('click', clicado);

function clicado() {
    let produto = window.prompt('Que produto você está comprando?');
    let preço = window.prompt(`Quanto custa ${produto} que você está comprando?`);
    let pagamento = window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`);
    let troco = pagamento - preço;
    window.alert(`Você comprou ${produto} que custou R$ ${preço},00\nDeu R$ ${pagamento},00 em dinheiro e vai receber R$ ${troco},00 de troco.\nVolte Sempre!`)
}