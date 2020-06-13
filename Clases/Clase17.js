var chris = {
  nombre: "Christian",
  apellido: "gomez",
  altura: 1.69,
};

var jor = {
  nombre: "Jordan",
  apellido: "Nuñez",
  altura: 1.71,
};

var mic = {
  nombre: "Michael",
  apellido: "Jordan",
  altura: 1.65,
};

var ely = {
  nombre: "Elizabeth",
  apellido: "Castro",
  altura: 1.59,
};

var personas = [chris, jor, mic, ely];
const esAlta = ({ altura }) => altura >= 1.7;
const esBaja = ({ altura }) => altura < 1.7;

var personasAltas = personas.filter(esAlta);
//console.log(personasAltas);
var personasBajas = personas.filter(esBaja);
//console.log(personasBajas);
// for (i = 0; i <= personas.length; i++) {
//   esAlta(i);
//   esBaja(i);
//   console.log();
// }

// const pasarAlturaACms = (persona) => {
//   return {
//     ...persona,
//     altura: persona.altura * 100,
//   };
// };

const pasarAlturaACms = (persona) => ({
  ...persona,
  altura: persona.altura * 100,
});

var personasCms = personas.map(pasarAlturaACms);
console.log(personasCms);
