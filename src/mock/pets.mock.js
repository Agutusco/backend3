import {fakerES as faker} from '@faker-js/faker'
import { createHash } from '../common/utils/hashPassword.js'



export const generatePets = (amount) =>{
    const mascotas = []

    for(let i = 0; i < amount; i++){
        const mascota ={
            name: faker.person.firstName(),
            specie: faker.helpers.arrayElement(["Loro", "Perro", "Conejo", "Loro", "Nutria"]),
            birthDate: faker.date.past({ years: 3 }),
            image: faker.image.urlLoremFlickr({ category: "animals" }),
        }

        mascotas.push(mascota)
    }

    return mascotas
}