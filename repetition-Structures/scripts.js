//FOR
//break para a execução do loop
//continue pula

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

//while enquanto

let j = 0;
while(j < 10){
    console.log(j)

    j++;
}

//for....of

let names = ['Larissa','Pedro']

for (let name of names){
    console.log(name)
    
}

//FOR....IN
let person = {
    name: 'lucas',
    age: 22,
    weigth:  65.8
}

for (let property in person) {
    console.log(property)
    
}