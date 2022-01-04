let btn = document.getElementsByTagName('button')[0];
let saida = document.querySelector('#box-saida');
var res = document.createElement('p');

saida.appendChild(res);
res.innerHTML = `Clique no botão acima para informar o mês.`;
btn.addEventListener('click', clicou);

function clicou() {
    var mês = window.prompt(`Digite o mês em extenso (ex: Setembro)`);

    switch (mês.toUpperCase()) {
        case 'JANEIRO':
        case 'FEVEREIRO':
        case 'MARÇO':
            var estação = 'inverno';
            break
        case 'ABRIL':
        case 'MAIO':
        case 'JUNHO':
            var estação = 'primavera';
            break
        case 'JULHO':
        case 'AGOSTO':
        case 'SETEMBRO':
            var estação = 'verão';
            break
        case 'OUTUBRO':
        case 'NOVEMBRo':
        case 'DEZEMBRO':
            var estação = 'outono';
            break
        default:
            var estação = 'indefinida';
            break
    }
    res.innerHTML = `No mês de <mark>${mês.toUpperCase()}</mark>, estamos na estação <mark>${estação.toUpperCase()}</mark>`;
}