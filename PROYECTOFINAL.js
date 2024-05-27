function saludo(nombre)
{
    alert("Bienvenido" + " " + nombre);
}
var nombreIngresado = prompt("Ingrese su nombre");

if(nombreIngresado != ""){
    saludo(nombreIngresado);
} else {
    alert("No ingreso su nombre")
}


var cantidadHuespedes = prompt("Ingrese cantidad de huespedes");

cantidadHuespedes = Number(cantidadHuespedes);

for(let index = 0; index < cantidadHuespedes; index++) {
    var fechaLlegada = prompt("Ingrese la fecha de llegada");
    var fechaSalida = prompt("Ingrese la fecha de salida");
    var numeroIngresado = prompt("Ingrese su dni");

    alert("Se reservo su hospedaje con fecha de ingreso del dia " + fechaLlegada + " " + "y su salida el dia" + " " + fechaSalida);
    alert ("Para continuar con el proceso porfavor haga click aqui");
}
