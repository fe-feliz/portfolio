const luzVermelha.getElementById('luz-vermelha');
const luzAmarela.getElementById('luz-amarela');
const luzVerde.getElementById('luz-verde');

const btnvermelho.getElementById('btn-vermelho');
const btnamarela.getElementById('btn-amarelo');
const btnverde.getElementById('btn-verde');

btnvermelho.addEventListener('click', function () {
    luzVermelha.style.backgroundColor = 'red'
    luzAmarela.style.backgroundColor = 'black'
    luzVerde.style.backgroundColor = 'black'
})

btnamarelo.addEventListener('click', function () {
    luzVermelha.style.backgroundColor = 'black'
    luzAmarela.style.backgroundColor = 'yellow'
    luzVerde.style.backgroundColor = 'black'
})

btnverde.addEventListener('click', function () {
    luzVermelha.style.backgroundColor = 'black'
    luzAmarela.style.backgroundColor = 'black'
    luzVerde.style.backgroundColor = 'green'
})