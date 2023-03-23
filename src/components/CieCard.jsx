import React from 'react'

const CieCard = ({ items }) => {

    const { Codigo, Nombre, Descripcion, AplicaASexo, EdadMinima, EdadMaxima, GrupoMortalidad, Extra_V, Capitulo, SubGrupo, SubCategoria } = items

    return (
        <>
            <div className='border rounded bg-white border-indigo-200 mt-2 py-1 px-4'>

                <div className='flex flex-col md:flex-row items-start border-b py-2'>
                    <div className='mr-2 font-semibold'>{Codigo}</div>
                    <div>{Nombre}</div>
                </div>
                
                <div>
                    <span className='text-xs font-medium text-gray-500'>Descripción</span>
                    <p className='text-sm'>{Descripcion}</p>
                </div>

                <div className='flex flex-wrap flex-col md:flex-row items-center text-center md:text-left justify-between text-sm py-2'>

                    <div className='w-28'>
                        <span className='text-xs font-medium text-gray-500'>Aplica A Sexo</span>
                        <p className='text-sm'>{AplicaASexo}</p>
                    </div>

                    <div className='w-32'>
                        <span className='text-xs font-medium text-gray-500'>Edad Mínima</span>
                        <p className='text-sm'>{EdadMinima}</p>
                    </div>

                    <div className='w-36'>
                        <span className='text-xs font-medium text-gray-500'>Edad Máxima</span>
                        <p className='text-sm'>{EdadMaxima}</p>
                    </div>

                    <div className='w-36'>
                        <span className='text-xs font-medium text-gray-500'>Grupo Mortalidad</span>
                        <p className='text-sm'>{GrupoMortalidad}</p>
                    </div>

                    <div className='w-36'>
                        <span className='text-xs font-medium text-gray-500'>Capitulo</span>
                        <p className='text-sm'>{Capitulo}</p>
                    </div>
                    
                    <div className='w-36'>
                        <span className='text-xs font-medium text-gray-500'>SubGrupo</span>
                        <p className='text-sm'>{SubGrupo}</p>
                    </div>

                    <div className='w-36'>
                        <span className='text-xs font-medium text-gray-500'>SubCategoria</span>
                        <p className='text-sm'>{SubCategoria}</p>
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
