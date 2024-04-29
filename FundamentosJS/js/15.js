// 


const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// const nuevoArray = tecnologias.map( tech => {
//     if(tech === 'HTML'){
//         return 'GraphQL'
//     }else{
//         return tech
//     }
// })

//Retorna todos los elementos menos los que no son react
const nuevoArray2 = tecnologias.filter( tech => tech !== 'React') 

//console.log(nuevoArray)
console.log(nuevoArray2)