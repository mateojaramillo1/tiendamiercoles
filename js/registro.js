import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let boton = document.getElementById("botonRegistro")

let modalRegistro = new bootstrap.Modal(document.getElementById('mensajeinformativo'))

let textoModal = document.getElementById("mensajemodalinfo")

boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("exito en el registro")
        textoModal.textContent="Exito en el registro"
        modalRegistro.show()
        let formulario = document.getElementById("formularioregistro")
        formulario.reset()
        setTimeout(function(){
            modalRegistro.hide()
        },2000)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("Fallo "+errorMessage)
        textoModal.textContent="Fallamos: "+errorMessage
        modalRegistro.show()
        setTimeout(function(){
            modalRegistro.hide()
        },2000)
    });

   


    
})