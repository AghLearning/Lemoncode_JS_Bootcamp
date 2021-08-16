const me = {
    altura : 1.45,
    peso: 45,
    sexo: "mujer"
}

// var altura = 1.74;
// var peso = 93;
// var sexo = "hombre";


// SIN USAR FUNCIONES
// //h(cm) - 150 *  0.75| 0.6 + 50)
// var pesoIdeal;
// if (sexo === "hombre") {
//     pesoIdeal = (altura * 100 - 150) *0.75 + 50
// } else  {
//     pesoIdeal = (altura * 100 - 150) *0.60 + 50
// }

// console.log("Tu peso ideal corresponde a " + pesoIdeal + "kg.");

// var excesoPeso = peso-pesoIdeal;

// if (excesoPeso >= 1 ) {
//     console.log("Cuidado con los excesos! Debes adelgazar " + excesoPeso + "kg.");
// } else if (excesoPeso <= -1 ) {
//     console.log("Come un poco más! Debes recuperar " + (excesoPeso * -1) + "kg.");
// } else {
//     console.log("Enhorabuena!! Estas en tu peso ideal.");
// }

//ENCAPSULAMOS EN FUNCIONES
var CalcularPesoIdeal = (sexo, altura) => {
    var factorSexo = (sexo === "hombre") ? 0.75 : 0.60;
    return (altura * 100 - 150) * factorSexo + 50
}

var CalcularExcesoPeso = (pesoActual, pesoIdeal) => pesoActual - pesoIdeal;

var InformarPesoIdeal = (pesoIdeal) => {
    console.log("Tu peso ideal es " + pesoIdeal + "kg.");
}

var InformasEstadoSobrepeso = (excesoPeso) => {
    if (excesoPeso >= 1 ) {
        console.log("Cuidado con los excesos! Debes adelgazar " + excesoPeso + "kg.");
    } else if (excesoPeso <= -1 ) {
        console.log("Come un poco más! Debes recuperar " + (excesoPeso * -1) + "kg.");
    } else {
        console.log("Enhorabuena!! Estas en tu peso ideal.");
    } 
}


var InformePesoIdeal = (person)=> {
    var pesoIdeal = CalcularPesoIdeal(person.sexo, person.altura);
    var excesoPeso = CalcularExcesoPeso(person.peso, pesoIdeal);

    InformarPesoIdeal(pesoIdeal);
    InformasEstadoSobrepeso(excesoPeso);
}



InformePesoIdeal(me);
