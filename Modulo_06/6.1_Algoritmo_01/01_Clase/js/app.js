console.log("Modulo 6 - Algoritmos I: Clase");
console.log("==============================");

var products = [
    {
        product: "Jamón Ibérico",
        units: 1,
        price: 9.99
    },
    {
        product: "Queso Tostado",
        units: 6,
        price: 4.45
    },
    {
        product: "Vino Tinto",
        units: 12,
        price: 8.15
    },
];
    


/*  Obtener el precio total aplicando los siguientes descuentos
 *   - Si la cantidad supera 5 unidades => 5% de descuento al total de dicho producto.
 *   - Si el coste total de un producto supera 50 € se aplica un descuento adicional del 5%,
*/

const getDiscount = (units, cost) => {
    const unitDiscount = units > 5 ? 5 : 0;
    const costDiscount = cost > 50 ? 5 : 0;
    return unitDiscount + costDiscount;
}

const productCost = product => {
    const productCost = product.units * product.price;
    const productDiscount = getDiscount(product.units, productCost);
    return productCost * (1 - productDiscount/100);
}

var totalCost = productList => {
    let totalCost = 0;
    for (const producto of productList) {
        totalCost = totalCost + productCost(producto);
    }
    return totalCost;
}

console.log("Importe total: " +  totalCost(products));