//Ejemplo2 Switch

let nombre = prompt("Ingresa tu nombre");
let color = prompt(nombre + "Ingresa tu color favorito");

switch (color) {
    case "amarillo":
        alert("Eres una persona alegre");
        break;

        case "verde":
            alert ("Eres una persona saludable");        
        break;

            case "azul":
                alert ("Eres una persona tranquila");

    default:
        alert ("Favor ingresa un color");
        break;
}