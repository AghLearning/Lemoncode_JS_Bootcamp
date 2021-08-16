console.log("Modulo 4: Eventos");
console.log("=================");

//event handler / Listener, se sejecuta cuando se produce el evento.

var handleButtonClick = () => alert("Has pulsado el botón.");
var handelInputChange = (e) => {
    console.log(e.target.value);
}

// registrar la función vinculada al evento
document.getElementById("myButton").addEventListener("click", handleButtonClick);
document.getElementById("main-header").addEventListener("click", handleButtonClick);
document.getElementById("my-input").addEventListener("keyup", handelInputChange);

