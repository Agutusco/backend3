import { expect } from "chai";
import supertest from "supertest";
import { isValid } from "../../src/common/utils/hashPassword";


//request que apunta al servidor
const request = supertest('http://localhost:8080/auth')

describe('Test de integracion modulo Auth', () =>{

    let userTest = body

    it('[POST] /api/auth/register - Debe registrar un usuario', async ()=>{
        const data = {
            email: 'Juan@gmail.com',
            password: '123456'
        }

        const {status, body, error} = await request.post('/api/auth/register').send(data)


        const checkPass = isValid(body, newUser.password)

        const {user} = body
        expect(status).to.be.equal(201)
        expect(user.first_name).to.be.equal('Juan')
        expect(user.last_name).to.be.equal('Carlos')
        expect(user.email).to.be.equal('Juan@gmail.com')
        expect(user.password).to.not.be.equal('123456')
        expect()
    })

    after(async()=>{
        await request.delete(`api/users/${userTest._id}`)
    })

})