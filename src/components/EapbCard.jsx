import React from 'react'

const EapbCard = ({ eapb }) => {

    const { Codigo, Nombre, Descripcion, Habilitado } = eapb;

    return (
        <div className='border rounded bg-white border-indigo-200 mt-2 py-2 px-4'>
            <div className='flex justify-start items-center border-b-slate-100 border-b pb-2'>
                <p className='text-sm font-semibold mr-2'>{Codigo}</p>
                <p className='text-sm'>{Nombre}</p>
            </div>
        </div>
    )
}

export default EapbCard
