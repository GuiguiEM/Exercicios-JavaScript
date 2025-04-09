'use strict'

const forma1 = document.getElementById('forma1')

function mudarCor () {
    forma1.classList.toggle('branco')
}

forma1.addEventListener('click', mudarCor)