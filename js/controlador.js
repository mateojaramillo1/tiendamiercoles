import{llenarTienda} from "./llenadoTienda.js"
import{ampliarInformacionProducto} from "./ampliarinfo.js"

//creo un producto vacio

let producto={}


//Llamando a tienda llenado

llenarTienda()


//Rutina para ampliar informacion del producto

let filaContenedora = document.getElementById("fila")

filaContenedora.addEventListener("click",function(evento){

    if(evento.target.classList.contains("btn")){

        let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))

        producto=ampliarInformacionProducto(evento)

        console.log(producto)

        modalinfo.show()

    }

})

//rutina para añadir un producto al carrito de compras
let carrito=[]

let botonAgregarCarrito=document.getElementById("botonadd")

botonAgregarCarrito.addEventListener("click",function(){

    carrito.push(producto)

    console.log(carrito)

})