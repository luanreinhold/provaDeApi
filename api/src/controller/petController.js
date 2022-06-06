import {Router } from 'express'
import { inserirPET, verPets } from '../repository/petRepository.js';

const server = Router();


server.post('/pet', async (req, resp) => {

    try {

    const pet = req.body;
     
    if(!pet)
    throw new Error ("Campo Obrigatório!")

    const chamarFuncao = await inserirPET(pet);

    resp.send(pet)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    
})

server.get('/pet', async (req, resp) => {

    try{

        const visualizarPets = await verPets()
        resp.send(visualizarPets)

    } catch(err) {
        resp.status(400).send ({
            erro: err.message
        })
    }

})


export default server