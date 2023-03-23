import React from 'react'

const CupsCard = ({ items }) => {

    const { Codigo, Descripcion, Habilitado, Nombre, Qx, UsoCodigoCUP, NroMinimo, NroMaximo, DxRequerido, Capitulo, Grupo, SubGrupo, Categoria, SubCategoria } = items

    return (
        <>
            <div className='border rounded bg-white border-indigo-200 mt-2 py-1 px-4'>

                <div className='flex flex-col md:flex-row items-center border-b py-2'>
                    <div className='mr-2 font-semibold'>{Codigo}</div>
                    <div className='text-center'>{Nombre}</div>
                </div>

                <div className='flex flex-col md:flex-row items-center justify-between text-sm py-2'>

                    <div className='text-center md:text-left'>
                        <span className='text-xs text-center font-medium text-gray-500'>Descripción</span>
                        <p className='text-sm'>{Descripcion}</p>
                    </div>

                </div>

                <div className='flex flex-col flex-wrap md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-2 border-t py-2 text-sm font-thin'>

                    {UsoCodigoCUP ? (
                        <div>
                            <span className='text-xs font-medium text-gray-500'>Uso Código CUP</span>
                            <p className='text-sm'>{UsoCodigoCUP}</p>
                        </div>
                    ) : (
                        ''
                    )}

                    {Qx ? (
                        <div>
                            <span className='text-xs font-medium text-gray-500'>Qx</span>
                            <p className='text-sm'>{Qx}</p>
                        </div>
                    ) : (
                        ''
                    )}

                    {NroMinimo ? (
                        <div>
                            <span className='text-xs font-medium text-gray-500'>Nro Mínimo</span>
                            <p className='text-sm'>{NroMinimo}</p>
                        </div>
                    ) : (
                        ''
                    )}

                    {NroMaximo ? (
                        <div>
                            <span className='text-xs font-medium text-gray-500'>Nro Máximo</span>
                            <p className='text-sm'>{NroMaximo}</p>
                        </div>
                    ) : (
                        ''
                    )}

                    {DxRequerido ? (
                        <div>
                            <span className='text-xs font-medium text-gray-500'>Dx Requerido</span>
                            <p className='text-sm'>{DxRequerido}</p>
                        </div>
                    ) : (
                        ''
                    )}

                    {Capitulo ? (
                        <div>
                            <span className='text-xs font-medium text-gray-500'>Capítulo</span>
                            <p className='text-sm'>{Capitulo}</p>
                        </div>
                    ) : (
                        ''
                    )}

                    {Grupo ? (
                        <div>
                            <span className='text-xs font-medium text-gray-500'>Grupo</span>
                            <p className='text-sm'>{Grupo}</p>
                        </div>
                    ) : (
                        ''
                    )}

                    {SubGrupo ? (
                        <div>
                            <span className='text-xs font-medium text-gray-500'>SubGrupo</span>
                            <p className='text-sm'>{SubGrupo}</p>
                        </div>
                    ) : (
                        ''
                    )}

                    {Categoria ? (
                        <div>
                            <span className='text-xs font-medium text-gray-500'>Categoria</span>
                            <p className='text-sm'>{Categoria}</p>
                        </div>
                    ) : (
                        ''
                    )}

                    {SubCategoria ? (
                        <div>
                            <span className='text-xs font-medium text-gray-500'>SubCategoria</span>
                            <p className='text-sm'>{SubCategoria}</p>
                        </div>
                    ) : (
                        ''
                    )}

                </div>
            </div>
        </>
    )
}

export default CupsCard
