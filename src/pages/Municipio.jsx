import { faMountainSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getMunicipio } from '../api'
import Header from '../components/Header'
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
        <>
            <Header
                icon={faMountainSun}
                title="Municipio"
                description="Tabla de Referencia Municipio de SISPRO"
                updateDate="2018-10-12"
                numberRegisters="1123"
            />

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
        </>
    )
}

export default Municipio
