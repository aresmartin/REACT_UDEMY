// Eventos del DOM - Clicks
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

// Callback -> espera a que ocurra un evento y cd ocurre se dispara
// heading.addEventListener('mouseenter', () => {
//     heading.textContent = 'Nuevo Heading al dar click...'
// })
// heading.addEventListener('mouseleave', () => {
//     heading.textContent = 'Saliendo...'
// })


enlaces.forEach( enlace => {
    enlace.addEventListener('click', (event) => {
        event.preventDefault()

        event.target.textContent = 'Diste click...'
        //console.log(event.target)
    })
})




