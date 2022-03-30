    //console.log(evento.target.parentElement.querySelector("h4").textContent)
    //console.log(evento.target.parentElement.querySelector("img").src)

    //Cargar informacion dentro de un modal

    export function ampliarInformacionProducto(evento){

        let producto={}

        //lleno la informacion del producto

        producto.foto = evento.target.parentElement.querySelector("img").src
        producto.nombre = evento.target.parentElement.querySelector("h4").textContent
        producto.precio = evento.target.parentElement.querySelector("h5").textContent
        producto.descripcion =  evento.target.parentElement.querySelector("h6").textContent



        let fotoinfo = document.getElementById("fotoInfo")
        fotoinfo.src=evento.target.parentElement.querySelector("img").src

        let tituloFoto = document.getElementById("tituloInfo")
        tituloFoto.textContent = evento.target.parentElement.querySelector("h4").textContent

        let precioFoto = document.getElementById("precioInfo")
        precioFoto.textContent = evento.target.parentElement.querySelector("h5").textContent

        let descripcionFoto = document.getElementById("descripcionInfo")
        descripcionFoto.textContent = evento.target.parentElement.querySelector("h6").textContent



        //devolver el producto generado

        return producto

    }

    


  