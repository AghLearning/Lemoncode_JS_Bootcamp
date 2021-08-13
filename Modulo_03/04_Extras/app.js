console.log("Modulo 3: Ejercicio Extra");
console.log("=========================");

const dia = "Miércoles";
const diaSemana = 3;      
const hora = 3;

const semana = [
    {
        day: "Lunes",
        subject: "Matemáticas",
    },
    {
        day: "Martes",
        subject: "Lengua",
    },
    {
        day: "Miércoles",
        subject: "Física",
    },
    {
        day: "Jueves",
        subject: "Química",
    },
    {
        day: "Viernes",
        subject: "Gimnasia",
    },

];

//console.log(semana[dia].subject);
console.log(semana[(diaSemana-1)].subject);

let saludo = "";
if (hora > 6 && hora <= 12) {
    saludo = "Buenos Días!!";
} else if (hora > 12 && hora <=20) {
    saludo = "Buenas Tardes!!";
} else {
    saludo = "Buenas Noches y Felices Sueños!!";
}

console.log(saludo);


