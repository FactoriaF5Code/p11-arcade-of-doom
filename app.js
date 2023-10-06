let pulsador = document.getElementById("pulsador");
let nameSection = document.querySelector(".nameSection");
let pantalla = document.getElementById("pantalla");
let discardedNamesSection = document.querySelector(".discardedNames");

//tenemos una lista de nombres
let names = ["Javi", "Andrés", "Daniel", "Cora", "Seif"];
let discardedNames = [];

function pintarNombres(list) {
    for (let name of list) {
        // appendChild
        nameSection.insertAdjacentHTML("beforeend", `<p>${name}</p>`)
    }
}

function pintarNombresDescartados(list) {
    for (let name of list) {
        // appendChild
        discardedNamesSection.insertAdjacentHTML("beforeend", `<p>${name}</p>`)
    }
}

function borrarListaDeNombres() {
    // buscar una manera más eficiente
    nameSection.innerHTML = "";
}

function borrarNombresDescartados() {
    discardedNamesSection.innerHTML = "";
}

function actualizarPantalla() {
    borrarListaDeNombres()
    pintarNombres(names);
    borrarNombresDescartados()
    pintarNombresDescartados(discardedNames);
}



pintarNombres(names);


// cuando hagamos click en #pulsador
pulsador.onclick = function () {
    let name;

    //miramos si la lista está vacía
    if (names.length === 0) {
        name = "Game Over"
    } else {
        
        let number = Math.floor(Math.random() * names.length);

        name = names.splice(number, 1)[0];

        discardedNames = [...discardedNames, name];

        actualizarPantalla();

    }

    // pintamos la variable name donde antes ponía "Cargando"
    pantalla.innerHTML = name;
}
