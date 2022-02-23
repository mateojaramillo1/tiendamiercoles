//controlador de etiquetas

//1. crear una variable para guardar una etiqueta

let etiquetaTitulo = document.getElementById("titulo");
let etiquetaMenu = document.getElementById("menu");



//como modificar el texto de una etiqueta

etiquetaTitulo.textContent = "rojo vos no existis"
etiquetaMenu.textContent = "Bayern de Múnich"


//controlando una img

let etiquetaFoto = document.getElementById("fotobayern");
etiquetaFoto.src="img/bayern.png"


//cambiar el estilo de la etiqueta

etiquetaTitulo.classList.add("text-center")
etiquetaTitulo.classList.add("text-danger")