// Fetch API con Promises https://jsonplaceholder.typicode.com/
// Promise -> es un objeto que puede estar disponible a futuro, o no :)
const url = 'https://jsonplaceholder.typicode.com/comments'


//Quiero obtener los datos de esta url, entonces (.then) que es lo que voy a hacer?
fetch(url)
     //conectate a esta url, entonces tengo mi respuesta y la quiero como json
    .then((respuesta) => {
        if(respuesta.ok){
            return respuesta.json()
        }
        throw new Error('Hubo un error...') // Este codigo se ejecuta en el catch
        
    })
    .then(data => console.log(data)) // si la respuesta es correcta, pedimos los datos

    .catch(error => console.log(error.message)) //Error de red: no tienes wifi