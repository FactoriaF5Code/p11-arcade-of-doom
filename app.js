//tenemos una lista de nombres
let names = ["Javi", "Matheus", "Andrés", "Daniel", "Marina", "Jorge", "Cora"];

// cuando hagamos click en #pulsador
document.getElementById("pulsador").onclick = function () {

    let name;

    //miramos si la lista está vacía
    if (names.length === 0) {
        name = "Game Over"
    } else {
        // sacamos un número al azar
        let number = Math.floor(Math.random() * names.length);
        console.log("Ha salido el numero " + number);
        
        // sacamos un nombre y lo quitamos de la lista
        name = names.splice(number,1)[0];
        console.log("El número " + number + "corresponde a " + name);
    }

    // pintamos la variable name donde antes ponía "Cargando"
    document.getElementById("pantalla").innerHTML = name;
}
