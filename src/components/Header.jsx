import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = ({icon, iconBgColor, iconTextColor, title, description, updateDate, numberRegisters}) => {
    return (
        <>
            <div className='mb-6 flex items-center border-b pb-4'>
                <div className={`flex justify-center items-center h-12 w-12 mr-4 ${iconBgColor} ${iconTextColor} rounded-md`}>
                    <FontAwesomeIcon icon={icon} size="lg" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-slate-800'>{title}</h1>
                    <span className='text-sm font-medium text-slate-500'>{description}</span>
                </div>
            </div>
            { updateDate && (
                <div className='flex justify-between flex-wrap mb-6 border border-slate-200 p-4 rounded-md bg-slate-100'>
                    <p className='text-sm font-semibold text-slate-600'>Fecha Actualización: <span>{updateDate}</span></p>
                    <p className='text-sm font-semibold text-slate-600'>Total Registros: <span>{numberRegisters}</span></p>
                </div>
            ) }
        </>
    )
}

export default Header
