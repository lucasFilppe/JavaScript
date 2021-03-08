//1.Declare uma variavel de nome weigth
//1.Declarate a variable named weigth
var weigth

//2.Que tipo de Dado é a variavel acima
//2.What type of data is the above variable
console.log(typeof weigth)

//3.Declare uma  variavel e atribua valores para cada um dos dados:
//3.Declar a variable and assign values ​​to each of the data:
//name: string, age:number(interger), stars:number(float), siSubscrit:bololean 
let name = 'Lucas'
let age = 22
let stars = 99.9
let isHuman = true
console.log(name, age, stars, isHuman)

//4.Faça um objeto e imprima seu tipo
//4.Make an object and print its type
let student = {
    name: 'Lucas',
    sex: 'male',
    age: 22
}
console.log(typeof student)
console.log(`The student ${student.name} of sex ${student.sex} has ${student.age} years old`);

//5.Declare um array vazio
//5.Declarate an empty array
var students = []
console.log(students);


//6.reatribua o valor do array acima e atribuindo o valor do objeto nele
//6.reassign the value of the above array and assigning the value of the object in it
students = [student]
console.log(students);

//7.coloque no console o valor da posição zero do array acima
//7.set the zero position value of the above array on the console

console.log(students[0])

