// Performance y multiple Asinc /Await

const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/todos'
const url3 = 'https://jsonplaceholder.typicode.com/photos'


const consultarAPI = async() => {
    try{
        const inicio = performance.now() // comienza a medir el tiempo/performance

        const response = await fetch(url) // Como no sabemos el tiempo que va a tardar en conectarse a la url, detenemos ejec. codigo hasta que finaliza
        const data = await response.json() // una vez obtenida la url, la queremos como json
        console.log(data)

        const response2 = await fetch(url2) 
        const data2 = await response2.json() 
        console.log(data2)

        const response3 = await fetch(url3) 
        const data3 = await response3.json() 
        console.log(data3)

        const fin = performance.now() // Para la medicion de tiempo/performance
        console.log(`EL resultado de la PRIMERA funcion es: ${fin - inicio} ms`) // Ojo las comillas

    }catch(error){
        console.log(error)
    }
}

consultarAPI()

// Mucho más rapido
const consultarAPI2 = async () => {
    try{
        const inicio = performance.now() // comienza a medir el tiempo/performance

        //promise.all para que las 3 consultas inicien al mismo tiempo
        const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)]) // Se cargan las 3 url, no esperan con los awaits
        const [data, data2, data3] = await Promise.all([response.json(), response2.json(), response3.json()])
    
        console.log(data)   
        console.log(data2) 
        console.log(data3)

        const fin = performance.now() // Para la medicion de tiempo/performance
        console.log(`EL resultado de la SEGUNDA funcion: ${fin - inicio} ms`) // Ojo las comillas

    }catch(error){
        console.log(error)
    }
}

consultarAPI2()