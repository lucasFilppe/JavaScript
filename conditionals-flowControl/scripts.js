//Controw flow
// if ... else

let temperature = 36.5

if(temperature >= 37.5) {
    console.log('Febre alta')
}else if(temperature < 37.5 && temperature >= 37){
    console.log('Febre moderada')
}else{
    console.log('Saudavel')
    
}


//SWITCH
function calcule(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
        result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break        
        default:
            console.log('nao implementado')
            break
    } 
    return result       
}

console.log(calcule(4 ,'*', 5))

//THROW
//disparar um erro

function sayMayName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatorio'
    }
    console.log('Depois do erro');
    
}

