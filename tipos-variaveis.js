//Veficando tipos de variaveis

let valor = "Hello";
console.log(typeof valor); //string

valor = 10
console.log(typeof valor); //number

valor = parseFloat(10.12);
console.log(typeof valor); //float number

valor = valor != 0;
// console.log(valor != 0 ? "ok" : "nok"); //ok
console.log(typeof valor); //boolean

valor = BigInt("9723658234265720347234082735828979778304989");
console.log(typeof valor); //bigint

let varUndefined;
console.log(typeof varUndefined); //undefined null value

class Objeto {
    constructor(paramOne, paramTwo) {
        this.paramOne = paramOne;
        this.paramTwo = paramTwo;
        console.log(typeof this.paramTwo); //undefined
    }
}

const objeto = new Objeto("só parâmetro 1");
console.log(typeof objeto); //object class

valor = document.getElementById("elementoInexistente"); //valor = null
console.log(typeof valor); //undefined null

valor = ["vetor1", "vetor2"];
console.log(typeof valor); //array object

const date = new Date();
console.log(typeof date); //date object

console.log(date); //mostra tudo sobre a variavel/objeto