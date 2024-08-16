let Nombre = "Axel";
let Apellido = "Koziel";
let Edad = 17;
let Dni = 47336256;
let Altura = 185;


let Concatenar = Nombre + " " + Apellido;

let datos = document.getElementById("datos");

datos.innerHTML() = `

    <h1> Soy la caja de datos </h1>

    <h2> Mi nombre es ${Nombre} ${Apellido} </h2>

`
