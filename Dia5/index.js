const readline = require('readline-sync');

// Objetos para cada categoria
let listaCompras = {
    Frutas: [],
    Lacteos: [],
    Congelados: [],
    Dulces: [],
    Otros: []
};

function agregarAlimento() {
    while (true) {
        let agregar = readline.question("Deseas agregar un alimento a tu lista de compras? (si/no): ").toLowerCase();

        if (agregar === 'no') {
            break;
        } else if (agregar === 'si') {
            let alimento = readline.question("Que alimento deseas agregar?: ");
            console.log("Categorias disponibles: Frutas, Lacteos, Congelados, Dulces, Otros");
            let categoria = readline.question("En que categoria se encaja?: ");

            categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase();

            if (listaCompras[categoria]) {
                listaCompras[categoria].push(alimento);
            } else {
                listaCompras.Otros.push(alimento);
            }
        } else {
            console.log("Respuesta no valida, por favor escribe 'si' o 'no'.");
        }
    }
}

agregarAlimento();

// Mostrar la lista completa
console.log("\nLista de compras:");
for (let cat in listaCompras) {
    if (listaCompras[cat].length > 0) {
        console.log(`${cat}: ${listaCompras[cat].join(', ')}`);
    } else {
        console.log(`${cat}: `);
    }
}
