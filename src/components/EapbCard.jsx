import React from 'react'

const EapbCard = ({ eapb }) => {

    const { Codigo, Nombre, Descripcion, Habilitado, TipoRegimen, TipoID, Regimen, Nit, Tipo } = eapb;

    return (
        <>
            <div className='border rounded bg-white border-indigo-200 mt-2 py-1 px-4'>

                <div className='flex flex-col md:flex-row items-center border-b py-2'>
                    <div className='mr-2 font-semibold'>{Codigo}</div>
                    <div className='text-center'>{Nombre}</div>
                </div>

                <div>
                    <span className='text-xs font-medium text-gray-500'>Descripción</span>
                    <p className='text-sm'>{Descripcion}</p>
                </div>

                <div className='flex flex-wrap flex-col md:flex-row items-center text-center md:text-left justify-between text-sm py-2'>

                    <div className='w-28'>
                        <span className='text-xs font-medium text-gray-500'>Habilitado</span>
                        <p className='text-sm'>{Habilitado}</p>
                    </div>

                    <div className='w-28'>
                        <span className='text-xs font-medium text-gray-500'>Tipo Régimen</span>
                        <p className='text-sm'>{TipoRegimen}</p>
                    </div>

                    <div className='w-28'>
                        <span className='text-xs font-medium text-gray-500'>Tipo Id</span>
                        <p className='text-sm'>{TipoID}</p>
                    </div>

                    <div className='w-28'>
                        <span className='text-xs font-medium text-gray-500'>Nit</span>
                        <p className='text-sm'>{Nit}</p>
                    </div>

                    <div className='w-56'>
                        <span className='text-xs font-medium text-gray-500'>Regimen</span>
                        <p className='text-sm'>{Regimen}</p>
                    </div>

                    <div className='w-56'>
                        <span className='text-xs font-medium text-gray-500'>Tipo</span>
                        <p className='text-sm'>{Tipo}</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default EapbCard
