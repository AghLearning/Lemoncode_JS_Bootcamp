
const validateData = (a, b) => (!isNaN(a) && !isNaN(b)) ? true : false;

const printError = () => console.log("Error: Debe introducir dos valores numéricos.");
const printResult = (result) => document.getElementById("txt-result").innerHTML = result;

const sum = (a, b) => a + b;  
const diff = (a,b) => a - b;  
const prod = (a,b) => a * b;  
const div = (a,b) =>  a / b; 

console.log("Resultado Suma: " + sum(4,0));
console.log("Resultado Resta: " + diff(4,0));
console.log("Resultado Mult.: " + prod(4,2));
console.log("Resultado Div.: " + div(4,2));

const getValueA = () => parseInt(document.getElementById("input-a").value);
const getValueB = () => parseInt(document.getElementById("input-b").value);


const handleSum = () => {
    validateData(getValueA(), getValueB()) ? printResult(sum(getValueA(), getValueB())) : printError();
}

const handleDiff = () => {
    validateData(getValueA(), getValueB()) ? printResult(diff(getValueA(), getValueB())) : printError();
}

const handleProd = () => {
    validateData(getValueA(), getValueB()) ? printResult(prod(getValueA(), getValueB())) : printError();
}

const handleDiv = () => {
    validateData(getValueA(), getValueB()) && getValueB() !=0 ? printResult(div(getValueA(), getValueB())) : printError();
}



document.getElementById("btn-sum").addEventListener("click", handleSum);
document.getElementById("btn-dif").addEventListener("click", handleDiff);
document.getElementById("btn-prod").addEventListener("click", handleProd);
document.getElementById("btn-div").addEventListener("click", handleDiv);
// document.getElementById("btn-div").addEventListener("click", function() {
//     validateData(getValueA(), getValueB()) && getValueB() !=0 ? printResult(div(getValueA(), getValueB())) : printError();
// });

