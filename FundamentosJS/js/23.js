// Evaluacion de corto circuito

const auth = true


// Un Truthy en java es un valor que es considerado true cuando se
// evalua en un contexto de boolean
// if("false"){
//     console.log('Truthy')
// }else{
//     console.log('Falsy')
// }

auth && console.log('User autenticado')