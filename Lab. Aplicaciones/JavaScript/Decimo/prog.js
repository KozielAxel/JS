let Num1 = parseInt(prompt("Ingrese el primer numero"))
let Num2 = parseInt(prompt("Ingrese el segundo numero"))
let OP = parseInt(prompt("Ingrese 1:Sumar 2:Restar 3:Dividir 4:Multiplicar"))


function sumar(){
    return Num1 + Num2
}

function restar(){
    return Num1 - Num2
}

function dividir(){
    return Num1 / Num2
}

function Multiplicar(){
    return Num1 * Num2
}



switch(OP){
    case 1:
        document.getElementById("Resultado").innerHTML = sumar()
        break
    case 2:
        document.getElementById("Resultado").innerHTML = restar()
        break
    case 3:
        document.getElementById("Resultado").innerHTML = dividir()
        break
    case 4:
        document.getElementById("Resultado").innerHTML = Multiplicar()
        break
    default:
        window.alert("Ingrese una opcion de las dadas");
        break




}