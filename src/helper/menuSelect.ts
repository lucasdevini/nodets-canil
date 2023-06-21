type Menu = '' | 'todos' | 'cachorro' | 'gato' | 'peixe';

export const selecionarMenu = (ativaMenu:Menu) => {
    let objetoMenu = {
        todos: false,
        cachorro: false,
        gato: false,
        peixe: false
    } 

    if(ativaMenu != '') {
        objetoMenu[ativaMenu] = true;
    }

    return objetoMenu;
}