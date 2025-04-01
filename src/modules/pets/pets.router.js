import { Router } from "express";
import { petController } from "./pets.controller.js";
import { validateSchema } from "../../common/middlewares/validateSchema.js";
import { petsMocksSchema } from "./pets.schema.js";

const router = Router();

router.get("/mocks/:amount", validateSchema(petsMocksSchema), petController.createPetsMocks);
router.post("/", petController.create);
router.get("/:id", petController.getPetById);
export default router;