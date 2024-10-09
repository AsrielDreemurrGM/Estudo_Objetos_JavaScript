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
    // this.salario = salario;
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
divisoria("Salário do Funcionário");
console.log(funcionario1.getSalario());
divisoria("Novo Salário do Funcionário");

funcionario1.setSalario(7000);
funcionario1.setSalario('mil'); // Tentando mudar o valor para String para testar a validação
console.log(funcionario1.getSalario());