console.log("Modulo 09: Llamadas asíncronas");
console.log("==============================");

/* CALLBACKS
const myCallback = () =>  alert("Hola despues de 3 seg.");

setTimeout(myCallback, 3000);
*/


/* PROMISES 
const myPromise = new Promise((resolve, reject) =>{
    const currentDay = new Date().getDate();

    if (currentDay === 1 ) {
        reject("Hoy día (" +currentDay + ") no trabajamos!!");
    } else if (currentDay <= 15) {
        setTimeout(() => {
            resolve("Estamos en la primera quincena, ahorra!!");
        }, 2000);
        
    } else {
        resolve("Ya es segunda quincena, se acerca la paga!!");
    }

    // setTimeout(function() {
    //     resolve("Hola, esta es la respuesta correcta de la promesa");
    // }, 3000); 

});

myPromise
    .then(result => {
        const mySecondPromise = new Promise(resolve => {
            setTimeout(() => {
                resolve("Resultado de la respuesta: " + result);
            }, 5000);
        })

        return mySecondPromise;

    })
    .then(result2 => alert(result2))
    .catch(error => {
        alert("Error en la promesa: " + error)
    });
*/

/* FETCH 
fetch("https://api.github.com/orgs/valvanera/members")
    .then(response => {
        return response.json();
    })
    .then(data => {
        // console.log(data);
        for (const item of data) {
            document.write(item.login);
        }
    })
    .catch(error => console.log("Se ha producido un error: " +  error));

*/

/* AXIOS */
import axios from "axios";

axios.get("https://api.github.com/orgs/lemoncode/members")
    .then(response => response.data)
    .then(data => console.log(data));
