let jugadores = [

    {
        foto: '../img/neuer.webp',
        nombre: "Manuel Neuer",
        edad: "Edad: 36 Años"
    },

    {
        foto: '../img/pavard.webp',
        nombre: "Benjamin Pavard",
        edad: "Edad: 26 Años"
    },

    {
        foto: '../img/sule.webp',
        nombre: "Niklas Süle",
        edad: "Edad: 26 Años"
    },

    {
        foto: '../img/lucas.webp',
        nombre: "Lucas Hernández",
        edad: "Edad: 26 Años"
    },

    {
        foto: '../img/joshua.webp',
        nombre: "Joshua Kimmich",
        edad: "Edad: 27 Años"
    },

    {
        foto: '../img/sane.webp',
        nombre: "Leroy Sané ",
        edad: "Edad: 26 Años"
    },

    {
        foto: '../img/coman.webp',
        nombre: "Kingsley Coman",
        edad: "Edad: 25 Años"
    },

    {
        foto: '../img/serge.webp',
        nombre: "Serge Gnabry",
        edad: "Edad: 26 Años"
    },

    {
        foto: '../img/leon.webp',
        nombre: "Leon Goretzka",
        edad: "Edad: 27 Años"
    },

    {
        foto: '../img/thomas.webp',
        nombre: "Thomas Müller",
        edad: "Edad: 32 Años"
    },

    {
        foto: '../img/robert.webp',
        nombre: "Robert Lewandowsk",
        edad: "Edad: 33 Años"
    },


]


let equipo = document.getElementById("equipo")

jugadores.forEach(function(jugador) {

    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let foto = document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src = jugador.foto

    let titulo = document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent = jugador.nombre

    let edad = document.createElement("h6")
    edad.classList.add("text-center")
    edad.textContent = jugador.edad

    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(edad)
    columna.appendChild(tarjeta)
    equipo.appendChild(columna)


})


let uniformes = [

    {
        foto: '../img/titular.jpg',
        titulo: "Equipacion titular"
    },

    {
        foto: '../img/visitante.jpg',
        titulo: "Equipacion visitante"
    },

    {
        foto: '../img/portero.jpg',
        titulo: "Equipacion portero"
    },


]


let equipaciones = document.getElementById("equipaciones")

uniformes.forEach(function(uniforme) {




    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let foto = document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src = uniforme.foto

    let titulo = document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent = uniforme.titulo

    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    columna.appendChild(tarjeta)
    equipaciones.appendChild(columna)


})