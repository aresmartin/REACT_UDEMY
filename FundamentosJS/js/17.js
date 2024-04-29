//Array Methods
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
const numeros = [10, 20, 30]

// Filter -> sacar un elem del arreglo o mantener uno y sacar resto

//const nuevoArray = tecnologias.filter((tech) => tech !== 'HTML')

//Diferencias con arrow functions -> mas lineas para hacer lo mismo
// const tecnologias2 = tecnologias.filter(function(tech){
//     if(tech !== 'HTML'){
//         return tech
//     }
// })

//const resultado = numeros.filter(numero => numero > 15 )

//Includes -> revisar si un elem existe en un arreglo
//const resultado = tecnologias.includes('CSS')

// Some -> Devuelve si al menos uno cumple la condicion
//const resultado = numeros.some(numero => numero > 15)

//Find -> Devuelve el primer elemento que cumple la condicion
//const resultado = numeros.find(numero => numero > 15)

//Every -> Devuelve true o false si todos cumplen la condicion
//Ejemplo: si estamos creando un sistema que requiere que todos los
//         usuarios hayan pagado
//const resultado = numeros.every(numero => numero > 5)

//Reduce -> Devuelve un acumulado del total (ejem: carrito compras)
// Carrito compras para mostrar user el total a pagar
const resultado = numeros.reduce((total, numero) => total + numero,0) 
// El 0 es para poner un valor inicial

console.log(resultado)
//console.log(tecnologias2)