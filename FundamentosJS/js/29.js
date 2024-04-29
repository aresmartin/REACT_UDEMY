// Manipular elementos HTML con JS
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

heading.textContent = 'Un nuevo heading...'
// heading.id = 'Un nuevo id...'

// heading.removeAttribute('class')

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un nuevo valor...'
//inputNombre.dataset.nombre = "input"

console.log(enlaces)
// enlaces[0].textContent = 'Nuevo Enlace'

enlaces.forEach( enlace => enlace.textContent = 'Nuevo enlace')
