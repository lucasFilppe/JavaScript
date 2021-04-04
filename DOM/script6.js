//navegando pelo elemnto buscando irmaos
//nextSibling = considera os espaços em brancos
//nextSiblingElment= desconsida os espaços em branco

const el = document.querySelector('header')

console.log(el.nextSibling);
console.log(el.nextElementSibling);

//previousSibling e previousElementSibling
console.log(el.previousSibling);
console.log(el.previousElementSibling);
