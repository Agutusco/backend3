import mongoose from 'mongoose';
import envsConfig from './envs.config';
import { logger } from '../common/utils/logger.js';


export const conectarDB = () => {
    try {
      mongoose.connect(envsConfig.MONGO_URL);
      logger.info("Mongo DB Conectado");
      
    } catch (error) {
      logger.error("Error al conectar con Mongo");
    }
  }