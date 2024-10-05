function divisoria(texto) {
    const div = "-----------------------------------------------";

    console.log(div);
    console.log(texto);
    console.log(div);
}

const nome = "eduardo";
const idade = 19;
const maiorDeIdade = true;
const conhecimentos = ["HTML", "CSS", "JavaScript"];

const pessoa = {
    nome: nome,
    idade: idade,
    maiorDeIdade: maiorDeIdade,
    conhecimentos: conhecimentos,
}

divisoria("Acessando o Atributo de um Objeto - Via Ponto");

// Para acessar um Atributo de um Objeto:
// Podemos utilizar a notação ". (ponto)";
// Lê-se: console.log(nomeDaVariavel.nomeDoAtributo);
console.log(pessoa.nome);

divisoria("Acessando o Atributo de um Objeto - Via Array");

// ou utilizando os "[] (colchetes)", como se fosse um Array,
// com o nome da variavel em String;
console.log(pessoa['idade']);

divisoria("Acessando o Atributo de um Objeto - Via Função");

// Atributo Dinâmico Via Função
// Permite acessar o atributo conforme o nome fornecido na chamada da função;
function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo]);
}
exibeAtributo('maiorDeIdade');

divisoria("Verificando se um Atributo Existe - Sem o 'in'");

// Verificar se um atributo existe em um objeto;
// Neste estado nada é retornado, pois não existe este atributo;
if (pessoa['sobrenome']) {
    console.log("A pessoa tem um sobrenome");
}
// Adiciona-se o atributo a Constante, mas pera aí, como?
// Bem, a constante não pode ser modificada, porém, o seu conteúdo, sim!
// Se necessário, o comando "Object.freeze(nomeDaConstante)" pode ser usado para 
// congelá-la totalmente;
pessoa.sobrenome = 'augusto';
// Agora o "if" irá retornar o console.log;
if (pessoa['sobrenome']) {
    console.log("O objeto tem o atributo 'sobrenome'");
}
// Porém, utilizando o "if", o JS verifica se o valor do atributo é Null ou Undefined;
// O que resulta no não retorno do "if";
pessoa.sobrenome = null;
if (pessoa['sobrenome']) {
    console.log("O objeto tem o atributo 'sobrenome'");
}

divisoria("Verificando se um Atributo Existe - Com o 'in'");

// Para verificarmos se o atributo existe, independente de seu valor,
// Utilizamos a palavra reservada "in";
if ('sobrenome' in pessoa) {
    console.log('O atributo "sobrenome" existe, mas esta vazio');
}

divisoria("Propriedades de um Objeto em Array");

// Informa as propriedades do Objeto;
// utiliza-se "keys" para acessar as propriedades e "values" para
// o conteúdo de cada propriedade;
console.log(Object.keys(pessoa));

divisoria("Quantidade de Propriedades de um Objeto");

// Informa a quantidade de Propriedades que o objeto tem;
console.log(Object.keys(pessoa).length);

divisoria("Conteúdo de cada Propriedade de um Objeto");

console.log(Object.values(pessoa));