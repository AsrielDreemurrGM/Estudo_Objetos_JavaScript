// Execute o arquivo com o comando: "node .\src\scripts\main.js";
const div = "--------------------------------------------";
// Criação de Objetos - Primeira Maneira
// A Constante é um Objeto Literal
const carroDoJoao = {
    modelo: 'Fiesta',
    Marca: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    // Acelerar, uma função dentro de um Objeto Literal, é chamada de Método;
    acelerar: function() {
        console.log("vruum");
    }
}
// Outro Objeto Literal para o carro
const carroDaMaria = {
    modelo: 'Ka',
    Marca: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log("vrum");
    }
}

// Criação de Objetos - Segunda Maneira
console.log(div);
console.log("Criação de Objetos - Segunda Maneira");
console.log(div);
// É insustentável criar os objetos duplicando o código, como no exemplo acima;
// O correto é através de funções construtoras;
// Os nomes de Funções Construtoras, por convenção, devem ser iniciadas com a primeira letra em CAIXA ALTA;
function Carro(modelo, marca, anoModelo, anoFabricacao) {
    // Para criação de um atributo se faz o uso do "this";
    // O "this", neste exemplo, faz referência ao Carro;
    // Então: this(Carro).modelo é igual ao (modelo informado);
    this.modelo = modelo;
    this.marca = marca;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

// Como criar o carro do João e da Maria usando o Construtor de Objetos:
// Cria-se uma constante, passando as informações e utilizando a palavra reservada "new";
// Sem o "new" o objeto não é criado;
// OBS: "new" retorna o objeto;
const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDoMaria2 = new Carro("KA", "Ford", 2021, 2020);

console.log(carroDoJoao2);
console.log(carroDoMaria2);

// Como fazer a verificação dos tipos de dados
console.log(div);
console.log("Verificação dos Tipos de Dados");
console.log(div);

const nome = "eduardo";
const idade = 19;
const maiorDeIdade = true;
const conhecimentos = ["HTML", "CSS", "JavaScript"];

// Objeto
const pessoa = {
    nome: nome,
    idade: idade,
    maiorDeIdade: maiorDeIdade,
    conhecimentos: conhecimentos,
}

// Log das variáveis "nome";
// Utiliza-se a palavra reservada "typeof" para descobrir o tipo de dado da variável;
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof maiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);
console.log(typeof carroDoMaria2);

console.log(div);
console.log("Verificação dos Tipos de Instancias");
console.log(div);
// Porém, o JavaScript, por padrão, não reconhece os tipos customizados
// criados a partir de Funções Construtoras;
// Para isto, utilizamos a palavra reservada "instanceof";
// O "carroDoMaria2" é uma Instancia de "Carro";
// O "instanceof" é utilizado para a verificação de tipos de Instancia (Por Comparação);

// Então: console.log(carroDoMaria2(objeto) instanceof(é uma instancia de?) (Tipo de Dado (Nome de um Construtor, String, Array, etc.)));
// Por ser uma comparação os retornos serão True ou False, como no Exemplo a seguir;
console.log(carroDoMaria2 instanceof Carro);
// carrodaMaria2 é uma instancia de Carro, então True;
console.log(conhecimentos instanceof Carro);
// conhecimentos não é uma instancia de Carro, e sim do tipo Array, então False;
// Se trocado para Array o resulta é True, como abaixo;
console.log(conhecimentos instanceof Array);

