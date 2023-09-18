//DOM

const nomeJogador = document.querySelector('#name-jogador')

const ednei = document.querySelector('#ednei')

const bt1 = document.querySelector('#btHA')
const bt2 = document.querySelector('#btcr7')
const bt3 = document.querySelector('#btmbp')
const bt4 = document.querySelector('#btNey')
const bt5 = document.querySelector('#btDy')
const bt6 = document.querySelector('#btMe')

//Eventos 

bt1.addEventListener('click',Halland)
bt2.addEventListener('click',Cr7)
bt3.addEventListener('click',Mbappe)
bt4.addEventListener('click',Neymar)
bt5.addEventListener('click',Dybala)
bt6.addEventListener('click',Messi)

//Funções 

function Halland (){
    ednei.src="/images/haaland.png"    
}
function Cr7 (){
    ednei.src="/images/cr7.jpg"    
}
function Mbappe (){
    ednei.src="/images/mbappe.jpg"    
}
function Neymar (){
    ednei.src="/images/neymar.jpg"    
}
function Dybala (){
    ednei.src="/images/dybala.jpg"    
}
function Messi (){
    ednei.src="/images/messi.jpg"    
}

