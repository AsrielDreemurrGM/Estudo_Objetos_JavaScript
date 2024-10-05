// Criação de Objetos - Primeira Maneira
// A Constante é um Objeto Literal
const carroDoJoao = {
    modelo: 'Fiesta',
    Marca: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    // Acelerar, uma função dentro de um Objeto Literal, é chamada de Método
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
// É insustentável criar os objetos duplicando o código como no exemplo acima.
// O correto é através de funções construtoras.
// Os nomes de Funções Construtoras, por convenção, devem ser iniciadas com CAIXA ALTA;
function Carro(modelo, marca, anoModelo, anoFabricacao) {
    // Para criação de um atributo se faz o uso do "this";
    // "this" Faz referencia ao Carro;
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
const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDoMaria2 = new Carro("KA", "Ford", 2021, 2020);

console.log(carroDoJoao2);
console.log(carroDoMaria2);