console.log("Modulo 6 - Algoritmos I: Validación Formulario");
console.log("==============================================");

/*
 *  VALIDAR FORMULARIO:
 * Nombre y apellidos tienen mas de 5 caracteres.
 * La fecha de nacimiento debe ser válida
 * Validar que el DNI sea correcto.
 * Verificar que el telefono, tiene 9 caracteres y comienza por 9, 8 7 o 6
 * Lanzar la validación del formulario completo cuando se pulse enviar.
*/

const isValidFullname = fullname => fullname && (fullname.length >= 5);

// Full-name validation
const validateFullName = () => {
    const fullnameField = document.getElementById("fullName");
    console.log(fullnameField.value);
    const valid = isValidFullname(fullnameField.value);
    console.log(valid);
    if (valid) {
       fullnameField.classList.remove("error") 
    } else {
        fullnameField.classList.add("error");
    }

    return valid;
}
//Birthdate validation


const handleForm = (event) => {
    event.preventDefault();

    validateFullName();

    console.log("Ejecutando Formulario");
}

document.getElementById("submit").addEventListener("click", handleForm);