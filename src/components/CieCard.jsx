import React from 'react'

const CieCard = ({ cie }) => {

    const { Codigo, Nombre, Descripcion, GrupoMortalidad, Extra_V, Capitulo, SubGrupo, Fecha_Actualizacion } = cie

    return (
        <>
            <div className='border rounded bg-white border-indigo-200 mt-2 py-1 px-4'>

                <div className='flex border-b-2 py-2'>
                    <div className='mr-2 font-semibold'>{Codigo}</div>
                    <div>{Nombre}</div>
                </div>

                <div className='flex justify-between text-sm py-2'>

                <div>
                        <p>Descripción</p>
                        <p>{Descripcion}</p>
                    </div>

                    <div>
                        <p>Capitulo</p>
                        <p>{Capitulo}</p>
                    </div>

                    <div>
                        <p>SubGrupo</p>
                        <p>{SubGrupo}</p>
                    </div>

                    <div>
                        <p>Grupo Mortalidad</p>
                        <p>{GrupoMortalidad}</p>
                    </div>

                    <div>
      
                    </div>
                </div>

                <div className='flex gap-2 border-t-2 py-2 text-sm font-thin'>
                    <p>{Extra_V}</p>
                </div>
            </div>
        </>
    )
}

export default CieCard
