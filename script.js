console.log("JavaScript carregado!");

// PARTE 2 - VARIÁVEIS E TIPOS

const nomeAluno = "Ana";
let idadeAluno = 17;
const matriculado = true;

console.log("Nome:", nomeAluno);
console.log("Idade:", idadeAluno);
console.log("Matriculado:", matriculado);

console.log(typeof nomeAluno);
console.log(typeof idadeAluno);
console.log(typeof matriculado);


// PARTE 3 - OPERADORES

let numero1 = 10;
let numero2 = 5;

console.log("Soma:", numero1 + numero2);
console.log("Subtração:", numero1 - numero2);
console.log("Multiplicação:", numero1 * numero2);
console.log("Divisão:", numero1 / numero2);
console.log("Resto:", numero1 % numero2);

// O primeiro número é maior que o segundo? Sim.
// Eles são estritamente iguais? Não.

console.log("Primeiro é maior?", numero1 > numero2);
console.log("São estritamente iguais?", numero1 === numero2);


// PARTE 4 - ENTRADA E CONVERSÃO

const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));

console.log("Soma:", n1 + n2);

console.log("Tipo de n1:", typeof n1);
console.log("Tipo de n2:", typeof n2);


// PARTE 5 - CONDICIONAIS

const idadeVerificada = Number(prompt("Digite sua idade:"));

if (idadeVerificada >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}


const nota = Number(prompt("Digite uma nota de 0 a 100:"));

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 70) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}


const numeroInteiro = Number(prompt("Digite um número inteiro:"));

if (numeroInteiro % 2 === 0) {
    console.log("Número par");
} else {
    console.log("Número ímpar");
}


// PARTE 6 - DEPURAÇÃO

const idadeDepuracao = Number(prompt("Idade:"));

if (idadeDepuracao === 18) {
    console.log("Tem exatamente 18 anos");
} else {
    console.log("Idade diferente de 18");
}

console.log(idadeDepuracao);


// DESAFIO FINAL - SITUAÇÃO DO ALUNO

const nome = prompt("Digite o nome do aluno:");

const nota1 = Number(prompt("Digite a primeira nota:"));

const nota2 = Number(prompt("Digite a segunda nota:"));

const media = (nota1 + nota2) / 2;

let situacao;

if (media >= 70) {
    situacao = "Aprovado";
} else {
    situacao = "Reprovado";
}

console.log(`Aluno: ${nome} | Média: ${media} | Situação: ${situacao}`);
