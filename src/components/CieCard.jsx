import React from 'react'

const CieCard = ({ cie }) => {

    const { Codigo, Nombre, Descripcion, GrupoMortalidad, Extra_V, Capitulo, SubGrupo, Fecha_Actualizacion } = cie

    return (
        <>
            <div className='border rounded bg-white border-indigo-200 mt-2 py-1 px-4'>

                <div className='flex flex-col md:flex-row items-center border-b py-2'>
                    <div className='mr-2 font-semibold'>{Codigo}</div>
                    <div className='text-center'>{Nombre}</div>
                </div>

                <div className='flex flex-col md:flex-row items-center text-center md:text-left justify-between text-sm py-2'>

                    <div>
                        <span className='text-xs font-medium text-gray-500'>Descripción</span>
                        <p className='text-sm'>{Descripcion}</p>
                    </div>

                    <div className='w-28'>
                        <span className='text-xs font-medium text-gray-500'>Capítulo</span>
                        <p className='text-sm'>{Capitulo}</p>
                    </div>

                    <div className='w-32'>
                        <span className='text-xs font-medium text-gray-500'>Sub grupo</span>
                        <p className='text-sm'>{SubGrupo}</p>
                    </div>

                    <div className='w-36'>
                        <span className='text-xs font-medium text-gray-500'>Grupo Modalidad</span>
                        <p className='text-sm'>{GrupoMortalidad}</p>
                    </div>
                </div>

                <div className='flex gap-2 border-t py-2 text-sm font-thin'>
                    <p>{Extra_V}</p>
                </div>
            </div>
        </>
    )
}

export default CieCard
