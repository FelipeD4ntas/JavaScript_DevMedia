let btn = document.getElementsByTagName('button')[0];
let saida = document.createElement('p');
let box_saida = document.querySelector('#box-saida');
let img = document.createElement('img');
let box_imagens = document.getElementsByClassName('box-imagens')[0];
img.setAttribute('class', 'imagens');
saida.setAttribute('id', 'resultado');
box_saida.appendChild(saida);
box_imagens.appendChild(img);
btn.addEventListener('click', clicou)

function clicou() {
    // Signos: 
    import colecao_signos from './dados.js';
    // Função para verificar o range das datas
    import retorna_signo from './funcoes.js';

    let dia_nasc = String(document.querySelector('#dia').value);
    let mes_nasc = String(document.querySelector('#mes').value);
    let ano_nasc = String(document.querySelector('#ano').value);
    let data_app = new Date(`${ano_nasc}-${mes_nasc}-${dia_nasc} 00:00:00`);
    const nome_signo = retorna_signo(colecao_signos, data_app);

    //Escolhendo a foto de acordo com o signo

    if (dia_nasc.length == 0 || mes_nasc.length == 0 || ano_nasc.length == 0) {
        window.alert('[ATENÇÃO] É necessário digitar Dia, Mês e Ano.');
    } else {
        switch (nome_signo) {
            case 'Aquário':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', '../imagens/aquarius.jpg');
                break
            case 'Peixes':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', '../imagens/peixes.jpg');
                break
            case 'Áries':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', '../imagens/aries.jpg');
                break
            case 'Touro':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', '../imagens/touro.jpg');
                break
            case 'Gêmeos':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', '../imagens/gemeos.jpg');
                break
            case 'Câncer':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', '../imagens/cancer.jpg');
                break
            case 'Leão':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', '../imagens/leao.jpg');
                break
            case 'Virgem':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', '../imagens/virgem.jpg');
                break
            case 'Libra':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', '../imagens/libra.jpg');
                break
            case 'Escorpião':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', '../imagens/escorpiao.jpg');
                break
            case 'Sagitário':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', '../imagens/sagitario.jpg');
                break
            case 'Capricórnio':
                img.style.transform = 'scale(1)';
                img.setAttribute('src', '../imagens/capricornio.jpg');
                break
        }
        saida.style.display = 'inline-block';
        saida.innerHTML = `Seu signo é: <span>${nome_signo}</span>`;
    }

}