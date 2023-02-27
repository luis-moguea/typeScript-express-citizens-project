import { Request, Response } from "express";
import { citizens } from "../models/data";

export const controller = {
  getCitizens: (req: Request, res: Response) => {
    res.send(citizens);
  },
  getCitizen: (req: Request, res: Response) => {
    const citizenFilter = citizens.find(
      (el) => el.id === parseInt(req.params.id)
    );
    if (!citizenFilter) {
      return res.status(400).send("Citizen does not exist");
    }
    res.send(citizenFilter);
  }
};
