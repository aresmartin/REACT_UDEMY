// Optional chaining (?) 
//-> acceder a las propiedades de un objeto o llamar metodos de 
//   propiedades sin tener que verificar si existen o no
const alumno = {
    nombre: 'Juan',
    clase: 'Programacion 1',
    aprobado: true,
    examenes:{
        examen1: 90
    }
}

//El ? comprueba que si existe examenes lo muestre, si no pues continua
//Sin el ? nos daría error todo el programa y no se nos mostraría el log de abajo
//Otra forma: con un if pero es "mucho codigo"
console.log(alumno.examenes?.examen1)
console.log("Despues de ALUMNO")


//Nullish coalescing operator (??)
// -> operador logico que retorna del valor que está del lado derecho
//    cuando el valor que está del lado izquierdo es null o undefined
const pagina = null ?? 1 // en caso de null le asignamos un 1
console.log(pagina)