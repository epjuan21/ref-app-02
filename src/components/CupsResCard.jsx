import React from 'react'

const CupsResCard = ({ items }) => {

    const { Codigo, Descripcion, CodigoTrazabilidad, DescripcionTrazabilidad } = items

    return (
        <>
            <div className='border rounded bg-white border-indigo-200 mt-2 py-1 px-4'>

                <div className='flex flex-col md:flex-row items-center border-b py-2'>
                    <div className='mr-2 font-semibold'>{Codigo}</div>
                    <div className='text-center'>{Descripcion}</div>
                </div>

                <div className='flex flex-col flex-wrap md:flex-row items-center justify-start md:justify-start text-center md:text-left gap-2 border-t py-2 text-sm font-thin'>

                    <div>
                        <span className='text-xs font-medium text-gray-500'>Trazabilidad</span>
                        <p className='text-sm'>{CodigoTrazabilidad}</p>
                    </div>
        
                    <div>
                        <span className='text-xs font-medium text-gray-500'>DescripcionTrazabilidad</span>
                        <p className='text-sm'>{DescripcionTrazabilidad}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CupsResCard
