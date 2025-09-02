const readline = require('readline-sync');

const nombre = readline.question('Cual es tu nombre? ');
const edad = readline.question('Cuantos anos tienes? ');
const lenguaje = readline.question('Que lenguaje de programacion estas estudiando? ');

console.log(`Hola ${nombre}, tienes ${edad} anos y ya estas aprendiendo ${lenguaje}!`);

const respuesta = readline.question(`Te gusta estudiar ${lenguaje}? Responde 1 para SI o 2 para NO: `);

if (respuesta == '1') {
  console.log('Muy bien! Sigue estudiando y tendras mucho exito.');
} else if (respuesta == '2') {
  console.log('Oh, que pena... Ya intentaste aprender otros lenguajes?');
} else {
  console.log('Respuesta invalida.');
}
