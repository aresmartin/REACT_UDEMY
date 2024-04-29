// Funciones - Function Declaration


//Si se llama primero y luego se ejecuta la funcion funciona igual
//sumar()
// function sumar(numero = 0, numero2 = 0){ //numero2 = 0 -> parametro por defecto
//     console.log(numero + numero2)
// }

// sumar(10, 20)
// sumar(2, 3)
// sumar(100)

// function sumar(numero = 0, numero2 = 0){ //numero2 = 0 -> parametro por defecto
//     return  [numero + numero2, 'Hola Mundo']
// }
// const [resultado, holaMundo] = sumar(20, 30)

// console.log(resultado)
// console.log(holaMundo)

//Retornar un objeto:
function sumar(numero = 0, numero2 = 0){ //numero2 = 0 -> parametro por defecto
        return  { 
            resultado: numero + numero2,
             mensaje: 'Hola Mundo'}
     }

const {resultado, mensaje} = sumar(20, 30)

console.log(resultado)
console.log(mensaje)

