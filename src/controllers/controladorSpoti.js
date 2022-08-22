//RECETA PARA CONSUMIR

//1.PA INDE VAS OME
//URI DEL API
const URI='https://api.spotify.com/v1/artists/7gVIcvxZLQ9mKI7k6tXQdq/top-tracks?market=US'

//2. A HACER QUE OME?

//METODO
const PETICION={
    method:'GET',
    headers:{
        Autorizacion:'Bearer BQAWzOYYrEvUNtolh9GhvfdU9usWrQwAU_gXWfLgfZ2c5RFTapgi0ccEq-VOPp5xNAimTXHFzwJO-X9K56vud6gpgTXsTRuTGWesXEGgxjfH6SccfFbhNBpLZfR3eEVNqnieZmz4UcvOAU2Y_2kbpuBvdaP4aUcZ6TiA0ArfZ6B_9jm_GtQCq1snQvLEPZtNwhM'
    }
}

//3 ANDATE PSOME
//CONSUMA EL API (UTILIZANDO PROMESA)
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
})

.catch(function(respuertaError){
    console.log(respuertaError)
})