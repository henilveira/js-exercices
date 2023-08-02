var nome = prompt("Qual seu nome?");
var tamanho = nome.length;
var maiusculo = nome.toUpperCase()
var minusculo = nome.toLowerCase()
document.write(`O nome ${nome} tem ${tamanho} letras.\n`);
document.write(`O nome ${nome} em maíusculo ${maiusculo} é escrito assim.\n`);
document.write(`O nome ${nome} em minsuculo ${minusculo} é escrito assim.`);
