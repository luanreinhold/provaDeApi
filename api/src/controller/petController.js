import {Router } from 'express'
import { deletarPet, inserirPET, verPets } from '../repository/petRepository.js';

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


server.delete('/pet/:id', async (req, resp) => {

    try{

        const {id} = req.params;
        console.log(id)

        const x = await deletarPet(id)


        resp.status(200).send()

    } catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

export default server