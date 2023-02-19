import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getSexo } from '../api'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const Sexo = () => {

    const [search, setSearch] = useState('')
    const [sexo, setSexo] = useState([])

    useEffect(() => {
        getSexo()
            .then((data) => {
                setSexo(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredSexo = sexo.filter(collection => {
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
                icon={faPeopleGroup}
                title="Sexo"
                description="Tabla de Referencia Sexo de SISPRO"
                updateDate="2021-08-13"
                numberRegisters="3"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredSexo.map(collection => (
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

export default Sexo
