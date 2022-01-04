let btn = document.getElementsByTagName('button')[0];
var res = document.getElementById('res');

btn.addEventListener('click', calcular);

function calcular() {
    var nome = window.prompt(`Qual é o nome do Aluno?`);
    var nota = [
        window.prompt(`Qual foi a primeira nota de ${nome}?`),
        window.prompt(`Qual foi a outra nota de ${nome}?`)
    ]
    var média = (Number(nota[0]) + Number(nota[1])) / nota.length;

    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`;
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota[0]}</mark> e <mark>${nota[1]}</mark>.</p>`;
    res.innerHTML += `<p>A média final será de <mark>${média.toLocaleString('pt-BR')}</mark>.</p>`;
    res.innerHTML += `A mensagem que temos é: `;
    if (média >= 6) {
        res.innerHTML += `<p style="color: green; display: inline; font-weight: bold;">Meus Parabéns!</p>`;
    } else {
        res.innerHTML += `<p style="color: red; display: inline; font-weight: bold;">Estude um pouco mais!</p>`;
    }
}