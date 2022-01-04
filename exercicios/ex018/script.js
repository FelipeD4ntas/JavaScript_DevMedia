let btn = document.getElementsByTagName('button')[0];
let saida = document.querySelector('#box-saida');
var res = document.createElement('p');
btn.addEventListener('click', clicou);

saida.appendChild(res);
res.innerHTML = `Clique no botão acima para começar.`;

function clicou() {
    var números = [
        window.prompt(`Primeiro valor:`),
        window.prompt(`Segundo valor:`)
    ]
    var escolhatxt = window.prompt(`Valores informados: ${números[0]} e ${números[1]}.\nO que vamos fazer?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`)
    var escolha = Number(escolhatxt);

    switch (escolha) {
        case 1:
            //soma
            var resultado = Number(números[0]) + Number(números[1]);
            res.innerHTML = `<p><span>Calculando...</span></p>`;
            res.innerHTML += `<p>${números[0]} + ${números[1]} = <mark>${resultado}</mark>`;
            break
        case 2:
            //subtração
            var resultado = números[0] - números[1];
            res.innerHTML = `<p><span>Calculando...</span></p>`;
            res.innerHTML += `<p>${números[0]} - ${números[1]} = <mark>${resultado}</mark>`;
            break
        case 3:
            //multiplicação
            var resultado = números[0] * números[1];
            res.innerHTML = `<p><span>Calculando...</span></p>`;
            res.innerHTML += `<p>${números[0]} x ${números[1]} = <mark>${resultado}</mark>`;
            break
        case 4:
            //divisão
            var resultado = números[0] / números[1];
            res.innerHTML = `<p><span>Calculando...</span></p>`;
            res.innerHTML += `<p>${números[0]} / ${números[1]} = <mark>${resultado}</mark>`;
            break
        default:
            res.innerHTML = `<p><span>Calculando...</span></p>`;
            res.innerHTML += `<p><mark>OPÇÃO INVÁLIDA!</mark> Você digitou ${números[0]} e ${números[1]}, mas não sei o que fazer com eles.`;
            break
    }
}