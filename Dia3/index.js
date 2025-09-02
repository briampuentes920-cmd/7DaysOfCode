const readline = require('readline-sync');

const area = readline.question('Quieres aprender Front-End o Back-End? ');

let tecnologia = '';
if (area.toLowerCase() === 'front-end') {
  tecnologia = readline.question('Quieres aprender React o Vue? ');
} else if (area.toLowerCase() === 'back-end') {
  tecnologia = readline.question('Quieres aprender C# o Java? ');
} else {
  console.log('Opcion invalida, continuaremos con Front-End por defecto.');
  tecnologia = readline.question('Quieres aprender React o Vue? ');
}

const camino = readline.question('Quieres seguir especializandote en esta area o convertirte en Fullstack? ');

console.log(`Has elegido el area ${area} y aprender ${tecnologia}. Tu camino es ${camino}.`);

let otraTec = 'ok';
while (otraTec.toLowerCase() === 'ok') {
  const nuevaTec = readline.question('Cual tecnologia te gustaria aprender? ');
  console.log(`${nuevaTec} es una tecnologia muy interesante!`);
  otraTec = readline.question('Hay alguna otra tecnologia que te gustaria aprender? Responde ok para continuar o cualquier otra cosa para terminar: ');
}
