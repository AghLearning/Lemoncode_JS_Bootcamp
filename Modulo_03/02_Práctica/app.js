const booking = {count: 5, price: 127.95};
const booking1 = {count: 3, price: 127.95};
const booking2 = {count: 7, price: 112.95};

// Calcular precio total
let total = booking.count * booking.price;

console.log("Total: " + total + "€");

// Calcular el descuento (20% si total > 500)
const pcDesc = 20 /100;
let descuento = (total > 500) ? total * pcDesc : 0;

console.log("Descuento: " + descuento);

// Obtenemos el total con el descuento aplicado
if (total > 500 && descuento > 0) {
    let totalDescontado = total - descuento;
    console.log("Total Final (descuento aplicado): " + totalDescontado + "€");
} else  {
    console.log("Total Final (no aplica descuento): " + total + "€")
}

// Ejercicios Extra:

//a) Booking 1 = Booking 2 ?
console.log("Son iguales: " + (booking1 == booking2) );  // esta comparativa no va a dar resultado.

if (booking1.count == booking2.count && booking1.price === booking2.price) {
    console.log("Las reservas son iguales");
} else {
    console.log("Las reservas son distintas");
}


//b) Suma de noches de la dos reservas
let totalNoches = booking1.count + booking2.count;
console.log("Total noches: " + totalNoches);

//c) Comparar dos reservas para mostrar la de mayor número de noches
if (booking1.count > booking2.count) {
    //reservaMayor = booking1;
    console.log("La reserva 1 tiene mas noches(" + booking1.count + ") que la 2 (" + booking2.count +")");
} else if (booking1.count < booking2.count) {
    //reservaMayor = booking2;
    console.log("La reserva 2 tiene mas noches(" + booking2.count + ") que la 1 (" + booking1.count +")");
} else {
    console.log("Las reservas son del mismo numero de noches: " + booking2.count);
}

let reservaMayor = (booking1.count > booking2.count) ? booking1 : booking2;
let cuales = (reservaMayor.count===booking1.count) ? "Booking1": "Booking2";
console.log("Reserva mayor (" + reservaMayor.count + "): " + cuales);

//d) Ampliar una noche más una reserva.
console.log("Ampliada la reserva 1: " + ++booking1.count);


//e) Calcular la diferencia de precio total entre dos reservas (incluidos descuentos).
console.log("Diferencia de precio: " + (booking1.price + booking2.price));

//f) Comparar dos reservas para mostrar la de mayor precio total (incluidos descuentos).
let total1 = booking1.price * booking1.count;
let total2 = booking2.price * booking2.count;
if (total1 > total2) {
    console.log("La reserva 1 tiene un importe total (" + total1 + ") mayor que la 2 (" + total2 + ")");
} else {
    console.log("La reserva 1 NO tiene un importe total (" + total1 + ") mayor que la 2 (" + total2 + ")");
}


//g) Mostrar número de reservas a las que se podrían aplicar descuento.
let reservaConDescueto = "Nadie";
if (total1 > 500) {
    reservaConDescueto = ((reservaConDescueto === "Nadie")? "" : reservaConDescueto + ", ") + "Booking1";
}
if (total2 > 500) {
    reservaConDescueto = ((reservaConDescueto === "Nadie")? "" : reservaConDescueto + ", ") + "Booking2";
}

console.log("Es posible aplicar el descuento a: " + reservaConDescueto);

//h) Mostrar "Todas con descuento" si las dos reservas tienen descuentos.
if (total1 > 500 && total2 > 500) {
    console.log("Todas con descuento.");
}

//i) Mostrar la suma del precio total con descuentos de las dos reservas.
const descuento1 = (total1 > 500) ? total1 * 0.20 : 0;
const descuento2 = (total2 > 500) ? total2 * 0.20 : 0;
const granTotal = (total1 - descuento1) + (total2 - descuento2);
console.log("Total Compras (neta): " + granTotal);
