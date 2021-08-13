console.log("Modulo 3: Laboratorio");
console.log("======================");

const product = { count: 3, price: 12.55, type: "ropa" };
const empleado = {
    bruto: 35000,
    hijos: 2,
    pagas: 14
}

function getVat(product) {
    switch (product.type) {
        case "ropa":
            return  10/100;
            break;
        case "alimentacion":
            return  4/100;
                break;
        default:
            return  21/100;
            break;
    }
}

function getTotalVat(product) {
    return product.count > 0 ? product.price * getVat(product) : 0;
}
    

let precioTotal = 0;
const cantidad = (product.count <= 0) ? 0 : product.count;
if (cantidad > 0) {
    precioTotal = product.count * product.price;
}
console.log("Precio Total: " + precioTotal);

const precioTotalNuevo = (product.count <= 0) ? 0 : product.count * product.price;
console.log("Precio Total: " + precioTotalNuevo);

let iva = 0;
switch (product.type) {
    case "ropa":
        iva =  10/100;
        break;
    case "alimentacion":
            iva =  4/100;
            break;
    default:
        iva =  21/100;
        break;
}

const importeIvaUnidad = product.price * iva;
console.log("Importe de IVA ("+ (iva*100) + " %): " + importeIvaUnidad);

console.log("Modulo 3: Laboratorio - Extra");
console.log("=============================");

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

console.log("Modulo 3: Laboratorio - Avanzado");
console.log("=============================");
const importeIvaFuncion = getTotalVat(product);
console.log("La función devuelve un IVA por unidad de: " + importeIvaFuncion + "€");