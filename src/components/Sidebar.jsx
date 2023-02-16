import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCapsules, faLaptopMedical, faVirus, faUser, faBuilding, faArrowCircleRight, faPaperPlane, faMattressPillow, faPeopleGroup, faListDots, faUsers, faDisease, faBookMedical, faFileMedical, faEarthAmericas, faMountainSun, faMap, faHouseMedical, faThumbsUp, faGroupArrowsRotate, faBed, faBuildingUser } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(true);

    const activeClassName = "text-blue-600 text-sm font-semibold flex gap-x-4 cursor-pointer py-2 pl-4 transition-all";
    const inactiveClassName = "bg-white text-gray-800 text-sm font-semibold flex rounded-md gap-x-4 cursor-pointer py-2 pl-4 transition-all";

    return (
        <div className={`${isOpen ? "w-64" : "w-16"} duration-300 overflow-y-auto overflow-x-hidden mx-8 pr-6 pt-8 border-r border-gray-300`}>
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
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faHouse} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >
                                Inicio
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/medicamentos"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faCapsules} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >
                                Medicamentos
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/cups"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faLaptopMedical} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >CUPS</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/cie"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faVirus} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >CIE10</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tipoid"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faUser} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Tipo Id</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/zona"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faBuilding} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Zona</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/via"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faArrowCircleRight} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Via Ingreso</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tiponota"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Tipo Nota</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tipomedicamentopos"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faMattressPillow} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Tipo Medicamentos POS</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/sexo"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faPeopleGroup} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Sexo</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/servicios"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faListDots} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Servicios</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tipousuario"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faUsers} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Tipo Usuario</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tipodiagnosticoppal"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faDisease} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Tipo Diagnóstico Principal</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/finalidad"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faBookMedical} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Finalidad Consulta</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/causa"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faFileMedical} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Causa Externa</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pais"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faEarthAmericas} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Pais</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/municipio"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faMountainSun} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Municipio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/departamento"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faMap} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Departamento</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/modalidad"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faHouseMedical} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Modalidad</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/lstsino"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faThumbsUp} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Lista Si No</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/gruposervicios"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faGroupArrowsRotate} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Grupo Servicios</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/condicionegreso"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faBed} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >Condición Egreso</span>
                        </NavLink>
                    </li>
{/*                     <li>
                        <NavLink
                            to="/eapb"
                            className={({ isActive }) => (isActive ? activeClassName : inactiveClassName)}
                        >
                            <FontAwesomeIcon icon={faBuildingUser} size="lg" />
                            <span
                                className={`${!isOpen && "scale-0"} origin-left duration-300`}
                            >EAPB</span>
                        </NavLink>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}
