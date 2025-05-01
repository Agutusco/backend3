import { expect } from "chai";
import supertest from "supertest";



//request que apunta al servidor
const request = supertest('http://localhost:8080/auth')

describe('Test de integracion modulo Auth', () =>{

    let petTest 

    it('[POST] /api/pets - Debe registrar un usuario', async ()=>{
        const newPet = {
            name: 'Felix',
            specie: 'Loro',
            birthDate: '10-12-2015',
            imgage: 'hola'
        }

        const {status, body, error} = await request.post('/api/auth/register').send(newPet)


        const checkPass = isValid(body, newUser.password)
        petTest = body

        expect(status).to.be.equal(201)
        expect(body).to.have.property('._id')
        expect(body).to.have.property('name')
        expect(body).to.have.property('specie')
        expect(body).to.have.property('image')
        expect(body.name).to.be.equal('Felix')
        expect(body.specie).to.be.equal('Loro')
        expect(body.birthDate).to.be.equal('10-12-2015')

        

    })

    after(async()=>{
        await request.delete(`api/users/${petTest._id}`)
    })

})