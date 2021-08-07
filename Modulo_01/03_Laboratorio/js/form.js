document.getElementById('name').value = 'Adolfo';
document.getElementById('lastName').value = 'G.';



function Actualizar(){
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastName').value;

    console.log(nombre + " " + apellido);

}