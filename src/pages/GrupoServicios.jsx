import { faGroupArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getGrupoServicios } from '../api'
import SearchBar from '../components/SearchBar'

const GrupoServicios = () => {

    const [search, setSearch] = useState('')
    const [servicios, setServicios] = useState([])

    useEffect(() => {
        getGrupoServicios()
            .then((data) => {
                setServicios(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredGrupoServicios = servicios.filter(collection => {
        const lowerCaseSearchTerm = search.toLowerCase();
        return (
            collection.Codigo.toLowerCase().includes(lowerCaseSearchTerm) ||
            collection.Nombre.toLowerCase().includes(lowerCaseSearchTerm)
        );
    });

    const handleSearch = event => {
        setSearch(event.target.value);
    };

    return (
        <div>
            <div className='mb-6 flex items-center border-b pb-4'>
                <div className={`py-3 px-3 mr-4 bg-yellow-100 text-yellow-600 rounded-md`}>
                    <FontAwesomeIcon icon={faGroupArrowsRotate} size="xl" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-slate-800'>Grupo Servicios</h1>
                    <span className='text-sm font-medium text-slate-500'>Tabla de Referencia GrupoServicios de SISPRO</span>
                </div>
            </div>

            <div className='flex justify-between mb-6 border border-slate-200 p-4 rounded-md bg-slate-100'>
                <p className='text-sm font-semibold text-slate-600'>Fecha Actualización: <span>2022-06-16</span></p>
                <p className='text-sm font-semibold text-slate-600'>Total Registros: <span>5</span></p>
            </div>

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />
            
            {filteredGrupoServicios.map(collection => (
                <div
                    className='border rounded bg-white border-indigo-200 mt-2 py-1 px-4'
                    key={collection._id}
                >
                    <div className='flex py-2'>
                        <div className='mr-2 font-semibold'>{collection.Codigo}</div>
                        <div>{collection.Nombre}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GrupoServicios
