import { faListDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getServicios } from '../api'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const Servicios = () => {

    const [search, setSearch] = useState('')
    const [servicios, setServicios] = useState([])

    useEffect(() => {
        getServicios()
            .then((data) => {
                setServicios(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredServicios = servicios.filter(collection => {
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
        <>
            <Header
                icon={faListDots}
                title="Servicios"
                description="Tabla de Referencia Servicios de SISPRO"
                updateDate="2022-09-02"
                numberRegisters="157"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredServicios.map(collection => (
                <div
                    className='flex  items-center  justify-between border rounded bg-white border-indigo-200 mt-2 py-1 px-4'
                    key={collection._id}
                >
                    <div className='flex py-2'>
                        <div className='mr-2 font-semibold'>{collection.Codigo}</div>
                        <div>{collection.Nombre}</div>
                    </div>
                    <p className='text-sm'>{collection.Descripcion}</p>
                </div>
            ))}
        </>
    )
}

export default Servicios
