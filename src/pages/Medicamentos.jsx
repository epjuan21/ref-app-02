import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { faCapsules, faCircleCheck, faCircleExclamation, faCircleQuestion, faCircleUp } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

const Medicamentos = () => {
    return (
        <>
            <Header
                icon={faCapsules}
                title="Medicamentos"
                description="Tablas de Medicamentos del INVIMA"
            />

            <nav className="flex mb-6" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Inicio
                        </Link>
                    </li>
                </ol>
            </nav>

            <div className='mb-8 flex gap-2'>
                <Link to={"vigentes"} className="flex items-center gap-2 text-sm font-semibold bg-white text-gray-700 py-2 px-4 border rounded-md">
                    <FontAwesomeIcon icon={faCircleCheck} size="lg" className='ml-2' />
                    Medicamentos Vigentes
                </Link>
                <Link to={"vencidos"} className="flex items-center gap-2 text-sm font-semibold bg-white text-gray-700 py-2 px-4 border rounded-md">
                    <FontAwesomeIcon icon={faCircleExclamation} size="lg" className='ml-2' />
                    Medicamentos Vencidos
                </Link>
                <Link to={"renovacion"} className="flex items-center gap-2 text-sm font-semibold bg-white text-gray-700 py-2 px-4 border rounded-md">
                    <FontAwesomeIcon icon={faCircleUp} size="lg" className='ml-2' />
                    Medicamentos en Renovación
                </Link>
                <Link to={"otros"} className="flex items-center gap-2 text-sm font-semibold bg-white text-gray-700 py-2 px-4 border rounded-md">
                    <FontAwesomeIcon icon={faCircleQuestion} size="lg" className='ml-2' />
                    Otros Estados
                </Link>
            </div>


            <Outlet />

        </>
    )
}

export default Medicamentos
