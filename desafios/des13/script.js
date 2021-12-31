let btn = document.getElementsByTagName('button')[0];
var res = document.querySelector('#res');

btn.addEventListener('click', verificar);

function verificar() {
    var nome_aluno = window.prompt(`Qual é o nome do aluno?`);
    var notas = [
        window.prompt(`Primeira nota de ${nome_aluno}:`), 
        window.prompt(`Segunda Nota de ${nome_aluno}:`)
    ];
    var média = (Number(notas[0]) + Number(notas[1])) / notas.length;
    
    res.innerHTML = `<h2>Analisando a situação do aluno:<br><span>${nome_aluno}</span>`
    res.innerHTML += `<p>Com as notas ${notas[0].replace('.', ',')} e ${notas[1].replace('.', ',')} a média é <strong>${média.toLocaleString('pt-BR')}</strong></p>`;

    if (média < 3) {
        //Reprovado
        res.innerHTML += `<p>Com média abaixo de 3,0 o aluno está <span id="reprovado">reprovado</span></p>`;
    } else if (média >= 3 && média <= 6) {
        //Recuperação
        res.innerHTML += `<p>Com média entre 3,0 e 6,0 o aluno está em <span id="recuperacao">recuperação</span></p>`;
    } else {
        //Aprovado
        res.innerHTML += `<p>Com média acima 6,0 o aluno está em <span id="aprovado">aprovado</span></p>`;
    }
}