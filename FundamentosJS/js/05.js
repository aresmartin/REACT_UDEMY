// Objetos - Manipulacion

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

//Object.freeze(producto) //congelar un objeto, no se puede modificars
//Object.seal(producto) //sellar un objeto, no se puede agregar ni eliminar propiedades, pero si se pueden modificar
//con const, en un objeto si te permite modificar sus valores
producto.nombre = "Monitor Curvo" //reescribir un valor

//Si no existe la propiedad, la crea
producto.imagen = "imagen.jpg" //agregar un valor

delete producto.disponible //eliminar un valor


console.table(producto)