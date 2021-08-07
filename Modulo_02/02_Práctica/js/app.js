console.log("Hola");

/* Utilizando variables 
var nombreHotel = prompt("¿Que hotel te gusta?");
console.log(nombreHotel);
document.getElementById("hotel-name").innerText = "Hotel " + nombreHotel;

var localizacionHotel = prompt("y... ¿dónde está?");
document.getElementById("hotel-location").innerHTML = localizacionHotel;
*/

/* Utilizandoel objeto */
var hotel = {
    name: "",
    location: ""
};

hotel.name = prompt("¿Que hotel te gusta?");
hotel.location = prompt("y... ¿dónde está?");

document.getElementById("hotel-name").innerText = "Hotel " + hotel.name;
document.getElementById("hotel-location").innerHTML = hotel.location;




