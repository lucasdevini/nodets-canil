import { Request, Response } from "express";
import { selecionarMenu } from "../helper/menuSelect";

export const home = (req: Request, res: Response) => {  
    res.render('pages/page', {
        menu: selecionarMenu('todos'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals'
        }
    });
}

export const cachorros = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: selecionarMenu('cachorro'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog'
        }
    });
}

export const gatos = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: selecionarMenu('gato'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat'
        }
    });
}

export const peixes = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: selecionarMenu('peixe'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish'
        }
    });
}