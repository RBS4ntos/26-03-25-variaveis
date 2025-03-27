var matrizDeFrutas = ["Banana", "Maçã", "Mamão"]; //define uma variavel em forma de matriz com 3 vetores de string dentro dela

matrizDeFrutas.push("Abacate"); //chama a variavel "matrizDeFrutas" com o metodo push (faz parte da classe array, e serve para injetar o vetor string "Abacate")

console.log(matrizDeFrutas.toString()); //mensagem no console chamando a variavel "matrizDeFrutas" ja como string

//Editando vetores em uma matriz

matrizDeFrutas.splice(1,1,"Laranja"); //edita o vetor 1 (Maçã) para laranja

console.log(matrizDeFrutas.toString()); //mensagem no console chamando a variavel "matrizDeFrutas" ja como string
