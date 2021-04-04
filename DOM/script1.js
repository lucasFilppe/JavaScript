//getEkemntByID()
const element = document.getElementById('blog-title')
console.log(element)

//getelementsByclassName()
const element2 =document.getElementsByClassName("one")
console.log(element2);

//getElementByTagName
const element3 =document.getElementsByTagName('h1')
console.log(element3)

//querySelector()
const element4 =document.querySelector('meta')
console.log(element4)

//querSectorAll()
const element5 =document.querySelector('#one')
console.log(element5)

//qual deles usar?

//manipulando elemntos
const element6 = document.querySelector('h3')
console.log(element6.textContent)

//innerTex

const element7 = document.querySelector('h3')
console.log(element7.innerText)

//inner html adiciona dados diretamente no html
const element8 = document.querySelector('h1')
element8.innerHTML = "lucas filipe ramos"

//manipulando atributos
