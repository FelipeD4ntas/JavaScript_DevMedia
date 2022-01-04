let btn = document.getElementsByTagName('button')[0];
var res = document.querySelector('#res');

btn.addEventListener('click', iniciar);

function iniciar() {
    var data = new Date();
    var dia_mês = data.getDate();
    var dia = data.getDay();
    var mês_número = data.getMonth();
    var ano = data.getFullYear();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    switch (mês_número) {
        case 0:
            var mês = `Jan`;
            break
        case 1:
            var mês = `Fev`;
            break
        case 2:
            var mês = `Mar`;
            break
        case 3:
            var mês = `Abr`;
            break
        case 4: 
            var mês = `Mai`;    
            break
        case 5:
            var mês = `Jun`;
            break
        case 6:
            var mês = `Jul`;
            break
        case 7:
            var mês = `Ago`;
            break
        case 8:
            var mês = `Set`;
            break
        case 9:
            var mês = `Out`;
            break
        case 10:
            var mês = `Nov`;
            break
        case 11:
            var mês = `Dez`;
            break
    }

    switch (dia) {
        case 0: 
            var dia_semana = `Dom`;
            break
        case 1:
            var dia_semana = `Seg`;
            break
        case 2: 
            var dia_semana = `Ter`;
            break
        case 3:
            var dia_semana = `Qua`;
            break
        case 4: 
            var dia_semana = `Qui`;
            break
        case 5:
            var dia_semana = `Sex`;
            break
        case 6: 
            var dia_semana = `Sáb`;
            break
    }

    res.innerHTML = `<p>Dia: <mark>${dia_mês}</mark></p>`;
    res.innerHTML += `<p>Mês: <mark>${mês}</mark></p>`;
    res.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`;
    res.innerHTML += `<p>Dia da semana: <mark>${dia_semana}</mark></p>`;
    res.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`;
    res.innerHTML += `<p>Minutos: <mark>${minutos}</mark></p>`;
    res.innerHTML += `<p>Segundos: <mark>${segundos}</mark></p>`;
}