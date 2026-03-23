// tipos primitivos 
// boolean
var boolean = false;

var prof;
console.log("Texto " + boolean + " texto");
console.log(`A variável ${boolean} tem o tipo ${typeof(boolean)}`);

var numero = 1;
console.log(`A variável ${numero} tem o tipo ${typeof(numero)}`);

// var; //variável global ou local - valor inicial pode ser nulo
// let; //variável local de bloco - valor inicial pode ser nulo
// const; //variável local de bloco - valor inicial é obrigatório

// var prof = "Lucas";
// var prof = "Lucas Sousa";

// let sobrenome = 'Sousa';

// sobrenome = 'Borges de Sousa';

// const profissao =  'professor';

// profissao = 'programador';

// const profissao = 'testador';

// usando variável global
var nome = 'Lucas';

// usando variável local
function nomeDafuncao() {
    var sobrenome = 'Sousa';
    console.log(sobrenome);
}

console.log(nome);
nomeDafuncao();

//operadores de comparação
var comparacao = '0' == 0;
console.log(comparacao);

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//operadores aritméticos
// +, -, *, /, %, **

var mult = 5 * 9;
console.log(mult);

var divisao = 15 / 3;
console.log(divisao);

//operadores relacionais
// >, <, >=, <=, !=
//maior ou igual
var maiorOuigual = 5 >= 16;
console.log(maiorOuigual);

var diferente = 5 != 8;
console.log(diferente);

//Operadores lógicos
// && - E, || - OU, ! - Não
var e = true && true;
console.log(e);

var ou = true || false || false;
console.log(ou);

var nao = !true;
console.log(nao);

