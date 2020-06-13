var chris = {
  nombre: "Christian",
  apellido: "Gomez",
  edad: "26",
  peso: 75,
};

//console.log(`Al inicio del año ${chris.nombre} pesa ${chris.peso}kg`);

const INCREMENTO_PESO = 0.3;

const aumentarDePeso = (persona) => (persona.peso += INCREMENTO_PESO);
const adelgazar = (persona) => (persona.peso -= INCREMENTO_PESO);
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
const META = chris.peso - 3;
var dias = 0;
while (chris.peso > META) {
  //debugger;
  if (comeMucho()) {
    aumentarDePeso(chris);
  }
  if (realizaDeporte) {
    adelgazar(chris);
  }
  dias += 1;
}

console.log(
  `Pasaron ${dias} días hasta que ${chris.nombre} adelgazó ${chris.peso.toFixed(
    0
  )}kg`
);
