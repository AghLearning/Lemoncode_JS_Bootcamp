const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];

const printLine = (item) => {
    // console.log("====================================");
    console.log("SKU: " + item.id + " - Nombre: " + item.name);
    console.log("   Precio: " + item.price + "€")
    console.log("   Cantidad: " + item.count);
    console.log("   Premium: " + ( (item.premium) ? "SI": "NO") );
}

const printCarrito = (carrito) =>  {
    for (const compra of carrito) {
        printLine(compra);
    }
}

const printList = (carrito) => {
    document.write("<h3>Tu Carrito de la compra:</h3>");
    for (const compra of carrito) {
        document.write("<ul>");
        document.write("<li>" + compra.name + "</li>");
        document.write("</ul>");
    }
}

//A) MOSTRAR EL CARRITO DE LA COMPRA
console.log("MOSTRAR CARRITO DE LA COMPRA");
console.log("============================");

for (const compra of carrito) {
    printLine(compra);
}


//B) LISTAR TODOS LOS PRODUCTOS
console.log("LISTADO DE PRODUCTOS");
console.log("====================");
for (const producto of carrito) {
    console.log("   " + producto.name);
}


//C) ELIMINAR PRODUCTO 54657
console.log("ELIMINAR PRODUCTO 54657");
console.log("=======================");
let productoEliminado;
let carritoCopia = carrito.slice();
for (const compra of carritoCopia) {
    if (compra.id === 54657) productoEliminado = carritoCopia.indexOf(compra);
}

let arraySinProducto = carritoCopia.splice(productoEliminado, 1);
printCarrito(carritoCopia);

//D) CALCULAR EL TOTAL DE LA COMPRA
console.log("TOTAL DE LA COMPRA");
console.log("==================");
let totalCompra = 0;
for (const compra of carrito) {
    totalCompra += compra.price * compra.count;
}
console.log("Total Compra: " + totalCompra);

//E) FILTRA PRODUCTOS PREMIUM
console.log("FILTRAR PRODUCTOS PREMIUM");
console.log("==================");
let carritoPremium = new Array();
for (const compra of carrito) {
    if (compra.premium) carritoPremium.push(compra);
}

printCarrito(carritoPremium);

//X01: SI TODOS SON PRODUCTOS PRIME, MOSTRAR MENSAJE "SIN GASTOS DE ENVIO"
let arePrime = true;
for (const compra of carrito) {
    arePrime = arePrime && compra.premium;
}
if(arePrime) console.log("SIN GASTOS DE ENVIO.");

//X02: MOSTRAR EL CARRITO EN UN LISTADO HTML BÁSICO
printList(carrito);

//X03: APLICAR 5% DESCUENTO SI COMPRA > 100 €
console.log("APLICAR DESCUENTO");
console.log("=================");
if(totalCompra > 100) console.log("Precio con Descuento: " + totalCompra * (1- 0.05));