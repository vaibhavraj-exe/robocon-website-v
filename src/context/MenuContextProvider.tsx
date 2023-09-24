"use client";

import { ReactNode, useState } from "react";
import { MenuContext } from "./MenuContext";

interface IProps {
  children: ReactNode;
}

const MenuContextProvider = ({ children }: IProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const setMenuValue = (val: boolean) => setIsMenuOpen(val);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setMenuValue }}>
      {children}
    </MenuContext.Provider>
  );
};


export default MenuContextProvider;