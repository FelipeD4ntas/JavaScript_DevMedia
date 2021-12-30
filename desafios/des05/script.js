var botão = document.getElementsByTagName('button')[0];
var res = document.getElementById('res');

botão.addEventListener('click', clicou);

function clicou() {
    let metros = Number(window.prompt(`Digite uma distância em metros (m):`));
    var Km = metros / 1000;
    var Hm = metros / 100; 
    var Dam = metros / 10;
    var dm = metros * 10;
    var cm = metros * 100;
    var mm = metros * 1000;
    
    res.innerHTML = `<h2>A distância de ${metros.toFixed(2).replace('.', ',')} metros, corresponde a...</h2>`;
    res.innerHTML += `<p>${Km.toLocaleString('pt-BR')} quilômetros (Km)</p>`;
    res.innerHTML += `<p>${Hm.toLocaleString('pt-BR')} hectômetros (Hm)</p>`;
    res.innerHTML += `<p>${Dam.toLocaleString('pt-BR')} decâmetros (Dam)</p>`;
    res.innerHTML += `<p>${dm.toLocaleString('pt-BR')} decímetros (dm)</p>`;
    res.innerHTML += `<p>${cm.toLocaleString('pt-BR')} centímetros (cm)</p>`;
    res.innerHTML += `<p>${mm.toLocaleString('pt-BR')} milímetros (mm)</p>`;
}