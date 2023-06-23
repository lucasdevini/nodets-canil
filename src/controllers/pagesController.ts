import { Request, Response } from "express";
import { selecionarMenu } from "../helpers/menuHelper";
import { Pet } from "../models/pet"

export const home = (req: Request, res: Response) => {  
    res.render('pages/page', {
        menu: selecionarMenu('todos'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals',
        },
        pets: Pet.showAll()
    });
}

export const cachorros = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: selecionarMenu('cachorro'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog'
        },
        pets: Pet.showType('dog')
    });
}

export const gatos = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: selecionarMenu('gato'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat'
        },
        pets: Pet.showType('cat')
    });
}

export const peixes = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: selecionarMenu('peixe'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish'
        },
        pets: Pet.showType('fish')
    });
}