// Adicionando vetores em uma matriz:

var matrizDeFrutas = ["Banana", "Maçã", "Mamão"]; //define uma variavel em forma de matriz com 3 vetores de string dentro dela

matrizDeFrutas.push("Abacate"); //chama a variavel "matrizDeFrutas" com o metodo push (faz parte da classe array, e serve para injetar o vetor string "Abacate")

console.log(matrizDeFrutas.toString()); //mensagem no console chamando a variavel "matrizDeFrutas" ja como string

var indexadorDoVetor = matrizDeFrutas.indexOf("Maçã"); //busca o vetor "Maçã" e se encontrar retorna o numero do vetor da matriz comoeçando por 0

matrizDeFrutas.splice(indexadorDoVetor, 1); //retir o vetor colocado na variavel "indexadorDoVetor", sendo 1 a quantidade de vetores

console.log(matrizDeFrutas.toString()); //mensagem no console chamando a variavel "matrizDeFrutas" ja como string