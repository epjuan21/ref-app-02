import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getViaIngreso } from '../api'
import SearchBar from '../components/SearchBar'

const ViaIngreso = () => {

    const [search, setSearch] = useState('')
    const [via, setVia] = useState([])

    useEffect(() => {
        getViaIngreso()
            .then((data) => {
                setVia(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredViaIngreso = via.filter(collection => {
        const lowerCaseSearch = search.toLowerCase();
        return (
            collection.Codigo.toLowerCase().includes(lowerCaseSearch) ||
            collection.Nombre.toLowerCase().includes(lowerCaseSearch)
        );
    });

    const handleSearch = event => {
        setSearch(event.target.value);
    };

    return (
        <div>
            <div className='mb-6 flex items-center'>
                <div className={`py-3 px-3 mr-4 bg-yellow-100 text-yellow-600 rounded-md`}>
                    <FontAwesomeIcon icon={faArrowCircleRight} size="xl" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-slate-800'>Via Ingreso Usuario</h1>
                    <span className='text-sm font-medium text-slate-500'>Tabla de Referencia ViaIngresoUsuario de SISPRO</span>
                </div>
            </div>

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredViaIngreso.map(collection => (
                <div
                    className='flex justify-between items-center border rounded bg-white border-indigo-200 mt-2 py-1 px-4'
                    key={collection._id}
                >
                    <div className='flex py-2'>
                        <div className='mr-2 font-semibold'>{collection.Codigo}</div>
                        <div>{collection.Nombre}</div>
                    </div>
                    <div>
                        <div>
                            <p className='text-xs'>Procedimientos: <span>{collection["Extra_II:Procedimientos"]}</span></p>
                        </div>
                        <div>
                            <p className='text-xs'>Hospitalización: <span>{collection["Extra_IV:Hospitalizacion"]}</span></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ViaIngreso
