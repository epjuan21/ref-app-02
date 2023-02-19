import { faGroupArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getGrupoServicios } from '../api'
import Header from '../components/Header'
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
        <>
            <Header
                icon={faGroupArrowsRotate}
                title="Grupo Servicios"
                description="Tabla de Referencia GrupoServicios de SISPRO"
                updateDate="2022-06-16"
                numberRegisters="5"
            />

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
        </>
    )
}

export default GrupoServicios
