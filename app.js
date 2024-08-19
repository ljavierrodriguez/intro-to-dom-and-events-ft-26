/* BOM = Browser Object Model */
/*
window.open(url)
window.alert(message)
window.confirm(message)
window.prompt(message, text)
window.document
*/
/* DOM = Document Object Model */

/* metodos para acceder a los elementos en el html */
/* 
getElementById(id) => devuelve un elemento con el id indicado
getElementsByClassName(class) devuelve una coleccion de elementos con la clase indicada
getElementsByName(name) devuelve una coleccion de nodos con el valor del atributo name o id del elemento
getElementsByTagName(tag) devuelve una coleccion con todos los elementos con el tag indicado

querySelector(selector)
querySelectorAll(selector)

createElement(tag)
createAttribute(attr)
createTextNode(text)
*/

let saludo = document.getElementById('saludo')
saludo.innerHTML = "Hola Mundo desde Javascript"
saludo.style.color = "red"
console.log(saludo)

let noticias = document.getElementsByClassName('noticia')
console.log(noticias)
console.log(noticias[0])
for (let index = 0; index < noticias.length; index++) {
    const element = noticias[index];
    console.log(element)
}

let generos = document.getElementsByName('genero')
console.log(generos)
generos.forEach((element) => console.log(element))

let divs = document.getElementsByTagName('div')
console.log(divs)


let saludoQS = document.querySelector('#saludo')
console.log(saludoQS)

let noticiasQS = document.querySelectorAll('.noticia')
console.log(noticiasQS)


let h1 = document.createElement('h1')
h1.innerText = "H1 Creado desde Javascript"

console.log(h1)
document.body.appendChild(h1)
let h2 = "<h2>Esto es un h2</h2>"
//document.body.innerHTML = h2


let div = document.createElement('div')
let attrClass = document.createAttribute('class')
let text = document.createTextNode("Hola Mundo")
attrClass.value = "box"

//div.setAttribute('class', 'box')
div.setAttributeNode(attrClass)
div.appendChild(text)

let comment = document.createComment("Hola mundo")


document.body.appendChild(comment)

console.log(attrClass)
console.log(div)

let caja2 = document.querySelector('.caja2')
caja2.style.width = "100px"
caja2.style.height = "50px"
caja2.style.backgroundColor = "burlywood"

function caja2In(){
    let caja2 = document.querySelector('.caja2')
    caja2.style.backgroundColor = "bisque"
}

function caja2Out(){
    let caja2 = document.querySelector('.caja2')
    caja2.style.backgroundColor = "burlywood"
}

let caja3 = document.querySelector('.caja3')
caja3.addEventListener('mouseover', (evento) => {
    console.log(evento)
    console.log(evento.target)
    //caja3.style.backgroundColor = "red"
    evento.target.style.backgroundColor = "red";
})

caja3.addEventListener('mouseout', (evento) => {
    console.log(evento)
    console.log(evento.target)
    evento.target.style.backgroundColor = "blueviolet"
})


let boton = document.querySelector('.boton')
boton.addEventListener('click', () => {
    let respuesta = confirm('Desea seguir trabajando')
    if(respuesta){
        alert('No quiero')
    } else {
        alert('Vamos a correr!')
    }
})