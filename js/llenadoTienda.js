//Creando un arrego de objetos

let productos=[

    {
        foto: '../img/camiseta.webp',
        nombre:"Camiseta Bayern Múnich",
        precio:350000, 
        descripcion:"Camiseta del FC BAYERN local Autentico"
    },

    {
        foto: '../img/gorra.webp',
        nombre:"Gorra Bayern Múnich ",
        precio:70000,
        descripcion:"Logotipo de la Gorra 5 Estrellas"
    },

    {
        foto: '../img/camiseta_manga_larga.webp',
        nombre:"camisa manga larga Bayern Múnich",
        precio:300000,
        descripcion:"Camiseta de manga larga de local FC BAYERN MÜNCHEN 21/22"
    },

    {
        foto: '../img/chaqueta.webp',
        nombre:"chaqueta Bayern Múnich",
        precio:380000,
        descripcion:"Chaqueta de entrenamiento del FCB SPORTS"
    },

    {
        foto: '../img/pantaloneta.webp',
        nombre:"pantaloneta Bayern Múnich",
        precio:180000,
        descripcion:"Pantaloneta ADIDAS LIFESTYLE"
    },

    {
        foto: '../img/bolso.webp',
        nombre:"Bolso Bayern Múnich",
        precio:250000, 
        descripcion:"Mochila 5 estrellas logotipo"
    },

    {
        foto: '../img/camiseta_polo.webp',
        nombre: "Camiseta tipo polo Bayern Múnich",
        precio:210000,
        descripcion:"Polo funcional FCB SPORTS"
    },

    {
        foto: '../img/termo.webp',
        nombre: "Termo Bayern Múnich",
        precio:60000,
        descripcion:"Botella multifuncional 7 en 1"
    },

    {
        foto: '../img/reloj.webp',
        nombre: "Reloj Bayern Múnich",
        precio:140000,
        descripcion:"Reloj digital"
    },

    {
        foto: '../img/camiseta_dama.webp',
        nombre: "Camiseta dama Bayern Múnich",
        precio:210000,
        descripcion:"Camiseta del FC Bayern para damas Champions League 21/22"
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

    //3 padres e hijos

    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})