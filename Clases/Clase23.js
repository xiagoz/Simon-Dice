class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(`Hola, me llamo ${nombre} ${apellido}`);
    if (fn) {
      fn(nombre, apellido);
    }
  }

  soyAlto() {
    return this.altura >= 1.8;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }

  saludar(fn) {
    // var nombre = this.nombre;
    // var apellido = this.apellido;
    var { nombre, apellido } = this;
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy Desarrollador`);
    if (fn) {
      fn(nombre, apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen Día ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`ah mirá no sabía que eres desarrollador/a`);
  }
}

var chris = new Persona("Christian", "Gómez", 1.7);
var ericka = new Persona("Ericka", "Luna", 1.8);
var arturo = new Desarrollador("Arturo", "Gonzalez", 1.9);

chris.saludar();
ericka.saludar(responderSaludo);
arturo.saludar(responderSaludo);
