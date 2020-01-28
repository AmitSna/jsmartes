var fecha = new Date("Thu, 21 May 2020");
var dia_semana= fecha.getDay();
var anio= fecha.getFullYear();
var mes= fecha.getMonth();
var dia_mes= fecha.getDate();
alert(fecha.getMonth());
switch(mes){
case 1:
case 2:
case 3:
    mensaje="Trimestre 1";
    break;
case 4:
case 5:
case 6:
    mensaje="2do. Trimestre";
    break;
case 7:
case 8:
case 9:
        mensaje="Trimestre 3";
        break;
default:
        mensaje="Trimestre 4";
        break;
}
alert(mensaje);