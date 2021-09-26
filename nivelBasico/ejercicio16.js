//DOM - Document Object Model JS puede acceder al DOM (Estructura del elemento HTML), 
//y a traves de el, puede modificar la pagina
//de hecho, puede modificar todos los estilos CSS, eliminar o añadir elementos y atributos relacionados
//tambien relaciona a todos los eventos de la página
//Obtener elemento de HTML

let datos = document.getElementById("datos");
//Funcion
const nombreusuario = () => {
    //let local
    let nombre = prompt("Ingresa tu nombre");
    //Muero y vivo en la funcion
    let nombre2 = "Valen";
        nombre2 = "Mary"
    console.log(nombre2);
    alert("Tu nombre es " + nombre)

    //numero = "Mary";
    //Console.log(numero);
}
nombre2 ="Mary";

//Funcion vacia
//Eventos (ONCLICK DESDE JAVASCRIPT)
datos.onclick=function () {
    nombreusuario();    
}


