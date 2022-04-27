let jugadores=[

    {
        foto: '../img/neuer.webp',
        nombre: "Manuel Neuer"
    },

    {
        foto: '../img/pavard.webp',
        nombre: "Benjamin Pavard"
    },

    {
        foto: '../img/sule.webp',
        nombre: "Niklas Süle"
    },

    {
        foto: '../img/lucas.webp',
        nombre: "Lucas Hernández"
    },

    {
        foto: '../img/joshua.webp',
        nombre: "Joshua Kimmich"
    },

    {
        foto: '../img/sane.webp',
        nombre: "Leroy Sané "
    },

    {
        foto: '../img/coman.webp',
        nombre: "Kingsley Coman"
    },

    {
        foto: '../img/serge.webp',
        nombre: "Serge Gnabry"
    },

    {
        foto: '../img/leon.webp',
        nombre: "Leon Goretzka"
    },

    {
        foto: '../img/thomas.webp',
        nombre: "Thomas Müller"
    },

    {
        foto: '../img/robert.webp',
        nombre: "Robert Lewandowsk"
    },


]


let equipo = document.getElementById("equipo")

jugadores.forEach(function(jugador){

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=jugador.foto

    let titulo = document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=jugador.nombre

    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    columna.appendChild(tarjeta)
    equipo.appendChild(columna)


})


let uniformes=[

    {
        foto: '../img/titular.jpg',
        titulo:"Equipacion titular"
    },

    {
        foto: '../img/visitante.jpg',
        titulo:"Equipacion visitante"
    },

    {
        foto: '../img/portero.jpg',
        titulo:"Equipacion portero"
    },


]


let equipaciones = document.getElementById("equipaciones")

uniformes.forEach(function(uniforme){


  

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=uniforme.foto

    let titulo = document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=uniforme.titulo

    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    columna.appendChild(tarjeta)
    equipaciones.appendChild(columna)


})


