// Unir dos objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Martin",
    premium: true
}

//const nuevoObjeto = Object.assign(producto, cliente) //NO
//Linea 16 va a retornar un objeto y con los ... le decimos que tome una copia de producto y cliente
const nuevoObjeto2 = {
    producto: {...producto}, //entre llaves porque es un objeto
    cliente: {...cliente}
}
console.log(nuevoObjeto2) 
console.log(cliente)
console.log(producto)
