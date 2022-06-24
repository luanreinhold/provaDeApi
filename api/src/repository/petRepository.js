import {con} from './connection.js'

export async function inserirPET(pet) {
    const comando = 
    `
    insert into tb_pet (nm_apelido)
    values (?)
    `
    const resposta = await con.query (comando, [pet.nome]);
    return resposta;
}

export async function verPets () {
    const comando =
    `
    select 
    id_pet			id,
    nm_apelido		nome
    from tb_pet;
    
    `
    const resposta = await con.query (comando);
    return resposta[0];
}

export async function deletarPet (id) {
    const comando =

    `
    delete from     tb_pet
    where           id_pet = ?;

    `
    const resposta = await con.query (comando, [id.id]);
    resposta.affectedROWS;
    return resposta
}