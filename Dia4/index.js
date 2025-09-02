const readline = require('readline-sync');

// Numero aleatorio entre 0 y 10
const numeroSecreto = Math.floor(Math.random() * 11);

let intentos = 3;
let adivinado = false;

console.log('Bienvenido al juego de adivinar el numero!');

while (intentos > 0 && !adivinado) {
    const intento = parseInt(readline.question(`Tienes ${intentos} intento(s). Adivina el numero (0-10): `));

    if (intento === numeroSecreto) {
        console.log('Felicidades! Adivinaste el numero!');
        adivinado = true;
    } else {
        if (intento < numeroSecreto) {
            console.log('Incorrecto! El numero secreto es mayor.');
        } else {
            console.log('Incorrecto! El numero secreto es menor.');
        }
        intentos--;
    }
}

if (!adivinado) {
    console.log(`Lo siento, el numero era ${numeroSecreto}`);
}
