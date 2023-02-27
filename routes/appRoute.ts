import { Router } from "express";
import { controller } from "../controllers/appController";

export const router = Router();

router.get("/api/citizens", controller.getCitizens);
router.get("/api/citizens/:id", controller.getCitizen);
