function divisoria(texto) {
    const div = "--------------------------------------------";

    console.log(div);
    console.log(texto);
    console.log(div);
}

// Estudo Sobre Herança de Objetos;
// Função Construtora;
function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + ": Olá!");
    }
    this.dizCargo = function() {
        console.log(this.cargo);
    }
}
// Função Construtora;
function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;
    // Para fazer uma Herança no JS é necessário chamar a Função 
    // Construtora logo depois dos atributos da classe que irá Herda-lá;

    Pessoa.call(this, nome);
}

const pessoa1 = new Pessoa("Maria");
const funcionario1 = new Funcionario("Maria", "Dev Front-End", 5000);

divisoria("Saudação do Funcionário");
funcionario1.dizOi();
divisoria("Cargo do Funcionário");
funcionario1.dizCargo();