console.log("Modulo 6 - Algoritmos I: Práctica DNI");
console.log("=====================================");

/*
 *  CALCULAR LETRA DEL DNI:
 * Entrada: Número entre 0 y 99999999, si no cumple se identificara en un aviso.
 * Algorimto:
 *     - Dividir el numero entre 23 (division entera)
 *     - Asignar al juego de letras
 * 
*/
const asignarLetra = resto => {
    let letter;
    switch (resto) {
        case 0:
            letter = "T";
            break;
        case 1:
            letter = "R";
            break;
        case 2:
            letter = "W";
            break;
        case 3:
            letter = "A";
            break;
        case 4:
            letter = "G";
            break;
        case 5:
            letter = "M";
            break;
        case 6:
            letter = "Y";
            break;
        case 7:
            letter = "F";
            break;
        case 8:
            letter = "P";
            break;
        case 9:
            letter = "D";
            break;
        case 10:
            letter = "X";
            break;
        case 11:
            letter = "B";
            break;
        case 12:
            letter = "N";
            break;
        case 13:
            letter = "J";
            break;
        case 14:
            letter = "Z";
            break;
        case 15:
            letter = "S";
            break;
        case 16:
            letter = "Q";
            break;
        case 17:
            letter = "V";
            break;
        case 18:
            letter = "H";
            break;
        case 19:
            letter = "L";
            break;
        case 20:
            letter = "C";
            break;
        case 21:
            letter = "K";
            break;
        case 22:
            letter = "E";
            break;
    }

    return letter;
}

let number = null;
do {
    number = prompt("Indroduce tu DNI: ");

    // Validar Entrada
    if ( parseInt(number) === Number(number) ) {
        number = Number(number);
        //Validamos que esta en el rango
        if (number > 0 && number <= 99999999) {
            let rest = number %23;
            let letra = asignarLetra(rest);
    
            alert("Número DNI: " + number + ", Letra: " + letra);
    
    
        } else {
            alert("El valor " + number + " no es un válido");
        }
    } else {
        if (number !== null) alert("El valor " + number + " no es un numero");
    }

} while (number !== null);



