
Num1 = parseInt(prompt("Ingrese el numero"))

function esPar(){

    if(Num1 % 2==0){
        return "Es par"
    }
    else{
        return "es impar"
    }
 
}


document.getElementById("Resultado").innerHTML = esPar();