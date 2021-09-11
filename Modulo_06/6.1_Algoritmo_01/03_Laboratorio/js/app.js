// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,

        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

const isEnoughtStock = () =>{

}

// const updateProduct = (product, event) => {
//     console.log(event.target.value);
// };

const setDescription = (item) => {
    let desc = document.createElement("div");
    desc.setAttribute("class", "product-name");
    desc.innerHTML = item.description + " - " + item.price + "€/ud.";

    return desc;
};

const setInput = (item) => {

    let input = document.createElement("input");
    input.setAttribute("class", "product-input");
    input.setAttribute("type", "number");
    input.setAttribute("value", item.units);
    input.setAttribute("min", "0");
    input.setAttribute("max", item.stock);
    input.addEventListener("change", event => item.units = event.target.valueAsNumber);

    return input;
};

const showShoppingList = products =>  {
    for (const product of products) {

        let listElement = document.createElement("li");
        listElement.appendChild(setDescription(product));
        listElement.appendChild(setInput(product));
    
        let main = document.getElementById("product-list-container");
        main.appendChild(listElement);
    }
};

const getTotal = (products) => {

    // let totales = {
    //     subtotal,
    //     impuestos,
    //     total
    // }
    let subtotal = 0;
    let impuestos = 0;
    let total = 0;

    for (const product  of products) {
        subtotal += product.units * product.price;
        impuestos += (product.price * product.units) * (product.tax/100);
    }

    total = subtotal - impuestos;

    document.getElementById("total-subtotal").innerText = subtotal;
    document.getElementById("total-impuestos").innerText = impuestos;
    document.getElementById("total").innerText = total;

};

const handelCalculate = () => {
    alert(products.length);
    getTotal(products);
}

showShoppingList(products);
getTotal(products);

document.getElementById("calcular").addEventListener("click", handelCalculate);




