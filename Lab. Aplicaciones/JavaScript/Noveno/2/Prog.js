Num1 = parseInt(prompt("Ingrese el Largo del rectangulo"))
Num2 = parseInt(prompt("Ingrese el alto del rectangulo"))


function Area(){
    return Num1*Num2
}

document.getElementById("Resultado").innerHTML = Area()