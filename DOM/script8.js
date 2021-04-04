//adicionando elemntos

const div = document.createElement('div');
div.innerText = "Ola mundo"

//insertBefore = inserir antes
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)