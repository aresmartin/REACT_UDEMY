//Objetos

//Puedo tener estos 3 valores en una sola variable
// const nombre = "Tablet"
// const precio = 300
// const disponible = true

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto)
console.table(producto)

console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

//Destructuring -> sacar valores de un objeto (sacar de unas estructura)
const {nombre, precio, disponible } = producto

console.log(nombre) 
console.log(precio) 
console.log(disponible) 

//Object Literal Enhacement -> mejora literal de objetos (agregar propiedades)
//Es decir, variables que ya están fuera de un objeto, colocarlas dentro de este
const autenticado = true
const usuario = "Martin"

const nuevoObjeto = {
    autenticado: autenticado, //Cuando ambos nombres son iguales se puede poner autenticado solo
    usuario: usuario
}

console.table(nuevoObjeto)