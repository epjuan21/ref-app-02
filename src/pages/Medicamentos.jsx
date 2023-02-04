import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { faCapsules } from '@fortawesome/free-solid-svg-icons';

const Medicamentos = () => {
    return (
        <>
            <div className='mb-6 flex items-center'>
                <div className={`py-3 px-3 mr-4 bg-pink-100 text-pink-600 rounded-md`}>
                    <FontAwesomeIcon icon={faCapsules} size="xl" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-slate-800'>Medicamentos</h1>
                    <span className='text-sm font-medium text-slate-500'>Tablas de Medicamentos del INVIMA</span>
                </div>
            </div>

            <div className='mb-8 flex gap-2'>
                <Link to={"vigentes"} className="flex items-center gap-2 text-sm font-semibold bg-white text-gray-700 py-2 px-4 rounded-md">
                    <FontAwesomeIcon icon={faCapsules} size="lg" className='ml-2' />
                    Medicamentos Vigentes
                </Link>
                <Link to={"vencidos"} className="flex items-center gap-2 text-sm font-semibold bg-white text-gray-700 py-2 px-4 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Medicamentos Vencidos
                </Link>
                <Link to={"renovacion"} className="flex items-center gap-2 text-sm font-semibold bg-white text-gray-700 py-2 px-4 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Medicamentos en Renovación
                </Link>
                <Link to={"otros"} className="flex items-center gap-2 text-sm font-semibold bg-white text-gray-700 py-2 px-4 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Otros Estados
                </Link>
            </div>


            <Outlet />

        </>
    )
}

export default Medicamentos
