// Funciones - Arrow Functions

// const sumar = function(){
//     console.log(numero + numero2)
// }

//Cuando solo tienes una linea en las arrows funtion ->  se puede quitar llaves y no poner return
const sumar = (numero = 0, numero2 = 0) => numero + numero2
const sumarUnParametro = numero => numero + 20

const resultado = sumar(30, 30)
const resultado2 = sumarUnParametro(20)
console.log(resultado)
console.log(resultado2)

const sumaArrow = () => 2 + 2
const resultado3 = sumaArrow()
console.log(resultado3)
