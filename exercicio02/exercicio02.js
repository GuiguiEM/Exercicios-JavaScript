'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoMedia = document.getElementById('media')

function somar (){
    const numero1 = parseInt(document.getElementById('numero1').value)
    const numero2 = parseInt(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2

    resultado.textContent = total
}

function identificar(){
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')

    if (numero > 0){
        resultado.textContent = 'Positivo'
    } else if (numero < 0){
        resultado.textContent = 'Negativo'
    } else{
        resultado.textContent = 'Zero'
    }
}

function media(){
    const nota1 = parseInt(document.getElementById('nota1').value)
    const nota2 = parseInt(document.getElementById('nota2').value)
    const nota3 = parseInt(document.getElementById('nota3').value)
    const nota4 = parseInt(document.getElementById('nota4').value)
    const resultado = document.getElementById('resultado-item3')
    const resultado2 = document.getElementById('resultado-item3-2')
    
    const total = (nota1 + nota2 + nota3 + nota4) / 4

    resultado.textContent = total

    if(total >= 7){
        resultado2.textContent = "APROVADO"
    } else if(total < 7){
        resultado2.textContent = "REPROVADO"
    }
    
}

botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)
botaoMedia.addEventListener('click', media)