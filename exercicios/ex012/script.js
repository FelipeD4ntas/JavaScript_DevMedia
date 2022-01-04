let btn = document.getElementsByTagName('button')[0];
var res = document.querySelector('#res');

btn.addEventListener('click', clicou);

function clicou() {
    var número = [
        window.prompt(`Digite um número:`),
        window.prompt(`Digie outro número:`)
    ]
    res.innerHTML = `Analisando os valores <mark>${número[0]}</mark> e <mark>${número[1]}</mark>, o maior valor é. . .`

    if (Number(número[0]) > Number(número[1])) {
        res.innerHTML += `<strong>${número[0]}</strong>`
    } else if (Number(número[0]) < Number(número[1])) {
        res.innerHTML += `<strong>${número[1]}</strong>`
    } else {
        res.innerHTML += ` <strong>Os valores são iguais</strong>`
    }
}