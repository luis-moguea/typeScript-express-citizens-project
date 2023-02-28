import { Request, Response } from "express";
import { citizens } from "../models/data";
import { validateCitizen } from "../utils/validator";

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
  },

  
  addNewCitizen: (req: Request, res: Response) => {

    const { error } = validateCitizen(req.body)
    if(error){
        res.status(404).send(error.details[0].message)
    }

    const newCitizen = {
        id: citizens.length + 1,
        name: req.body.name,
        nationality: req.body.nationality
    }
    citizens.push(newCitizen)

    res.send(newCitizen)
  },

  updateCitizen: (req: Request, res: Response) => {
    //filter citizens
    const citizenFilter = citizens.find(el => el.id === parseInt(req.params.id))
    if(!citizenFilter){
        return res.status(400).send("Citizen does not exist")
    }

    //set citizen requirements 
    const result = validateCitizen(req.body)
    if(result.error) {
        res.status(404).send(result.error.details[0].message)
    }

    //update info
    citizenFilter.name = req.body.name
    citizenFilter.nationality = req.body.nationality
    res.send(citizenFilter)
  },

  deleteCitizen: (req: Request, res: Response) => {
    const citizenFilter = citizens.find(
      (el) => el.id === parseInt(req.params.id)
    );
    if (!citizenFilter) {
      return res.status(400).send("Citizen does not exist");
    }

    const index = citizens.indexOf(citizenFilter)
    citizens.splice(index, 1)
    
    res.send(citizenFilter);
  }
};
