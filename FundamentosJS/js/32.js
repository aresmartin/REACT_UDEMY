// Eventos del DOM - Submit

// Se dispara en el submit pero hay que select el formulario
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    //e.preventDefault()

    // Poner value al final para acceder directamente al valor
    const nombre = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value

    // Prevenir nuevas alertas
    const alertaPrevia = document.querySelector('.alerta')
    alertaPrevia?.remove() // Si hay una alerta previa, se elimina

    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2',
     'font-black')

    if(nombre === '' || password === ''){
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('bg-red-500')
    }else{
        alerta.textContent = 'Todo bien, iniciando sesion...'
        alerta.classList.add('bg-green-500')
    } 

    formulario.appendChild(alerta)

    setTimeout(() =>{
        alerta.remove()
    }, 3000)
})