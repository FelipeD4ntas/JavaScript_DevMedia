let btn = document.getElementsByTagName('button')[0];
var res = document.getElementById('res');
btn.addEventListener('click', reajustar);

function reajustar() {
    let nome = window.prompt(`Qual é o nome do funcionário?`);
    let salário_txt = window.prompt(`Qual é o salário de ${nome}?`);
    let salário = Number(salário_txt);
    let aumento = window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`);
    let diferença = (salário * aumento) / 100;
    let salário_final = Number(salário) + diferença;

    res.innerHTML = `<h2>${nome} recebeu um aumento salarial!`;
    res.innerHTML += `<p>O salário atual era de ${salário.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`;
    res.innerHTML += `<p>Com um aumento de ${aumento}%, o salário vai aumentar ${diferença.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${salário_final.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
}
