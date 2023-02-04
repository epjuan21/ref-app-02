import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCapsules, faLaptopMedical, faVirus, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`${isOpen ? "w-72" : "w-20"} duration-300 overflow-y-auto overflow-x-hidden pl-7 pr-6 pt-8`}>
            <div className="flex items-center">
                <picture>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${!isOpen && "rotate-180"
                            } w-7 h-7 absolute cursor-pointer border border-blue-800 rounded-full top-8 transition-all duration-500`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </picture>
                <h1
                    className={`${!isOpen && "scale-0"
                        } ml-10 duration-300 text-blue-700 font-semibold origin-left text-xl`}
                >
                    Referencias
                </h1>
            </div>
            <nav className='pt-7'>
                <ul className='text-sm'>
                    <li>
                        <Link
                            to="/"
                            className="text-gray-800 text-sm font-semibold flex gap-x-4 cursor-pointer py-2 -ml-1"
                        >
                            <FontAwesomeIcon icon={faHouse} size="lg" className='ml-2' />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >
                                Inicio
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/medicamentos"
                            className="text-gray-800 text-sm font-semibold flex gap-x-4 cursor-pointer py-2 -ml-1 pl-1"
                        >
                            <FontAwesomeIcon icon={faCapsules} size="lg" className='ml-2' />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >
                                Medicamentos
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/cups"
                            className="text-gray-800 text-sm font-semibold flex gap-x-4 cursor-pointer py-2 -ml-1"
                        >
                            <FontAwesomeIcon icon={faLaptopMedical} size="lg" className='ml-2' />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >CUPS</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/cie"
                            className="text-gray-800 text-sm font-semibold flex gap-x-4 cursor-pointer py-2 -ml-1"
                        >
                            <FontAwesomeIcon icon={faVirus} size="lg" className='ml-2' />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >CIE10</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/tipoid"
                            className="text-gray-800 text-sm font-semibold flex gap-x-4 cursor-pointer py-2 -ml-1"
                        >
                            <FontAwesomeIcon icon={faUser} size="lg" className='ml-2' />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Tipo Id</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
