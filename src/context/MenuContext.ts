import {createContext, useContext} from 'react';

interface MenuContextProps {
    isMenuOpen: boolean;
    setMenuValue: (val:boolean) => void;
}

export const MenuContext = createContext<MenuContextProps>({
    isMenuOpen: false,
    setMenuValue(val:boolean){}
})

export const useMenuContext = () => useContext(MenuContext);