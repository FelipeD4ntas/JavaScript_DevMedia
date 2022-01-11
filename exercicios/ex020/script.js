let btn = document.getElementsByTagName('button')[0];
let saida = document.createElement('p');
let box_saida = document.querySelector('#box-saida');

box_saida.appendChild(saida);
btn.addEventListener('click', clicou)

function clicou() {
    // Signos: 
    let coleção_signos = [
        {Nome: "Aquário", DataInicio: "01-20", DataFim: "02-18"},
        {Nome: "Peixes", DataInicio: "02-19", DataFim: "03-20"},
        {Nome: "Áries", DataInicio: "03-21", DataFim: "04-19"},
        {Nome: "Touro", DataInicio: "04-20", DataFim: "05-20"},
        {Nome: "Gêmeos", DataInicio: "05-21", DataFim: "06-21"},
        {Nome: "Câncer", DataInicio: "06-22", DataFim: "07-23"},
        {Nome: "Leão", DataInicio: "07-24", DataFim: "08-22"},
        {Nome: "Virgem", DataInicio: "08-23", DataFim: "09-22"},
        {Nome: "Libra", DataInicio: "09-23", DataFim: "10-22"},
        {Nome: "Escorpião", DataInicio: "10-23", DataFim: "11-21"},
        {Nome: "Sagitário", DataInicio: "11-22", DataFim: "12-21"},
        {Nome: "Capricórnio", DataInicio: "12-22", DataFim: "01-19"}
    ];
    
    // Função de retornar o nome do signo, usando uma Arrow Function
    const retorna_signo = (signos) => {
        return signos[0]["Nome"];
    }
    const nome_signo = retorna_signo(coleção_signos);
    switch (nome_signo) {
        case "Aquário": 
            document.body.style.backgroundImage = 'url(../ex020/imagens/aquarius.jpg)';
            break
        default:
            document.body.style.backgroundColor = "red";
    }
    saida.innerHTML = `O signo do dia é: ${nome_signo}`;
}
