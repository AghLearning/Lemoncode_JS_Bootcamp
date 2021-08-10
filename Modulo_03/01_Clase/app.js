console.log("Playground del modulo 3");
console.log("=======================");

/* Operadores - Asignacion */
const showAsignacion = true;
if (showAsignacion == true) {
    const a =2;
    const b= 3;
    const myVariable = a + b;

    console.log("Asignacion: " + myVariable);
}

/* Operadores - Asignacion */
const showIncremento = true;
if (showIncremento == true) {
    let a =2;
    let b= 3;
    
    ++a;
    --b;

    console.log("Incremento - a: " + a + " y decremento - b: " + b);

    let c = 3;
    let d = 3;

    let e = ++c + 3;
    let f = d++ + 3;
    console.log("Pre-Incremento: " + e + " siendo var = " + c);
    console.log("Post-Incremento: " + f + " siendo var = " + d);
}

const showOpMatematioc = false;
if (condition) {
    const a = 4 + 4;  // a tiene valor 8
    const b = 1 - 1; // b tiene valor 0
    const c = 10 / 2; // c tiene valor 5
    const d = 2 * 3; // d tiene valor 6
    const e = 12 % 5; // e tiene valor 2

    let valor1 = 1;
    let valor2 = 1;
    const suma = valor1 + valor2;   // suma tiene valor 2
    const suma2 = valor1 + valor2 + suma; // suma2 tiene valor 4
    const sumaGrupos = (valor1 + valor2) * (suma + suma2); // sumaGrupos tiene valor 12

}