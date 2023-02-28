import { Router } from "express";
import { controller } from "../controllers/appController";

export const router = Router();

router.get("/api/citizens", controller.getCitizens);
router.get("/api/citizens/:id", controller.getCitizen);
router.post("/api/citizens", controller.addNewCitizen)
router.put("/api/citizens/:id", controller.updateCitizen)
router.delete("/api/citizens/:id", controller.deleteCitizen)