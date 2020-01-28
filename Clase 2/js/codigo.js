//alert ("JavaScript Clase 2");
/*var respuesta = confirm('seguro que quiere continuar?');
alert('La respuesta es: '+respuesta);*/
/*  Operadores Relacionales
    >
    <
    >=
    <=
    ==
    !=
    === (Idéntico) 
    Operadores Lógicos
    &&
    ||
    !
*/
/*var nro1=10; 
var nro2=20; 
var respuesta=nro1<nro2;
alert(respuesta);*/

//If
/*if(condicion){
    resultado;
}*/
/*var edad=prompt("Cuantos años tiene el instructor ?");*/
/*if(edad<50){
    alert("Es definitivamente un pibe")
}
if(edad>50){
    alert("Es un hombre maduro")
}*/
/*if(edad<50){
    alert("Es definitivamente un pibe")
}
else{
    alert("Es un hombre maduro")
}*/
/*if(edad<50){
    alert("Es definitivamente un pibe")
}
else if(edad==50){
    alert("Usted está por comenzar la curva descendente")
}
else{
    alert("Es un hombre maduro")
}*/
/*var edad=prompt("La edad del usuario es: ?");
if(edad>=20){
    var nombre=prompt("Cuál es su nombre: ?")
    if(nombre=="Ariel"){
        alert("Hola Ariel")
    }
    else
    {
        alert("Usted tiene 20 años pero no es Ariel")
    }
}
else{
    alert("Usted no tiene ni siquiera 20 años !")
}*/
//switch-case
/*var fecha = new Date();
var dia_semana= fecha.getDay();
var anio= fecha.getFullYear();
var mes= fecha.getMonth();
var dia_mes= fecha.getDate();
switch(dia_semana+1){
 case 1:
    mensaje="Día Domingo";
    break;
 case 2:
    mensaje="Día Lunes";
    break;
 case 3:
    mensaje="Día Martes";
    break;
 case 4:
    mensaje="Día Miercoles";
    break;
 case 5:
    mensaje="Día Jueves";
    break;
 case 6:
    mensaje="Día Viernes";
    break;
 case 7:
    mensaje="Día Sabado";
    break;
}
alert(mensaje)*/
/*var nro1=prompt("Ingrese el numero 1: ");
var nro2=prompt("Ingrese el numero 2: ");
var operacion=prompt("Seleccione la operacion: 1. suma | 2. resta | 3. producto: ");
var resultado=0;
switch(operacion){
    case 1:
        resultado=nro1+nro2;
        alert(resultado);
        break;
    case 2:
        resultado=nro1-nro2;
        alert(resultado);
        break;
    case 3:
        resultado=nro1*nro2;
        alert(resultado);
        break;
}*/
//DOM >> Document Object Model

/*var contenido = document.getElementById('titulo1');
//alert(contenido);
//alert(contenido.innerHTML);
contenido.innerHTML="Nuevo título de la página de la clase 2";
alert(contenido.innerHTML);*/
/*var contenido = document.querySelector('h1');
contenido.innerHTML="Nuevo Título";
alert(contenido.innerHTML);*/
var contenido = document.querySelector('#titulo2');
contenido.innerHTML="Nuevo Título 2";
alert(contenido.innerHTML);





 













