// tyoe conversion typecasting vs type coersion
//alteração de um tipo de dado para outro

console.log('9'+ 5)

//maipulando strings e numeros
//transform string in numbers and string in numbers
let string = 'lucas'
console.log(Number(string));
let number = 12
console.log(String(number));

//contar quantos caractecetrre tem um numero e quantos digitos tem um numero
// count how many characters have a number and how many digits have a number
console.log("word".length)
console.log(String(1999).length);

//transforma numero em duas casa decimais e troca ponto por virgula
// transform number to two decimal places and exchange point for comma
let num = 321.534543
console.log(num.toFixed(2).replace(".", ','));

//transforma letras maiusculas em minusculas e ao contrario
// turns uppercase letters to lowercase and the opposite
let word = 'I need read'
console.log(word.toUpperCase());

//verificar se um texto tem uma palavra que deseja encontrar
// check if a text has a word you want to find

let phases = 'I love mother'
console.log(phases.includes('love'))

//separa um texto que contem espaços, em um novo array onde cada texto é uma posiçao do array
//coloque inderline nos espaços

let Phases = 'i need money'
let myArray = Phases.split(" ")
let PhasesWithInderline = myArray.join("_")
console.log(PhasesWithInderline);

//criar array com construtor
// create array with constructor
let Myarray = new Array("a", "b", "c")
console.log(Myarray);

//contar elementos de um array

console.log(['a', 'b', 'c', 'd'].length);

//transformar uma cadeia de caracteres em um array

let transformArray='manipulation'
console.log(Array.from(transformArray))

//exemples manipulation

let techs = ['html', 'css']

console.log(techs.push('nodejs'))//adiciona um item no fim

techs.unshift('sql')//adiciona no inicio

techs.pop()//remove do fim

techs.shift()//remove do começo

//pega somente alguns elemntos do array
console.log(techs.slice(1,3))

console.log(techs)//imprime techs