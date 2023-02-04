import React from 'react'

const CupsCard = ({ cup }) => {

    const { Codigo, Capitulo, Descripcion, DxRequerido, Fecha_Actualizacion, Habilitado, Nombre, Qx, UsoCodigoCUP } = cup

    return (
        <>
            <div className='border rounded bg-white border-indigo-200 mt-2 py-1 px-4'>
                
                <div className='flex border-b-2 py-2'>
                    <div className='mr-2 font-semibold'>{Codigo}</div>
                    <div>{Nombre}</div>
                </div>

                <div className='flex justify-between text-sm py-2'>
                    
                    <div>
                        <p>Capitulo</p>
                        <p>{Capitulo}</p>
                    </div>

                    <div>
                        <p>Descripción</p>
                        <p>{Descripcion}</p>
                    </div>

                    <div>
                        <p>UsoCodigoCUP</p>
                        <p>{UsoCodigoCUP}</p>
                    </div>

                    <div>
                        <p>DxRequerido</p>
                        <p>{DxRequerido}</p>
                    </div>

                    <div>
                        <p>Qx</p>
                        <p>{Qx}</p>
                    </div>
                </div>

                <div className='flex gap-2 border-t-2 py-2 text-sm font-thin'>
                    <p>Fecha Actualización</p>
                    <p>{Fecha_Actualizacion}</p>
                </div>
            </div>
        </>
    )
}

export default CupsCard
