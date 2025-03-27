// Varuáveis

var nomeDaVariavel = "Valor da Variável"; //define uma variável, por estar fora de uma função, se torna uma variável ambiente

let nomeDaVariavelTemporaria = "Valor Temporário da Variável"; //define uma variável temporária, por estar fora de uma função, assim que terminar de rodar o script, apaga da memória

const nomeDaVariavelSomenteLeitura = "Valor Somente Leitura da Variável"; //define uma variável de somente leitura, depois de definida, não pode ser mudada

console.log("nomeDaVariavel: ", nomeDaVariavel); //manda uma mensagem no console com o valor da variável "nomeDaVariavel"

console.log("nomeDaVariavelTemporaria: ", nomeDaVariavelTemporaria); //manda uma mensagem no console com o valor da variável "nomeDaVariavelTemporaria"

console.log("nomeDaVariavelSomenteLeitura: ", nomeDaVariavelSomenteLeitura); //manda uma mensagem no console com o valor da variável "nomeDaVariavelSomenteLeitura"
 
var matriz = ["vetor1", "vetor2", "vetor3", "vetor4", "vetor5"];

// console.log("matriz, vetor1: ", matriz[0]);

for (let i = 0; i < matriz.length; i++) { //no primeiro parametro é o ínicio o i representa a chave para o vetor, o segundo vetor é o limite de tudo (enquanto i for menor que lenght irá repetir),e no final adiciona +1 no i, e inicia o bloco de códigos 
    console.log("matriz[" + i + "]:", matriz[i]); // manda uma mensagem no console e chama a variável matriz com o vetor que estiver no laço de repetição
}

class NomeDoObjeto { //declara a classe NomeDoObjeto, que transformara em objeto quando declarada em uma variavel
    constructor (parametroUm, parametroDois) { //declara o metodo construtor recebendo os parametros que  se transformam em propriedades de classe
        this.parametroUm = parametroUm; // parametro que se trasnforma em uma propriedade de classe por causa do this
        this.parametroDois = parametroDois; // parametro que se trasnforma em uma propriedade de classe por causa do this
    }

    metodoMostrarParametros(parametroUm, parametroDois) { //declara metodo que mostra apenas parametros
        this.parametroUm = parametroUm; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro parametroUm
        this.parametroDois = parametroDois; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro parametroDois
        return this.parametroUm + " - " + this.parametroDois; //retorna o valor declarado antes do return
    }
}

const novoObjeto = new NomeDoObjeto(); // cria uma variavel somente leitura recebendo o NomeDoObjeto
console.log(novoObjeto.metodoMostrarParametros("um", "dois")); //mensagem no console usando a variavel novoObjeto com o metodo metodoMostrarParametos com os parametros um e dois

class EscovaDeDente { //declara a classe EscovaDeDente, que transformara em objeto quando declarada em uma variavel
    constructor (marca, cabo, fios, cor, tamanho, largura, formato, textura, peso) { //declara o metodo construtor recebendo os parametros que  se transformam em propriedades de classe
        this.marca = marca; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro marca
        this.cabo = cabo; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro cabo
        this.fios = fios; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro fios
        this.cor = cor; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro cor
        this.tamanho = tamanho; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro tamanho
        this.largura = largura; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro largura
        this.formato = formato; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro formato
        this.textura = textura; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro textura
        this.peso = peso; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro peso

    }

    metodoEscovaDeDente(marca, cabo, fios, cor, tamanho, largura, formato, textura, peso) { //declara metodo que mostra apenas parametros
        this.marca = marca; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro marca
        this.cabo = cabo; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro cabo
        this.fios = fios; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro fios
        this.cor = cor; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro cor
        this.tamanho = tamanho; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro tamanho
        this.largura = largura; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro largura
        this.formato = formato; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro formato
        this.textura = textura; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro textura
        this.peso = peso; // parametro que se trasnforma em uma propriedade de classe por causa do this recebendo o parametro peso
        return this.marca + " - " + 
        this.cabo +
         " - " + 
        this.fios +
         " - " + 
        this.cor +
         " - " + 
        this.tamanho +
         " - " + 
        this.largura +
         " - " + 
        this.formato +
         " - " + 
        this.textura +
         " - " + 
        this.peso; //retorna o valor de todos parametros definidos antes do return
        
    }
}

const EscovaDeDenteObjeto = new EscovaDeDente(); // cria variavel somente leitura que cria o objeto EscovaDeDente
console.log("Escova de Dente: ", EscovaDeDenteObjeto.metodoEscovaDeDente("Curaprox ", "7 cm"
    , "50 fios", "azul", "10cm", "2cm", "retangular", "plástico ", "100 mg")); //mensagem no console com a variavel EscovaDeDenteObjeto com o metodo metodoEscovaDeDente com os parametros definidos