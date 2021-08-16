var getName = () => document.getElementById("input-name").value;
var getSurName = () => document.getElementById("input-surname").value;
var getSurName2 = () => document.getElementById("input-surname2").value;

var getFullName = () => getName() + " " + getSurName() + " " + getSurName2(); 

var handlerSubmit = () => {

    // const name = document.getElementById("input-name").value;
    // const surname = document.getElementById("input-surname").value;
    // const surname2 = document.getElementById("input-surname2").value;
    
    // const fullName = name + " " + surname + " " + surname2;

     document.getElementById("full-name").innerText = getFullName();    
}

document.getElementById("full-name").innerText = "Adolfo García";

//document.getElementById("button-submit").addEventListener("click", handlerSubmit);

document.getElementById("input-name").addEventListener("keyup", handlerSubmit);
document.getElementById("input-surname").addEventListener("keyup", handlerSubmit);
document.getElementById("input-surname2").addEventListener("keyup", handlerSubmit);
