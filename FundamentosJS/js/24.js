//Para poder importar, en el html añadir type="module" al archivo js que quieras importarle metodos

import { sumar, restar, multiplicar, dividir} from './funciones.js'
const resultado1 = sumar(20, 10)
const resultado2 = restar(20, 10)
const resultado3 = multiplicar(20, 10)
const resultado4 = dividir(20, 10)

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)