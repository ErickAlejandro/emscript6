
// ENTRIES SIRVE PARA GUARDAR EN UNA MATRIZ CUALQUIER TIPO DE OBJETOS 

const teamDeveloper = {
    frontend: 'Esteban',
    backend: 'Erick',
    desingner: 'Adrian',
};

const entries = Object.entries(teamDeveloper);
console.log(entries);
console.log(`El numero de elementos dentro de la matriz es: ${entries.length}`);

// LA PROPIEDAD VALUE COLOCA LOS VALORES DE LAS PROPIEDADES DEL OBJETO EN UN ARREGLO
const teamDeveloper2 = {
    frontend: 'Esteban',
    backend: 'Erick',
    desingner: 'Adrian',
}

const values = Object.values(teamDeveloper2);
console.log(values);


// LA PROPIEDAD PAD NOS PERMITE AGREGAR AL INICIO O AL FINAL UNA CADENA, PRIMERO SE COLOCA UN NUMERO QUE INDIQUE LA
// CAPACIDAD DE LA CADENA, PSOTERIORMENTE LO QUE LE QUEREMOS AGREGAR

const string = 'Erick';
console.log(string.padStart(11, 'inutil'));
console.log(string.padEnd(13, ' inutil'));