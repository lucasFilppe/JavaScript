//criar um aplicativo com frases motivacionais
//function declaration
function createPhases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
}


//execute, run, the function
createPhases()

//function expression
//parametros(parameters)

const suma = function(number1, number2){
    total = number1 + number2
    return total

}

let number1 = 5
let number2 = 3

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`A soma é ${suma(number1, number2)}`)
console.log(total)

//function drink
function fazerDrink(fruta1, fruta2){
    return fruta1 + fruta2
}
const cup = fazerDrink("maça", "banana")
console.log(cup)

//function scope
let subject
function createThink() {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink())
console.log(subject)

//function hosting

sayMyNmane()

function sayMyNmane(){
    console.log('Lucas');
    
}

//callback function
function quebrado(name){
    console.log(name)
}

quebrado(
    () => {
        console.log('estou em uma callback');
        
    }
)

//function constructor

function Person(name){
    this.name = name
}
const lucas = new Person('lucas')
console.log(lucas)