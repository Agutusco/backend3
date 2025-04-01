
import { generatePetsMocks } from "../../mock/pets.mock.js";
import { petDao } from "./pets.dao.js";

class PetService{

  async getOne(query) {
    const pet = await petDao.getOne(query);

    return pet;
  }

  async createPetsMocks(amount) {
    const pets = generatePetsMocks(amount);
    await petDao.removeAll();
    for(const pet of pets){
      await petDao.create(pet);
    }

    return pets;
  }

}

export const petService = new PetService();