function TamanoPalabra(){
    
    return Nombre.length
   }

   let Nombre = prompt("Ingrese una palabra")
   let Tamano = TamanoPalabra(Nombre)

document.getElementById("Resultado").innerHTML = "El tamaño es " + Tamano;
