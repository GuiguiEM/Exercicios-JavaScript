'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')
const forma9 = document.getElementById('forma9')
const forma10 = document.getElementById('forma10')

function mudarCor(){
    forma1.classList.toggle('branco')
}

function aumentar(){
    forma2.classList.toggle('expandir')
}

function transformarCirculo(){
    forma3.classList.toggle('circulo')
}

function corAleatoria(){
    const cor = '#' + Math.floor(Math.random()*16777215).toString(16);
    forma4.style.backgroundColor = cor;
}

function sumir(){
    forma5.classList.toggle('sumir')
}

function diminuir(){
    forma6.classList.toggle('diminuir')
}

function triangulo(){
    forma7.classList.toggle('triangulo')
}

function inverter(){
    forma8.classList.toggle('inverter')
}

function girar(){
    forma9.classList.toggle('girar')
}

function pulsar(){
    forma10.classList.toggle('pulsar')
}

forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', aumentar)
forma3.addEventListener('click', transformarCirculo)
forma4.addEventListener('click', corAleatoria)
forma5.addEventListener('click', sumir)
forma6.addEventListener('click', diminuir)
forma7.addEventListener('click', triangulo)
forma8.addEventListener('click', inverter)
forma9.addEventListener('click', girar)
forma10.addEventListener('click', pulsar)