var chris = {
  nombre: "Christian",
  apellido: "Gomez",
  edad: 17,
  ingeniero: false,
  cocinero: true,
  dj: false,
  guitarrista: true,
};

var jor = {
  nombre: "Jordan",
  apellido: "Gomez",
  edad: 20,
};

const MAYORIA_DE_EDAD = 18;

// const esMayorEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD;
// };

const esMayorEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function imprimirEdad(persona) {
  console.log(`La edad de ${persona.nombre} es: ${persona.edad}`);

  if (esMayorEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

const permitirAcceso = ({ edad }) => {
  if (edad) {
    console.log("ACCESO DENEGADO");
  } else {
    console.log("ACCESO PERMITIDO");
  }
};

imprimirEdad(chris);
imprimirEdad(jor);

permitirAcceso(chris);
permitirAcceso(jor);
