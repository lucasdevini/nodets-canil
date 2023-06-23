import { Request, Response } from "express";
import { Pet } from "../models/pet";

export const pesquisa = (req: Request, res:Response) => {
    let busca: string = req.query.q as string;

    res.render('pages/pesquisa', {pets: Pet.showFromSearch(busca), busca},);
}