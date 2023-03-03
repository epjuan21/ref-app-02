import React from "react";
import { useState } from "react";
import { createContext } from "react";

const MenuContext = createContext();

function MenuProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <MenuContext.Provider value={{
            isOpen,
            setIsOpen,
            toggleMenu
        }}>
            {children}
        </MenuContext.Provider>
    )
}

export { MenuContext, MenuProvider };



