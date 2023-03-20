import { faChevronRight, faHome, faHouseMedical } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getDataFromMongo } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const Modalidad = () => {

    const [search, setSearch] = useState('')
    const [modalidad, setModalidad] = useState([])

    useEffect(() => {
        getDataFromMongo('modalidad')
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

    const items = [
        {
            label: 'Inicio',
            to: '/',
            icon: faHome
        },
        {
            label: 'Modalidad',
            icon: faChevronRight
        }
    ]

    return (
        <>
            <Breadcrumbs items={items}/>

            <Header
                icon={faHouseMedical}
                iconBgColor={'bg-fuchsia-50'}
                iconTextColor={'text-fuchsia-600'}
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
