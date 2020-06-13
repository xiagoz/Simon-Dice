var chris = {
  nombre: "Christian",
  apellido: "Gómez",
  edad: 28,
};

var dario = {
  nombre: "Dario",
  apellido: "gonzalez",
  edad: 27,
};

function imprimirSaludo(persona) {
  //var nombre = persona.nombre;
  //var edad = persona.edad;
  console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años.`);
}

imprimirSaludo(chris);
imprimirSaludo(dario);

/*function imprimirNombreMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreMayusculas(chris);
imprimirNombreMayusculas(dario);
imprimirNombreMayusculas({ nombre: "pepito" });*/

function cumpleaños(persona) {
  return {
    ...persona,
    edad: (persona.edad += 1),
  };
}
