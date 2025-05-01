import mongoose from "mongoose";

import mongoose from "mongoose";
import { userDao } from '../../src/modules/pets/pets.dao.js'
import { expect } from 'chai'



//Descripcion del test
describe('Test de UserDao', ()=>{

    beforeEach(()=>{
        mongoose.connect('mongodb://127.0.0.1:27017/proyecto3')
    })
    
let userTest

before(() =>{
    console.log('INICIO LOS TESTINGS')
})

it('Se tiene que imprimir un Hola', () =>{
    console.log('Hola mundo');
    
})



it('Debe crear un user', async() =>{
    const newUser = {
        first_name: 'juan',
        last_name: 'Santiago',
        email: 'juan@gmail.com',
        password: '123'
    }

    const user = await userDao.create(newUser)
    userTest = user

    expect(user).to.be.an('object')
    expect(user).to.have.property('_id')

    expect(user).to.not.have.property('age')



})


it('Se debe poder actualizar una mascota', async () =>{
    const userUpdateData = {
        name: 'Pablo',
        email: 'pablo@gmail.com'
    }

    const updateuser = await userDao.update(userTest._id, userUpdateData)
    
    expect(updateuser).to.be.an('object')
    expect(updateuser).to.have.property('name')


    expect(updateuser.first_name).to.be.equal('Pablo')
    expect(updateuser.email).to.be.equal('pablo@gmail.com')

})

it('Eliminar el user' , async () =>{
    await userDao.remove(userTest._id)

    const user = await userDao.getOne({_id: userTest._id})
    expect(user).to.be.null

})

    after(() =>{
            console.log('Fin de los test')
            mongoose.disconnect()
    })

})