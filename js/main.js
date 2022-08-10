const formulario = document.forms["formulario"];
const btn_enviar = formulario["btn_enviar"];
btn_enviar.addEventListener("click", () => {    
    let nombre = formulario["txt_nombres"].value;
    let apellido = formulario["txt_apellidos"].value;
    let telefono = formulario["txt_telefono"].value;
    let correo = formulario["txt_correo"].value;
    let fechaNacimiento = formulario["txt_fn"].value;
    let mensaje = formulario["txt_mensaje"].value;
    alert(nombre+"\n"+apellido+" "+telefono+"\n"+correo+"\n"+fechaNacimiento+"\n"+mensaje);
});