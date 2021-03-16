//criar um novo objeto
//create a new object
let name = new String('Lucas')
let date = new Date('2021-03-16')
let age = new Number(22)
console.log(name, date, age)

//operadores unarios 
//unary operators(typeof, delete)
const person = {
    name: 'Lucas',
    age: 22,
}
delete person.age
console.log(person)

//operadores aritmeticos
// arithmetic operators
console.log(3 * 5) 
console.log(15 / 5) 
console.log(10 + 12) 
console.log(23 - 13)
let remainder = 11 % 3
console.log(remainder)

let increment = 0
increment++
console.log(increment)

let decrement = 0
decrement--
console.log(decrement) 

console.log(2 ** 3)

//grouping operator()
let total = (2+3) * 5
console.log(total);

//operadores de comparação
// comparison operators (= == != < > <= >= ===  !==)
let one = 1
let two = 2
console.log(one == 1)
console.log(two < one)
console.log(two !== 2)

//operators assignment
//operadores de atribuição
let x
x = 1
x += 3
console.log(x)
console.log(x -= 2)

//logical operators
//operadores logicos
let pao = true
let queijo = true
console.log(pao && queijo)//as duas variaveis precisa ser verdadeira
console.log(pao || queijo) //apenas uma deve ser verdadeira
console.log(!pao)//trocando o valor

//operador condicional ternario

//condition? value1 : value2
//morning cooffe
let  bread = true
let cheese = true

const niceBreakfast = bread && cheese ? 'cafe top': 'cafe ruim' 
console.log(niceBreakfast)

//string operator
//concatenation
let alpha = 'alpha'
console.log((alpha) + 'bet')

//falsy and trury
console.log(false ? 'verdadeiro': 'falso')

console.log(true ? 'verdadeiro': 'falso')

//operator precedence
console.log(3 > 2 && 2 > 1)


