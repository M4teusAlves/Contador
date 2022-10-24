const cont = document.getElementById("cont")
var contador = 0

function incremento(){
    contador++
    cont.innerHTML = contador
}

function decremento(){
    contador--
    cont.innerHTML = contador
}