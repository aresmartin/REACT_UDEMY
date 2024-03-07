// Operaciones en los arrays

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

//Añadir elementos al array
//tecnologias.push('GraphQL') //Añade al final
//tecnologias.unshift('GraphQL') //Añade al principio

//const nuevoArreglo = [...tecnologias, 'GraphQL'] //No modifica el array original (mejor practica)
// const nuevoArreglo = ['GraphQL', ...tecnologias ] //añade al principio

//Eliminar elementos del array
//tecnologias.pop() //Elimina el ultimo elemento
//tecnologias.shift() //Elimina el primer elemento
//tecnologias.splice(2, 1) //Elimina a partir del elemento 2, 1 elemento

// const nuevoArray = tecnologias.filter( function(tech){ //filter se ejecuta por cada elemento del array
//     return tech !== 'HTML' //retorna todos los elementos que no sean HTML
// })

// const nuevoArray2 = tecnologias.filter( function(tech){ 
//     return tech === 'Node.js' //retorna todos los elementos que sean iguales a Node.js
// })

//Reemplazar el array
//tecnologias[0] = 'GraphQL'
const nuevoArray = tecnologias.map( function(tech){
    if(tech === 'HTML'){
        return 'GraphQL'
    }else{
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray)
// console.table(nuevoArray2)