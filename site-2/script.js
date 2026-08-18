const luzVermelha = document.getElementById("luzVermelha");
const luzAmarela = document.getElementById("luzAmarela");
const luzVerde  = document.getElementById("luzVerde");

    
const btnVermelho = document.getElementById('btn-vermelho');
const btnAmarelo = document.getElementById('btn-amarelo');
const btnVerde = document.getElementById('btn-verde');

btnVermelho.addEventListener('click', function(){
    luzVermelha.classList.add('acesa-vermelha')
    luzAmarela.classList.remove('acesa-amarela')
    luzVerde.classList.remove('acesa-verde')
})


btnAmarelo.addEventListener('click', function(){
    luzVermelha.classList.remove('acesa-vermelha')
    luzAmarela.classList.add('acesa-amarela')
    luzVerde.classList.remove('acesa-verde')
})

btnVerde.addEventListener('click', function(){
    luzVermelha.classList.remove('acesa-vermelha')
    luzAmarela.classList.remove('acesa-amarela')
    luzVerde.classList.add('acesa-verde')
})

