function divisoria(texto) {
    const div = "--------------------------------------------";

    console.log(div);
    console.log(texto);
    console.log(div);
}

// Estudo Sobre Herança de Objetos;
// Herança: A capacidade de uma Função Construtora chamar outra Função Construtora e,
// Assim, Herdar seus atributos;
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
    // this.salario = salario;
    // Encapsulamento: Capacidade de fazer variáveis ficaram públicas ou privadas, além de realizar verificações;
    // O Encapsulamento envolve tornar variáveis privadas, impedindo sua modificação ou acesso se não necessário;
    // Para tornar uma variável privada, não podemos usar o "this", precisamos
    // declarar a variável, e por convenção, é utilizado o "_" antes do nome da mesma
    // para identifica-la como privada;
    let _salario = salario;
    // Para acessarmos o valor de uma variável privada precisamos criar um Método;
    // Chamamos, por convenção, funções que Retornam um valor privado como "get" (getters e setters);
    this.getSalario = function() {
        return _salario;
    }

    // Para alterarmos o valor de uma variável privada também precisamos criar um Método;
    // Chamamos, por convenção, funções que Atribuem um valor privado como "set";
    this.setSalario = function(valor) {
        // Aqui podemos realizar validações se necessário;
        // Verificação para ver se é String ao invés de ser um Number; 
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    // Polimorfismo: A capacidade de fazer a mesma tarefa de formas diferentes;
    this.aumento = function() {
        // Desejamos dar um aumento de somente 7 porcento ao cargo de estagiario;
        // Se não tivessemos o Polimorfismo, teriamso que fazer isto da maneira abaixo;
        // if (cargo === estagiario) {aumento de 7%};
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    // Para fazer uma Herança no JS é necessário chamar a Função Construtora 
    // logo depois dos atributos da classe que irá Herda-lá;

    Pessoa.call(this, nome);
}

// Como temos o Polimorfismo, podemos fazer esta tarefa através de uma nova Classe
// Esta funçao Herda de Funcionario;
function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiário", 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}
// O Polimorfismo é isto, a capacidade de executar a mesma tarefa (aumento) de forams diferentes; 
// Polimorfismo: Ter vários métodos para a mesma finalidade, mas com uma implementação/jeito diferente de fazer isto;
function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}

// const pessoa1 = new Pessoa("Maria");
const funcionario1 = new Funcionario("Maria", "Dev Front-End", 5000);
const funcionario2 = new Estagiario("Pedro");
const funcionario3 = new Gerente("Paula");

divisoria("Saudação do Funcionário");
funcionario1.dizOi();
funcionario2.dizOi();
funcionario3.dizOi();
divisoria("Cargo do Funcionário");
funcionario1.dizCargo();
funcionario2.dizCargo();
funcionario3.dizCargo();
divisoria("Salário do Funcionário");
console.log(funcionario1.getSalario());
console.log(funcionario2.getSalario());
console.log(funcionario3.getSalario());
divisoria("Novo Salário do Funcionário");

// funcionario1.setSalario(7000);
// funcionario1.setSalario('mil'); // Tentando mudar o valor para String para testar a validação
// console.log(funcionario1.getSalario());

funcionario1.aumento();
console.log(funcionario1.getSalario());
funcionario2.aumento();
console.log(funcionario2.getSalario());
funcionario3.aumento();
console.log(funcionario3.getSalario());