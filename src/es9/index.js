
// ESTA PROPIEDAD NOS SIRVE PARA DIVIDIR UN OBJETO, TOMAR UNA PROPIEDAD Y EL RESTO ALMACENARLA

const person = {
    name: 'Erick',
    age: 22,
    country: 'EC',
};

let {name, ...all} = person;
console.log(name, all);

// USAMOS ESTA PROPIEDAD CUANDO QUEREMOS ESTRUCTURAR INFORMACION EN UN SOLO OBJETO

const info = {
    name: 'Andrea',
    age: 23,
};

const info2 = {
    ...info,
    country: 'EC',
};

console.log(info2);


// ESTA ES LA ESTRUCTURA DE UNA PROMESA USANDO FINALLY EL CUAL ES UNA PROPIEDAD QUE NOS INDICA CUANDO EL PROCESO TERMINO POR COMPLETO
const helloWorld = () =>{
    return new Promise((resolve, reject) => {
        (true)
         ? setTimeout(() => resolve('Hello world'), 3000)
         : reject(new Error('TestError'))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Termino'));

// ESTA ES LA CREACION DE UNA DATA USANDO ANIO, MES, DIA; PRIMERO ES EL RANGO, DESPUES EL NUMERO DE VALORES QUE SE EXTRAERA DE AHI
// LUEGO PODREMOS REVISAR CADA UNO DE LOS VALORES DE UNA FECHA POR SEPARADO

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);