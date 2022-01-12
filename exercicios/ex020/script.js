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

    // Função para verificar o range das datas
    const verifica_data_range = (data, data_inicio, data_fim, tipo_comparacao) => {
            if (tipo_comparacao == "and") {
                return (data >= data_inicio && data <= data_fim);
            } else if (tipo_comparacao == "or") {
                return (data >= data_inicio || data <= data_fim);
            }
    }
    
    // Função de retornar o nome do signo, usando uma Arrow Function
    const retorna_signo = (signos, data) => {
        let ano = data.getFullYear();

        for (const signo of signos) {
            let data_inicio_signo = new Date(`${ano}-${signo['DataInicio']} 00:00:00`);
            let data_fim_signo = new Date(`${ano}-${signo['DataFim']} 23:59:59`);

            let tipo_comparacao = signo['DataInicio'] == '12-22' ? 'or' : 'and';
           
            if (verifica_data_range(data, data_inicio_signo, data_fim_signo, tipo_comparacao)) {
                return signo['Nome'];
            } 
        }
    }

    let data_app = new Date('2020-12-22 00:00:00');
    const nome_signo = retorna_signo(coleção_signos, data_app);

    switch (nome_signo) {
        case 'Aquário': 
            document.body.style.backgroundImage = 'url(imagens/aquarius.jpg)';
            break
        case 'Peixes': 
            document.body.style.backgroundImage = 'url(imagens/peixes.jpg';
            break
        case 'Áries': 
            document.body.style.backgroundImage = 'url(imagens/aries.jpg';
            break
        case 'Touro': 
            document.body.style.backgroundImage = 'url(imagens/touro.jpg'; 
            break
        case 'Gêmeos': 
            document.body.style.backgroundImage = 'url(imagens/gemeos.jpg';
            break
        case 'Câncer': 
            document.body.style.backgroundImage = 'url(imagens/cancer.jpg';
            break
        case 'Leão': 
            document.body.style.backgroundImage = 'url(imagens/leao.jpg';
            break
        case 'Virgem': 
            document.body.style.backgroundImage = 'url(imagens/virgem.jpg';
            break
        case 'Libra': 
            document.body.style.backgroundImage = 'url(imagens/libra.jpg';
            break
        case 'Escorpião': 
            document.body.style.backgroundImage = 'url(imagens/escorpiao.jpg';
            break
        case 'Sagitário': 
            document.body.style.backgroundImage = 'url(imagens/sagitario.jpg';
            break
        case 'Capricórnio': 
            document.body.style.backgroundImage = 'url(imagens/capricornio.jpg';
            break
        default:
            document.body.style.backgroundColor = 'red';
            break
    }
    saida.innerHTML = `O signo do dia é: ${nome_signo}`;
}

