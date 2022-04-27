import { llenarTienda } from "./llenadoTienda.js"
import { ampliarInformacionProducto } from "./ampliarinfo.js"

//creo un producto vacio

let producto = {}


//Llamando a tienda llenado

llenarTienda()

//extraer el modal

let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))


//Rutina para ampliar informacion del producto



let filaContenedora = document.getElementById("fila")

filaContenedora.addEventListener("click", function(evento) {

    if (evento.target.classList.contains("btn")) {


        producto = ampliarInformacionProducto(evento)



        modalinfo.show()

    }

})

//rutina para añadir un producto al carrito de compras
let carrito = []

let botonAgregarCarrito = document.getElementById("botonadd")

botonAgregarCarrito.addEventListener("click", function(evento) {

 

    



    //debo capturar la cantidad y agregarla al producto

    let cantidad = document.getElementById("cantidadProducto").value
    producto.cantidad = cantidad



    let cantidad1= document.getElementById("cantidad")

    cantidad1.reset()





    //agrego el producto al carrito
    carrito.push(producto)


    //Pintar la capsula en el carrito

    let suma = 0

    carrito.forEach(function(producto) {
        suma = suma + Number(producto.cantidad)
    })



    let capsula = document.getElementById("capsula")
    capsula.textContent = suma
    capsula.classList.remove("invisible")







    console.log(carrito)

    modalinfo.hide()

})

//Limpiar


let botonLimpiarCarrito = document.getElementById("botonLimpiar")


botonLimpiarCarrito.addEventListener("click", function() {


    carrito = []



    let capsula = document.getElementById("capsula")
    capsula.classList.add("invisible")


})


//rutina para ver el carrito


let botonVerCarrito = document.getElementById("vercarrito")


botonVerCarrito.addEventListener("click", function() {


    //Recorrer el carrito y pintar los productos


    let base = document.getElementById("basecarro")
    let total = document.getElementById("total")

    base.innerHTML = ""

    carrito.forEach(function(producto) {

        let fila = document.createElement("div")
        fila.classList.add("row")

        let columna1 = document.createElement("div")
        columna1.classList.add("col-4")

        let columna2 = document.createElement("div")
        columna2.classList.add("col-8")

        let columna3 = document.createElement("div")
        columna3.classList.add("col-12", "division")

        let columna4 = document.createElement("div")
        columna4.classList.add("col-12", "division")

    


        let foto = document.createElement("img")
        foto.classList.add("w-100", "img-fluid")
        foto.src = producto.foto

        let nombre = document.createElement("h4")
        nombre.classList.add("text-center")
        nombre.textContent = producto.nombre

        let precio = document.createElement("h5")
        precio.classList.add("text-center")
        precio.textContent = producto.precio

        let descripcion = document.createElement("h6")
        descripcion.classList.add("text-center")
        descripcion.textContent = producto.descripcion

        let tituloCantidad = document.createElement("strong")
        let cantidad = document.createElement("p")
        tituloCantidad.classList = ("text-center")
        cantidad.classList.add("text-center")
        tituloCantidad.textContent = "cantidad:"
        cantidad.textContent = producto.cantidad


        let tituloSubtotal = document.createElement("strong")
        let subtotal = document.createElement("p")
        tituloSubtotal.classList = ("text-center")
        subtotal.classList.add("text-center")
        tituloSubtotal.textContent = "Subtotal:"
        subtotal.textContent = producto.precio * producto.cantidad

       
        total.textContent="Total:"
    


       



        //PADRES E HIJOS

        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(descripcion)
        columna3.appendChild(tituloCantidad)
        columna3.appendChild(cantidad)
        columna4.appendChild(tituloSubtotal)
        columna4.appendChild(subtotal)
        columna2.appendChild(columna3)
        columna2.appendChild(columna4)
        columna1.appendChild(foto)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        base.appendChild(fila)
        base.appendChild(total)
       

    })


   
   


    modalcompra.show()


})

