import { faHouseMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getModalidad } from '../api'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const Modalidad = () => {

    const [search, setSearch] = useState('')
    const [modalidad, setModalidad] = useState([])

    useEffect(() => {
        getModalidad()
            .then((data) => {
                setModalidad(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredModalidad = modalidad.filter(collection => {
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
                icon={faHouseMedical}
                title="Modalidad Atención"
                description="Tabla de Referencia ModalidadAtencion de SISPRO"
                updateDate="2022-06-16"
                numberRegisters="8"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredModalidad.map(collection => (
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

export default Modalidad
