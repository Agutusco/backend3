import mongoose from "mongoose";
import { petDao } from '../../src/modules/pets/pets.dao.js'
import { expect } from 'chai'


mongoose.connect('mongodb://127.0.0.1:27017/proyecto3')

//Descripcion del test
describe('Test de PetDao', ()=>{

let petTest

before(() =>{
    console.log('INICIO LOS TESTINGS')
})

it('Se tiene que imprimir un Hola', () =>{
    console.log('Hola mundo');
    
})

// it('Se tiene que imprimir un array de pets', async() =>{
//     const pets = await petDao.getAll()

//     expect(pets).to.be.an('array')

// })

it('Debe crear un pet', async() =>{
    const newPet ={
        name: 'John',
        specie: 'Raton',
        birthDate: '09-12-2018',
        image: 'ola'
    }

    const pet = await petDao.create(newPet)
    petTest = pet

    expect(pet).to.be.an('object')
    expect(pet).to.have.property('_id')

    expect(pet).to.not.have.property('age')



})
// it('Se debe obtener una mascota por ID', async() =>{
//     const pet = await petDao.getOne({_id: petTest._id})

//     expect(pet).to.be.an('object')
//     expect(pet).to.have.property('name')


//     expect(pet.name).to.be.equal('Johny')

// })

it('Se debe poder actualizar una mascota', async () =>{
    const petUpdateData = {
        name: 'Maula',
        specie: 'Pez payaso'
    }

    const updatePet = await petDao.update(petTest._id, petUpdateData)
    
    expect(updatePet).to.be.an('object')
    expect(updatePet).to.have.property('name')


    expect(updatePet.name).to.be.equal('Maula')
    expect(updatePet.specie).to.be.equal('Pez payaso')

})

it('Eliminar el pet' , async () =>{
    await petDao.remove(petTest._id)

    const pet = await petDao.getOne({_id: petTest._id})
    expect(pet).to.be.null

})

    after(() =>{
            console.log('Fin de los test')
            mongoose.disconnect()
    })

})