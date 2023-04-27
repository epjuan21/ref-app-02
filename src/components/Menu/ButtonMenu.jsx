import React from 'react'
import { useContext } from 'react'
import { MenuContext } from '../../MenuContext'

const ButtonMenu = () => {

    const { toggleMenu } = useContext(MenuContext)

    return (
        <div className="fixed bottom-5 left-5 flex justify-end">
            <button
                type="button"
                className="text-gray-500 border p-2 rounded-full hover:bg-gray-300"
                onClick={toggleMenu}
            >
                <span className="sr-only">Open menu</span>
                <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    )
}

export default ButtonMenu
