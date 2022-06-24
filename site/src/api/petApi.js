import axios from 'axios'

export async function cadastrarPet (nome) {
    const resp = await axios.post('http://localhost:5000/pet' , {
        nome: nome
    })
    return resp.data
}



export async function visualizarPet () {
    const resp = await axios.get('http://localhost:5000/pet')
    return resp.data
}