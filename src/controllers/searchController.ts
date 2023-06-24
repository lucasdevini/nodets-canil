import { Request, Response } from "express";
import { Pet } from "../models/pet";

export const pesquisa = (req: Request, res:Response) => {
    let busca: string = req.query.q as string;

    if(!busca) {
        res.redirect('/'); 
        return;
    }
        
    res.render('pages/pesquisa', {pets: Pet.showFromSearch(busca)}); 
}