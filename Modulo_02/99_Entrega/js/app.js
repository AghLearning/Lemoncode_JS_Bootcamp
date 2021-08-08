var hoteles = {
    Colon: {
        name: "Colón",
        location: "Béjar",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c8/0a/91/hotel-colon-spa.jpg?w=1000&h=-1&s=1"
    },
    Duques: {
        name: "Los Duques",
        location: "El Castañar (Béjar)",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a7/ac/a6/hotel-los-duques.jpg?w=1000&h=-1&s=1"
    },
    Caldero: {
        name: "El Caldero",
        location: "Sorihuela",
        img:"https://www.ruralesdata.com/cache/alojamientos/el-caldero/4zzzzz02.jpg"
    },
    Luciernaga: {
        name: "La Luciernaga",
        location: "Sorihuela",
        img:"https://media.er2.co/es/salamanca/50e17dafa1e9c/1600/56a10159c25a3.jpg"
    },

};

var stars = {
    1:
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    2:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    3:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    4:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    5:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>"
    };
    


var hotelSeleccionado = prompt("¿Qué hotel desea evaluar (Colon | Duques | Caldero | Luciernaga) ?");

document.getElementById("hotel-name").innerHTML = "Hotel " + hoteles[hotelSeleccionado].name;
document.getElementById("hotel-location").innerHTML = hoteles[hotelSeleccionado].location;
document.getElementById("hotel-img").src = hoteles[hotelSeleccionado].img;

var rating = prompt("¿Como califica al hotel( 1 a 5):");
//document.getElementById("hotel-rating").innerHTML = rating + " estrellas.";
document.getElementById("hotel-rating").innerHTML = stars[rating];


document.getElementById("anonymous").checked = confirm("¿Quiere que el comentario sea anónimo?");