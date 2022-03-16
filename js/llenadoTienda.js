//Creando un arrego de objetos

let productos=[

    {
        foto: '../img/camiseta.webp',
        nombre:"Camiseta Bayern Múnich",
        precio:'$ 350.000', 
        descripcion:"Camiseta del FC BAYERN local Autentico",
        boton: 'boton1'
    },

    {
        foto: '../img/gorra.webp',
        nombre:"Gorra Bayern Múnich ",
        precio:'$ 70.000',
        descripcion:"Logotipo de la Gorra 5 Estrellas",
        boton: 'boton2'
    },

    {
        foto: '../img/camiseta_manga_larga.webp',
        nombre:"camisa manga larga Bayern Múnich",
        precio:'$ 300.000',
        descripcion:"Camiseta de manga larga de local FC BAYERN MÜNCHEN 21/22",
        boton: 'boton3'
    },

    {
        foto: '../img/chaqueta.webp',
        nombre:"chaqueta Bayern Múnich",
        precio:'$ 380.000',
        descripcion:"Chaqueta de entrenamiento del FCB SPORTS",
        boton: 'boton4'
    },

    {
        foto: '../img/pantaloneta.webp',
        nombre:"pantaloneta Bayern Múnich",
        precio:'$ 180.000',
        descripcion:"Pantaloneta ADIDAS LIFESTYLE",
        boton: 'boton5'
    },

    {
        foto: '../img/bolso.webp',
        nombre:"Bolso Bayern Múnich",
        precio:'$ 250.000', 
        descripcion:"Mochila 5 estrellas logotipo",
        boton: 'boton6'
    },

    {
        foto: '../img/camiseta_polo.webp',
        nombre: "Camiseta tipo polo Bayern Múnich",
        precio:'$ 210.000',
        descripcion:"Polo funcional FCB SPORTS",
        boton: 'boton7'

    },

    {
        foto: '../img/termo.webp',
        nombre: "Termo Bayern Múnich",
        precio:'$ 60.000',
        descripcion:"Botella multifuncional 7 en 1",
        boton: 'boton8'
    },

    {
        foto: '../img/reloj.webp',
        nombre: "Reloj Bayern Múnich",
        precio:'$ 140.000',
        descripcion:"Reloj digital",
        boton: 'boton9'
    },

    {
        foto: '../img/camiseta_dama.webp',
        nombre: "Camiseta dama Bayern Múnich",
        precio:'$ 210.000',
        descripcion:"Camiseta del FC Bayern para damas Champions League 21/22",
        boton: 'boton10'
    },
    
    


]





console.log(productos)




//como recorrer un arreglo con JavaScript

//1 Tener  un arreglo

//arreglo anonimo

//1 creo una variable para almacenar la base sobre la que quiero pintar

let fila = document.getElementById("fila");


productos.forEach(function(producto){


    console.log(producto.foto)
    console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.boton)
    

    //pintando etiquetas

    // div con la clase col

    let columna=document.createElement("div")
    columna.classList.add("col")

    //div con las clases card y h-100

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    //necesito una imagen con la clase card-img

    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=producto.foto


    //h4 con las clases text-center

    let titulo = document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    // h5 con la clase de text-center

    let precio = document.createElement("h5")
    precio.classList.add("text-center")
    precio.textContent=producto.precio

    //h6 con la clase text-center

    let descripcion = document.createElement("h6")
    descripcion.classList.add("text-center")
    descripcion.textContent=producto.descripcion


    //boton

    let boton = document.createElement("button")
    boton.classList.add("btn")
    boton.classList.add("boton")
    boton.classList.add("btn-outline-success")
    boton.textContent= "Ver producto"
    
    

    


    

    //3 padres e hijos

    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(boton)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})