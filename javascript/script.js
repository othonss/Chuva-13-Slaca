var viewMore = document.getElementById("view-more")
var btn = document.querySelector('#view-more')
var container = document.querySelector('#text')
container.style.display = 'none'

btn.addEventListener('click', function(){
    if(container.style.display === 'none'){
        container.style.display = 'block'
        viewMore.style.display = 'none'
    }else{
        container.style.display = 'none'       
    }
})

var sucess = document.querySelector('#sucess')
var form = document.querySelector('#form')
var presentation = document.querySelector('#presentation')
var hidden = document.querySelector('#hidden')
var answer = document.querySelector('#answer')
var btnTopico = document.querySelector('#topic-button')
var btnEnviar = document.querySelector('#btnEnviar')
var btnNovoTopico = document.querySelector('#btnNovoTopico')
var btnMostrarResposta = document.querySelector('#resp')
var like = document.querySelector('#like')
var btnMostrarMenu = document.querySelector('#menu-hamburguer')
var normalMenu = document.querySelector('#menu-mobile')
var validador = 1

sucess.style.display = 'none'
form.style.display = 'none'
presentation.style.display = 'none'
hidden.style.display = 'none'
answer.style.display = 'none'
presentation.style.display = 'block'
sucess.style.display = 'none'

btnTopico.addEventListener('click', function(){
    if(form.style.display === 'none'){
        form.style.display = 'block'
        presentation.style.display = 'none'
    }
})

btnEnviar.addEventListener('click', function(){
    if(sucess.style.display === 'none'){
        sucess.style.display = 'block'
        hidden.style.display = 'block'
        form.style.display = 'none'
    }
})

btnNovoTopico.addEventListener('click', function(){
    if(form.style.display === 'none'){
        form.style.display = 'block'
        hidden.style.display = 'none'
        sucess.style.display = 'none'
    }
})

btnMostrarResposta.addEventListener('click', function(){
    if(answer.style.display === 'none'){
        answer.style.display = 'block'
        btnMostrarResposta.innerHTML='4 respostas'
        like.innerHTML='4 likes'
    }else{
        answer.style.display = 'none'
        btnMostrarResposta.innerHTML='1 respostas'
        like.innerHTML='1 likes'
    }
}) 

btnMostrarMenu.addEventListener('click', function(){
    if(validador === 1){
        normalMenu.style.display = 'block'
        validador = 0
    }else{
        normalMenu.style.display = 'none'
        validador = 1
    }
}) 


