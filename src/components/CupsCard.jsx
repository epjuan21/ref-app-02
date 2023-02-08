import React from 'react'

const CupsCard = ({ cup }) => {

    const { Codigo, Capitulo, Descripcion, DxRequerido, Fecha_Actualizacion, Habilitado, Nombre, Qx, UsoCodigoCUP } = cup

    return (
        <>
            <div className='border rounded bg-white border-indigo-200 mt-2 py-1 px-4'>

                <div className='flex flex-col md:flex-row items-center border-b py-2'>
                    <div className='mr-2 font-semibold'>{Codigo}</div>
                    <div className='text-center'>{Nombre}</div>
                </div>

                <div className='flex flex-col md:flex-row items-center justify-between text-sm py-2'>

                    <div className='text-center md:text-left'>
                        <span className='text-xs font-medium text-gray-500'>Capitulo</span>
                        <p className='text-sm'>{Capitulo}</p>
                    </div>

                    <div className='text-center md:text-right'>
                        <span className='text-xs text-center font-medium text-gray-500'>Descripción</span>
                        <p className='text-sm'>{Descripcion}</p>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left gap-2 border-t py-2 text-sm font-thin'>
                    <div>
                        <span className='text-xs font-medium text-gray-500'>Uso Código CUP</span>
                        <p className='text-sm'>{UsoCodigoCUP}</p>
                    </div>

                    <div>
                        <span className='text-xs font-medium text-gray-500'>Dx Requerido</span>
                        <p className='text-sm'>{DxRequerido}</p>
                    </div>

                    <div>
                        <span className='text-xs font-medium text-gray-500'>Qx</span>
                        <p className='text-sm'>{Qx}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CupsCard
