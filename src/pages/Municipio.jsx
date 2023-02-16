import { faMountainSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getMunicipio } from '../api'
import SearchBar from '../components/SearchBar'

const Municipio = () => {

    const [search, setSearch] = useState('')
    const [municipio, setMunicipio] = useState([])

    useEffect(() => {
        getMunicipio()
            .then((data) => {
                setMunicipio(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredMunicipio = municipio.filter(collection => {
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
                    <FontAwesomeIcon icon={faMountainSun} size="xl" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-slate-800'>Municipio</h1>
                    <span className='text-sm font-medium text-slate-500'>Tabla de Referencia Municipio de SISPRO</span>
                </div>
            </div>

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredMunicipio.map(collection => (
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

export default Municipio
