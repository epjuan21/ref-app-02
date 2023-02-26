import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { faCapsules, faChevronRight, faCircleCheck, faCircleExclamation, faCircleQuestion, faCircleUp, faHome } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';

const items = [
    {
        label: 'Inicio',
        to: '/',
        icon: faHome
    },
    {
        label: 'Medicamentos',
        icon: faChevronRight
    }
]

const Medicamentos = () => {
    return (
        <>
            <Breadcrumbs items={items} />

            <Header
                icon={faCapsules}
                iconBgColor={'bg-rose-50'}
                iconTextColor={'text-rose-600'}
                title="Medicamentos"
                description="Tablas de Medicamentos del INVIMA"
            />

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
