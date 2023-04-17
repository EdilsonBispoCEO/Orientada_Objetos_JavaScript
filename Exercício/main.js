function Pessoa(nome, idade, altura, peso) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
}

const Edilson = new Pessoa("Edilson Bispo", 33, 1.75, 80);
console.log(Edilson)


class Leao extends Pessoa {
    fazerRugido() {
        console.log("Grrrrrr");
    }
}

class Pato extends Pessoa {
    fazerSom() {
        console.log("quack, quac quá-quá");
    }
}

const meuBicho = new Leao("Polo", 10, 1.0, 200);
const bichoDoLago = new Pato("Grego", 6, 0.2, 10);

meuBicho.fazerRugido();
bichoDoLago.fazerSom(); 



// FUNÇÃO MELHORADA DO CÓDIGO ACIMA 
function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;  // this faz referencia ao Carro
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
   
}

const carroBispo1 = new Carro("Revuelto", "lamborghin", 2023, 2022);

console.log(carroBispo1);


    console.log("Tenta me acompanhar....")












