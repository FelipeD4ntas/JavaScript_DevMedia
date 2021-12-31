let btn = document.getElementsByTagName('button')[0];
var res = document.querySelector('#res');

btn.addEventListener('click', verificar);

function verificar() {
    var preço_ant_txt = window.prompt(`Qual era o preço anterior do produto?`);
    var preço_att_txt = window.prompt(`Qual é o preço atual do produto?`);
    var preço_ant = Number(preço_ant_txt);
    var preço_att = Number(preço_att_txt);
    

    res.innerHTML = `<h2>Analisando os valores informados</h2>`;
    res.innerHTML += `O produto custava ${preço_ant.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${preço_att.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`

    if (preço_ant < preço_att) {
        var diferença = preço_att - preço_ant;
        var porcentagem = (diferença * 100) / preço_ant;
        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`;
        res.innerHTML += `<p>O preço subiu ${diferença.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.`;
        res.innerHTML += `<p>Uma variação de ${porcentagem.toLocaleString('pt-BR')}% para cima.`;
    } else if (preço_ant > preço_att) {
        var diferença = preço_ant - preço_att;
        var porcentagem = (diferença * 100) / preço_att;
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`;
        res.innerHTML += `<p>O preço caiu ${diferença.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`;
        res.innerHTML += `<p>Uma variação de ${porcentagem.toLocaleString('pt-BR')}% para baixo.</p>`;
    }
}
