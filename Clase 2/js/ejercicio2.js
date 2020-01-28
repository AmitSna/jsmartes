var respuesta=prompt("Ingrese el rol: admin | recursos")
if(respuesta =="admin" || respuesta=="recursos"){
    var clave=prompt("Ingrese la clave")
    if(clave==1234){
        var usuario=prompt("Ingrese nombre de usuario: ")

    }
}
else{
    window.location.href="Error.html";
}

document.querySelector("#cabecera").innerHTML="Hola " + usuario+" Bienvenido a la aplicación";