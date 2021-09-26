/*condicionales - Switch
Funcionan similar a las condicionales, solo que la diferencia de la condición normal if else
La condicional SHITCH solo se puede validar una sola condición entre varios.
*/


let Nombre= prompt("Ingresa tu nombre");
let Edad = prompt ("Ingresa tu edad");
switch (/*key - condición*/ edad>=18) {
    case /*value*/"18":
        alert ("Tienes acceso al catálogo de peliculas violentas");
        break;

        case /*value*/"25":
        alert ("Tienes acceso al catálogo de peliculas violentas");
        break;

        case /*value*/"35":
        alert ("Tienes acceso al catálogo de peliculas violentas");
        break;


    default:
        alert ("Debes ser mayor de 18 años para acceder al catalogo");
        break;
}