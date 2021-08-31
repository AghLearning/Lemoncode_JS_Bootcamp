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
const isValidYear = year => year && year >= 1850 && year <= new Date().getFullYear();
const isValidMonth = month => month && month >=1 && month <=12;
const isLeapYear = year => year % 400 === 0 || (year % 100 !==0 && year %4 === 0);
const isValidDay = (day, month, year) => {
    let febNumDays = isLeapYear(year) ? 29: 28;
    const monthLength = [31,febNumDays,31,30,31,30,31,31,30,31,30,31];

    return day > 0 && day <= monthLength[month-1];
};
const splitDateInParts = date => {
    const dtParts = date.split("/");
    return [parseInt(dtParts[0]), parseInt(dtParts[1]), parseInt(dtParts[2])];
};

const DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKET";
const isValidDNILetter = (dniLetter, dniNumber) => DNI_LETTERS[dniNumber % 23] === dniLetter.toUpperCase();
const isValidDNINumber = number => number && number >= 0 && number <= 99999999;

const isValidMobile = mobile => {
    return (
        mobile &&
        parseInt(mobile) &&
        mobile.length === 9 &&
        mobile.startsWith(9) || mobile.startsWith(8) || mobile.startsWith(7) || mobile.startsWith(6)
    );
};

// La fecha debe tener una longitud entre 8 y 10
//Fecha debe ser < año actual y mayor de 1850
//Mes entre 1 y 12
//Dias: max 31, 30 y febrero 28 o 29 segun sea bisiesto
const isValidDate = date => {
    
    if (date.length < 8 || date.length > 10) return false;

    const dtPartsInt = splitDateInParts(date);

    return isValidYear(dtPartsInt[2]) && isValidMonth(dtPartsInt[1])
            && isValidDay(dtPartsInt[0], dtPartsInt[1], dtPartsInt[2]);

};

const isOver18 = date => {
    const dtParts = splitDateInParts(date);
    const birthDate = new Date(dtParts[2], dtParts[1], dtParts[0]);

    const nowDate = new Date();
    const limitDate = nowDate.setFullYear(nowDate.getFullYear() - 18);

    return limitDate >= birthDate;

}

const showIsAdult = () => { 
    const birthDateField = document.getElementById("birthday");
    document.getElementById("age").innerHTML = isOver18(birthDateField.value) ? "SI" : "N0";
};

const isValidDNI = dni => {
    if (dni.length !== 9) return false;

    let dniNumber = dni.slice(0, 8);
    let dniLetter = dni.slice(8,9);

    return isValidDNINumber(dniNumber) && isValidDNILetter(dniLetter, dniNumber);

};


// Full-name validation
const validateFullName = () => {
    const fullnameField = document.getElementById("fullName");
    const valid = isValidFullname(fullnameField.value);

    if (valid) {
       fullnameField.classList.remove("error") 
    } else {
        fullnameField.classList.add("error");
    }

    return valid;
};

//Birthdate validation
const validateBirthDate = () => {
    const birthDateField = document.getElementById("birthday");
    
    const valid = isValidDate(birthDateField.value);
    if (valid) {
        birthDateField.classList.remove("error"); 
     } else {
        birthDateField.classList.add("error");
     }

    return valid;
};

//Valdate DNI
const validateDNI = () => {
    const dniField = document.getElementById("dni");
    valid = isValidDNI(dniField.value);

    if (valid) {
        dniField.classList.remove("error") 
     } else {
        dniField.classList.add("error");
     }

    return valid;
}

//Phone Validation
const validatePhoneNumber = () => {
    const mobileField = document.getElementById("mobile");
    valid = isValidMobile(mobileField.value);

    if (valid) {
        mobileField.classList.remove("error") 
     } else {
        mobileField.classList.add("error");
     }

    return valid;
}

// Global Validate
const validateInput = (id, validationFunction, onValidCallback) => {
    const field = document.getElementById(id);
    const valid = validationFunction(field.value);
   
    if (valid) {
        field.classList.remove("error");
        onValidCallback && onValidCallback();
     } else {
        field.classList.add("error");
     }

    return valid;
}

// Re-esribimos las funciones de valicacion para invocarlas en eventos.
// Estas funciones reemplazarian a las validate pero las mantenemos para mantener toda la historia.
const valFullName = () => validateInput("fullName", isValidFullname);
const valBirthDate = () => validateInput("birthday", isValidDate, showIsAdult );
const valDNI = () => validateInput("dni", isValidDNI);
const valMobile = () => validateInput("mobile", isValidMobile);

//Definiendo un objeto que mapee todas las validaciones a aplicar
const inputs = {
    fullName: () => validateInput("fullName", isValidFullname),
    birthday: () => validateInput("birthday", isValidDate, showIsAdult ),
    dni: () => validateInput("dni", isValidDNI),
    mobile: () => validateInput("mobile", isValidMobile)
};

// Submit form
const handleForm = (event) => {
    event.preventDefault();

    /*
    validateFullName();
    if (validateBirthDate()) showIsAdult();
    validateDNI();
    validatePhoneNumber();
    */

    /* Utilizando una funcion global 
    validateInput("fullName", isValidFullname);
    validateInput("birthday", isValidDate, showIsAdult );
    validateInput("dni", isValidDNI);
    validateInput("mobile", isValidMobile);
    */

    /*Utilizando las funciones acortadas
    valFullName();
    valBirthDate();
    valDNI();
    valMobile();
    */

    /* Utilizando un objeto que mapee campos y función de validación*/
    for (const id in inputs) {
        inputs[id]();
    }

    console.log("Ejecutando Formulario");
}

//Events
//document.getElementById("submit").addEventListener("click", handleForm);
document.getElementById("register").addEventListener("submit", handleForm);

/* Al modificar los campos
document.getElementById("fullName").addEventListener("change", valFullName);
document.getElementById("birthday").addEventListener("change", valBirthDate);
document.getElementById("dni").addEventListener("change", valDNI);
document.getElementById("mobile").addEventListener("change", valMobile);
*/
for (const id in inputs) {
    document.getElementById(id).addEventListener("change", inputs[id]);
}