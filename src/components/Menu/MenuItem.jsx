import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { MenuContext } from '../../MenuContext';

const MenuItem = ({ link, icon, title }) => {

    const activeClassName = "text-blue-600 text-sm font-semibold flex gap-x-4 cursor-pointer py-2 pl-4 transition-all";
    const inactiveClassName = "bg-white text-gray-800 text-sm font-semibold flex rounded-md gap-x-4 cursor-pointer py-2 pl-4 transition-all";

    const { toggleMenu } = useContext(MenuContext)

    return (
        <li>
            <NavLink
                to={link}
                className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                onClick={toggleMenu}
            >
                <FontAwesomeIcon icon={icon} size="lg" />
                <span
                    className={`origin-left duration-300`}
                >
                    {title}
                </span>
            </NavLink>
        </li>
    )
}

export default MenuItem
