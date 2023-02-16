import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getPais } from '../api'
import SearchBar from '../components/SearchBar'

const Pais = () => {

    const [search, setSearch] = useState('')
    const [pais, setPais] = useState([])

    useEffect(() => {
        getPais()
            .then((data) => {
                setPais(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredPais = pais.filter(collection => {
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
                    <FontAwesomeIcon icon={faEarthAmericas} size="xl" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-slate-800'>Pais</h1>
                    <span className='text-sm font-medium text-slate-500'>Tabla de Referencia Pais de SISPRO</span>
                </div>
            </div>

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredPais.map(collection => (
                <div
                    className='border rounded bg-white border-indigo-200 mt-2 py-1 px-4'
                    key={collection._id}
                >
                    <div className='flex items-center py-2'>
                        <div className='w-12'>
                            <img src={`https://flagcdn.com/32x24/${collection.Extra_II.toLowerCase()}.png`} height="40" alt={`Bandera de ${collection.Nombre}`} />
                        </div>
                        <div>
                            <p className='text-sm font-semibold'>{collection.Codigo} <span>{collection.Nombre}</span></p> 
                            <p className='text-xs'>Alpha-2 <span className='font-semibold'>{collection.Extra_II}</span></p> 
                            <p className='text-xs'>Alpha-3 <span className='font-semibold'>{collection.Extra_III}</span></p>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default Pais
