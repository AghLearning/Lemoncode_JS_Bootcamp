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

//A) MOSTRAR EL CARRITO DE LA COMPRA
const printLine = (item) => {
    console.log("====================================");
    console.log("SKU: " + item.id + " - Nombre: " + item.name);
    console.log("   Precio: " + item.price + "€")
    console.log("   Cantidad: " + item.count);
    console.log("   Premium: " + ( (item.premium) ? "SI": "NO") );
}

for (const compra of carrito) {
    printLine(compra);
}


//B) LISTAR TODOS LOS PRODUCTOS
console.log("LISTADO DE PRODUCTOS");
console.log("====================");
for (const producto of carrito) {
    console.log(producto.name);
}


//C) ELIMINAR PRODUCTO 54657
console.log("ELIMINAR PRODUCTO 54657");
console.log("=======================");
const elment = carrito.indexOf(54657);
console.log(elment.name);

//D) CALCULAR EL TOTAL DE LA COMPRA

//E) FILTRA PRODUCTOS PREMIUM

//X01: SI TODOS SON PRODUCTOS PRIME, MOSTRAR MENSAJE "SIN GASTOS DE ENVIO"

//X02: MOSTRAR EL CARRITO EN UN LISTADO HTML BÁSICO

//X03: APLICAR 5% DESCUENTO SI COMPRA > 100 €