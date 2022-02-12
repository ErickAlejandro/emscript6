

function newFunction(name, age, country){
    var name = name || "Erick";
    var age = age || 12;
    var country = country || "EC";

    console.log(name, age, country);
}

// version es6

function newFunction2(name = "Erick", age = 21, country= "EC"){
    console.log(name, age, country);
}

newFunction2();
newFunction2("Alejandro", 22, "UK");


let hello = "Hello";
let world = "world";

let epicPhrase = hello + ' ' + world;

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// clase numero dos
// version initial
let lorem = "Quiero escribir una frase epica but in inglish xd, I'm so sorry guys\n"
+ "stilling with this epic phrase";

// version ems2
let lorem2 = `Other epic phrase 
and now is other epic phrase
`;

console.log(lorem);
console.log(lorem2);


let person = {
    name: "Oscar",
    age: 31,
    country: 'MX'
};

console.log(person.name);

let {name, age} = person;
console.log(name);


let team1 = ['Erick', 'Carlos', 'Esteban', 'Luis'];
let team2 = ['Andrea', 'Karina', 'Valeria', 'ProcedoAXd'];

let agrupation = ['Samira', ...team1, ...team2];
console.log(agrupation);

// tipos de variables

{
    var globarVar = "It's a global variable";
}

{
    let globalLet = "It's a let variable";
    console.log(globalLet);
}

console.log(globarVar);

// es imposible asignar un nuevo valor mientras la variable sea constante
const a = 'b';
a = 'a';
console.log(a);

// class number six
let name = 'Erick';
let age = 22;

// es5
obj = {
    name: name,
    age: age,
};
// es6
obj2 = {name, age};

console.log(obj);
console.log(obj2);


// estructuracion de funciones flecha con es6
const objTest = [
    {name: 'Erick', age: 22},
    {name: 'Andrea', age: 23}
];

let listNames = objTest.map(function(element){
    console.log(`Nombre del objeto: ${element.name}`);
});

let listNamesTwo = objTest.map(element => console.log(`Edad de las personas ${element.age}`));

// const listNameThree = (name, age) => {
//     name = objTest.name;
//     age = objTest.age;

//     console.log(`Nombres: ${name} edades: ${age}`);
// };

// const listNamesFour = name =>{
//     ...
// };

// const num = number => number * number;


// CREACION DE PROMESAS ES6
const promesaMain = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            console.log("Thats right!!");
        } else{
            console.log("Oh oh!! Thats not okey");
        }
    }); 
};

promesaMain()
.then( response => console.log(response))
.catch( error => console.log(error));


// CREANDO CLASES SM6

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
    rest1(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA - this.valueB;
    }
}

const calc = new calculator();
console.log(`La suma estre los valores es: ${calc.sumar(5, 6)}
La resta entre los valores es: ${calc.rest1(5, 1)}`);

import {hello} from './module';
hello();

// GENERATORS

function* helloWord(){
    if(true){
        yield 'Hellow, ';
    }if(true){
        yield 'World';
    }
};

const generatorHello = helloWord();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
