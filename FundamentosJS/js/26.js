// Fetch API con Async / Await -> requiere ser una función
// Promise -> es un objeto que puede estar disponible a futuro, o no :)
const url = 'https://jsonplaceholder.typicode.com/comments'

// fetch(url)
//     .then((respuesta) => {
//         if(respuesta.ok){
//             return respuesta.json()
//         }
//         throw new Error('Hubo un error...') 
        
//     })
//     .then(data => console.log(data)) 
//     .catch(error => console.log(error.message))


//Funcion asincrona
// await: espera a que ocurra una respuesta (como que se pueda elaborar la conexion)
//        y vuelve a usar otro await para obtener los datos
//        Su sintaxis se lee como de derecha a izquierda
const consultarAPI = async() => {
    try{
        const response = await fetch(url) // Como no sabemos el tiempo que va a tardar en conectarse a la url, detenemos ejec. codigo hasta que finaliza
        if(!response.ok){
            throw new Error('Hubo un error...')
        }
        const data = await response.json() // una vez obtenida la url, la queremos como json
        console.log(data)

    }catch(error){
        console.log(error)
    }
}

consultarAPI()


