function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz oi");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
const pessoa = new Pessoa("giancoro");

funcionario1.dizOi();
funcionario1.dizCargo();
// pessoa.dizCargo();








/*   Aqui eu consigo informa 
                edilson diz oi
            Pessoa { nome: 'edilson', dizOi: [Function (anonymous)] }
            Funcionario {
            cargo: 'dev front-end',
            salario: 5000,
            nome: 'edilson',
            dizOi: [Function (anonymous)]

function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz oi");
    }
} 

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    Pessoa.call(this, nome);
}

const pessoa1 = new Pessoa("edilson");
const funcionario1 = new Funcionario("edilson", "dev front-end", 5000);
pessoa1.dizOi();

console.log(pessoa1);
console.log(funcionario1);    */

