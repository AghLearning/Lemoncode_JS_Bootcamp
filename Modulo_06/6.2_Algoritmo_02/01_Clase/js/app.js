console.log("Modulo 6: Algoritmos II - Clase");
console.log("===============================");

/* Random genera numero pseudo aletorio entre [0, 1)
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
*/

/* Algoritmo 1: Generación binaria 

//   0            0.5            1
//   [-------------|-------------)


const getRandom = (a,b) => Math.random() < 0.5 ? a :b;

console.log(getRandom("rojo", "negro"));
console.log(getRandom("rojo", "negro"));
console.log(getRandom("rojo", "negro"));
*/

/* Algoritmo II: Generación con multiples opciones:
 *    0    0.1   0.2   0.3   0.4   0.5   0.6   ...         1
 *    [-----|-----|-----|-----|-----|-----|----------------)
 *       0     1     2     3     4     5
 * 
 *   RANGO: => max - min + 1
 

const getRandomNumber =  () => Math.floor(Math.random() * 10);

console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
*/

/* Algoritmo III: Numero aleatorio entre 50 y 100 
const range  = 100-50 + 1;
console.log(Math.floor(Math.random()* range) + 50);

const getNumberBetween = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

console.log(getNumberBetween(1000,1025));
console.log(getNumberBetween(1000,1025));
console.log(getNumberBetween(1000,1025));
console.log(getNumberBetween(1000,1025));
console.log(getNumberBetween(1000,1025));

*/

/* ALGORITMOS DE BÚSQUEDA */

/* Busqueda secuencial o lineal
 

const array = [1, 3, 4, 5, 2, 9, 6, 7, 8];

const search = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }

    return -1;
}

console.log(search(array, 2));
console.log(array.indexOf(2));
*/

/* Búsqueda binaria 
 *  Se puede utilizar para buscar cuando el array esta ordenado.
 *  Utilizamos el algoritmo de punto medio.


const sortedArray = [12, 14, 23, 25, 30, 36, 43, 62, 67, 72, 88];
const binarySearch = (array, target) => {
    var min = 0;
    var max = array.length -1;

    while (min <= max) {
        var mid = Math.floor((max - min)/2) + min;
        if (array[mid] === target) return mid;
        else if (array[mid] < target) min = mid + 1;
        else max = mid -1;
    }

    return -1;
};

console.log(binarySearch(sortedArray, 88));
 */

/* SORTING */
const array =  [3, 5, 1, 8, 7, 2];

const swap = (array, a, b) => {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
};

/* a) Buble Sort -- ordenacion por burbuja 
 *     Tomammos grupos de dos en dos y buscamos el mayor de los dos.
 *     Reordenamos en caso de que esten invertidos.

const bubbleSort = array => {
    const size = array.length;

    for (let i = 0; i < size; i++) {
        // console.log("Iteracion: " + i);
        for (let left = 0; left < size - i; left++) {
            var right = left + 1;
            if (array[left] > array[right]) swap(array, left, right);

            // console.log(array);
        }
    }

    return array;
}

console.log("Array, sort function");
console.log(array.sort());

console.log("Buble Sort");
console.log(bubbleSort(array));
*/

/*
 * b) Selection Sort:
 *      - Se recorre la lista para buscar el menor elemento y se pone en la primera posición
 *      - Se comienza recorriendo desde 1 y se busca de nuevo el menor...  


var selectionSort = array => {
    var minIndex;
    var arraySize = array.length;

    console.log("TCL array(original): " + array)

    // Selecciona la posición que se va a rellenar con el elemento mas pequeño.
    for (let s = 0; s < arraySize; s++) {

        minIndex = s;

        //Buscamos el elemento mas pequeño del resto del array.
        for (let i = s + 1; i < arraySize; i++) {
            if (array[i] < array[minIndex] )   minIndex = i;    
        }
        
        //Colocamos el valor del menor elemento en la posición del array.
        swap(array, minIndex, s);

        console.log("TCL array: " + array)
    }

    return array;
}

console.log("Selection Sort");
console.log(selectionSort(array));
*/


/*
 * c) Insertion Sort:
 *      - Se compara un elemento con todos los que hay a su izquierda.
 *      - si es menor lo intercambia 
 */

const insertionSort = array => {

    console.log("IS (original) : " + array);

    let sortedLastIndex = 0;
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let currentIndex = i;
        let swapIndex = sortedLastIndex;

        console.log("IS(i) : " + i + " current: " + current);
        while (current < array[swapIndex] && swapIndex >=0 ) {
            swap(array, currentIndex--, swapIndex-- );
            console.log("    IS : " + array);
        }
        
        sortedLastIndex++
    }

    return array;

}

console.log("Insertion Sort");
console.log(insertionSort(array));