console.log("Modulo 2 - Entrega");
console.log("==================");


// Cálculo de precios e IVA.
console.log("Modulo 3: Cálculo de precios e IVA.");
console.log("===================================");

const product = { count: 3, price: 12.55, type: "ropa" };

function getTotal(product) {
    return product.count > 0 ? product.count * product.price : 0;
};

function getVat(product) {
    switch (product.type) {
        case "alimentacion":
            return product.price * 0.10;
            break;
        case "libro":
            return product.price * 0.04;
            break;    
        default:
            return product.price * 0.04;
            break;
    };
};

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
}
    
function printProductPrice(product) {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product);
    const total = subtotal + vat;
    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:", total + "€");
}
    

printProductPrice(product);

console.log("Modulo 3: Salario");
console.log("=============================");

const empleado = {
    bruto: 35000,
    hijos: 2,
    pagas: 14
}

let retencion = 0
if (empleado.bruto < 12000) {
    retencion = 0;
} else if (empleado.bruto >= 12000 && empleado.bruto < 24000) {
    retencion = 8;
} else if (empleado.bruto >= 24000 && empleado.bruto < 34000) {
    retencion = 16;
} else {
    retencion = 30;
}

let bonificacionHijos = 0;
if (retencion > 0 && empleado.hijos>0) {
    bonificacionHijos = retencion -2
}

const nominaNetaAnual = empleado.bruto  - (empleado.bruto * (retencion/100));
const nominaNetaMensual = nominaNetaAnual / empleado.pagas
console.log("El empleado cobra " + nominaNetaAnual + "€ anuales netos, esto es: " + nominaNetaMensual + "€/mes");