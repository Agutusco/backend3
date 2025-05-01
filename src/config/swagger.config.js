import swaggerJsDoc from "swagger-jsdoc";
import { userPaths } from "../docs/user/user.path.js";
import { userDocSchema } from "../docs/user/user.schema.js";
import { petPaths } from "../docs/pets/pets.path.js";
import { petDocSchema } from "../docs/pets/pet.schema.js";

export const swaggerOptions = {
  openapi: '3.0.0',
  info: {
    title: 'API animals',
    description: 'Documentación de la página web animals',
    version: '1.0.0',
  },
  servers: [
    {
      url: `http://localhost:8080/proyecto3`,
      description: 'Servidor de desarrollo',
    },
  ],
  paths: {
    ...userPaths,
    ...petPaths,
    
  },
  components: {
    schemas: {
      User: userDocSchema,
      Pet: petDocSchema
    }
  }
};
