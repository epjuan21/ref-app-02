import React from 'react'

export default function MedicamentCard({ medicament }) {

    const { estadocum, producto, registrosanitario, descripcioncomercial, expediente, consecutivocum, cantidadcum, atc, descripcionatc, viaadministracion, concentracion, principioactivo, unidadmedida, cantidad, unidadreferencia, formafarmaceutica, titular, nombrerol } = medicament

    return (
        <div className='border rounded bg-white border-indigo-200 mt-2 py-2 px-4'>

            <div className='flex flex-col md:flex-row justify-between items-center border-b-slate-100 border-b pb-2'>
                <p className='text-sm grow font-semibold'>{producto}</p>
                <p className='text-sm'>{registrosanitario}</p>
                <p className={`${estadocum == "Inactivo" ? "bg-rose-100 text-rose-900" : "bg-lime-100 text-lime-900"} w-24 text-center font-semibold ml-2 rounded p-1 px-1 text-sm`}>{estadocum}</p>
            </div>

            <div className='flex flex-wrap mb-2'>
                <div className='grow'>
                    <span className='text-xs font-medium text-gray-500'>Descripción Comercial</span>
                    <p className='text-sm'>{descripcioncomercial}</p>
                </div>
            </div>

            <div className='flex justify-between flex-wrap'>
                <div className='w-32'>
                    <span className='text-xs font-medium text-gray-500'>Expediente</span>
                    <p className='text-sm'>{expediente}-{consecutivocum}</p>
                </div>
                <div className='w-28'>
                    <span className='text-xs font-medium text-gray-500'>Cantidad CUM</span>
                    <p className='text-sm'>{cantidadcum}</p>
                </div>
                <div className='w-24'>
                    <span className='text-xs font-medium text-gray-500'>ATC</span>
                    <p className='text-sm'>{atc}</p>
                </div>
                <div className='grow'>
                    <span className='text-xs font-medium text-gray-500'>Descripción ATC</span>
                    <p className='text-sm'>{descripcionatc}</p>
                </div>
            </div>

            <div className='flex justify-between flex-wrap'>
                <div className='w-36'>
                    <span className='text-xs font-medium text-gray-500'>Via Administraicón</span>
                    <p className='text-sm'>{viaadministracion}</p>
                </div>
                <div className='w-28'>
                    <span className='text-xs font-medium text-gray-500'>Concentración</span>
                    <p className='text-sm'>{concentracion}</p>
                </div>
            </div>

            <div className='flex justify-between flex-wrap pb-2'>
                <div className=''>
                    <span className='text-xs font-medium text-gray-500'>Principio Activo</span>
                    <p className='text-sm'>{principioactivo}</p>
                </div>
                <div className=''>
                    <span className='text-xs font-medium text-gray-500'>Unidad Medida</span>
                    <p className='text-sm'>{unidadmedida}</p>
                </div>
                <div className=''>
                    <span className='text-xs font-medium text-gray-500'>Cantidad</span>
                    <p className='text-sm'>{cantidad}</p>
                </div>
                <div className=''>
                    <span className='text-xs font-medium text-gray-500'>Unidad Referencia</span>
                    <p className='text-sm'>{unidadreferencia}</p>
                </div>
                <div className=''>
                    <span className='text-xs font-medium text-gray-500'>Forma Farmaceutica</span>
                    <p className='text-sm'>{formafarmaceutica}</p>
                </div>
            </div>

            <div className='flex justify-between flex-wrap border-t border-t-gray-200'>
                <div className=''>
                    <span className='text-xs font-medium text-gray-500'>Titular</span>
                    <p className='text-sm'>{titular}</p>
                </div>
                <div className=''>
                    <span className='text-xs font-medium text-gray-500'>Nombre Rol</span>
                    <p className='text-sm'>{nombrerol}</p>
                </div>
            </div>
        </div>
    )
}
