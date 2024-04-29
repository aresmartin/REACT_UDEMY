// Funciones - Function Expression


//sumar() -> aqui llamas antes a la funcion no funciona
const sumar = function(numero = 0, numero2 = 0){
    return numero + numero2
}
const resultado = sumar(30, 20)
console.log(resultado)

//Arrow functions solo se pueden usar en la sintaxis de function expression
//Explicacion Arrow function en 14.js