import { faMap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getDepartamento } from '../api'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const Departamento = () => {

    const [search, setSearch] = useState('')
    const [departamento, setDepartamento] = useState([])

    useEffect(() => {
        getDepartamento()
            .then((data) => {
                setDepartamento(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredDepartamentos = departamento.filter(collection => {
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
                icon={faMap}
                title="Departamentos"
                description="Tabla de Referencia Departamentos de SISPRO"
                updateDate="2022-01-26"
                numberRegisters="34"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredDepartamentos.map(collection => (
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

export default Departamento
