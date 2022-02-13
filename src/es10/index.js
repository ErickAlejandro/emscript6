// EL METODO FLAT NOS PERMITE REVISAR LA PROFUNDIDAD QUE TIENE UN ARREGLO

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(1));

// ESTA PROPIEDAD PERMITE TOMAR LOS VALORES DE UN ARREGLO Y APLICAR ALGUN TIPO DE OPERACION A CADA UNO DE ELLOS
let arreglo = [1, 2, 3, 4, 5];

console.log(arreglo.flatMap(value => [value, value * 2]));

// ESTA PROPIEDAD NOS PERMITE ELIMINAR ESPACIOS TANTO AL INICIO COMO AL FINAL DE UNA CADENA STRING
let phrase = '      Hello World';
console.log(phrase);
console.log(phrase.trimStart());

let phrase2 = 'Hollo world    ';
console.log(phrase2);
console.log(phrase.trimEnd());

// YA NO SE NECESITA COLOCAR EL VALOR DE ERROR DENTRO DEL CONTROLADOR DE EXCEPCIONES
try{

}catch{
    error
}


// LA PROPIEDAD FROMENTRIES NO PERMITE TRANSFORMAR UN ARRREGLOO A UN OBJETO
let entries = [['name', 'Oscar'], ['age', 22]];

console.log(Object.fromEntries(entries));

// ESTA PROPIEDAD NOS AYUDA A ACCEDER A LA DESCRIPCION DE UNA VARIANTE
let mySimbol = 'my Simbol';
let symbol = Symbol(mySimbol);
console.log(symbol.description);
