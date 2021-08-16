

const booking = {id:3, price: 37.50, count: 3, room: "standard", prepaid: false, succeeded: true};

let bookings = [
    { id: 1, price: 45.30, count: 3, room: "standard", prepaid: false, succeeded: true },
    { id: 2, price: 92.45, count: 4, room: "superior", prepaid: false, succeeded: true },
    { id: 3, price: 63.50, count: 7, room: "standard", prepaid: true, succeeded: false },
    { id: 4, price: 37.50, count: 2, room: "standard", prepaid: true, succeeded: true },
    { id: 5, price: 87.90, count: 5, room: "superior", prepaid: true, succeeded: false }
];

// const imprimir = (booking) => {
//     console.log("----RESERVA " + booking.id + "------");
//     console.log(" Price: " + booking.price * booking.count + " €");
//     console.log(" Habitación: " + booking.room);
//     console.log(" Pagada: " + booking.prepaid);
//     console.log(" Error: " + !booking.succeeded);
// }

const imprimir = (booking) => {
    console.log("------------------");
    for (const key in booking) {
        console.log(key.toUpperCase() + ": " + booking[key]);
    }
}

const existeError = (bookings) => {
    let succeeded = true;
    // for (const booking of bookings) {
    //     succeeded = succeeded && booking.succeeded; 
    // }

    let i= 0;
    while (succeeded) {
        succeeded = succeeded && bookings[i].succeeded;  
        i++
    }

    return !succeeded;
}

const getTotal = (bookings) => {
    let total = 0;
    for (const booking of bookings) {
        total += booking.price * booking.count;
    }

    return total;
}
    
console.log("--- LISTAR RESERVAS ------");
//Bucle For
// for (let i = 0; i < bookings.length; i++) {
//     imprimir(bookings[i]);
// }

//Bucle For...of
for (const booking of bookings) {
    imprimir(booking);
}

console.log("¿Hay reservas erroneas? " + existeError(bookings));

//Listar reservas succeeded
console.log("--- RESERVAS EXITOSAS ------");
for (const booking of bookings) {
    if (booking.succeeded) imprimir(booking);
}

//Listar reservas pagadas
console.log("--- RESERVAS PAGADAS ------");
for (const booking of bookings) {
    if (booking.prepaid) imprimir(booking);
}

// Obtener el total
console.log("--- OBTENER EL TOTAL ------");
console.log("Total: " + getTotal(bookings));

// apliar un 10% de descuento a todas las reservas
console.log("--- APLICAR UN 10% DESCUENTO A TODAS LAS RESERVAS ------");
for (const booking of bookings) {
    booking.price = booking.price * 0.90;
    imprimir(booking);    
}

//Reservas pagadas que han fallado
console.log("--- RESERVAS PAGADAS Y FALLIDAS ------");
for (const booking of bookings) {
    if (booking.prepaid && !booking.succeeded) imprimir(booking);
}

// IDENTIFICADORES REPETIDOS.
console.log("--- COMPROBAMOS SI HAY ID REPETIDOS ------");
bookings.push(booking);
let repeated = false;
for (let i = 0; i < bookings.length; i++) {
    for (let x = i+1; x < bookings.length; x++) {
        repeated = repeated || bookings[i].id === bookings[x].id;      
    }
}
console.log("Identificadores repetidos: ", repeated);
