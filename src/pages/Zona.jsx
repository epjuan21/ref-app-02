import { faBuilding, faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getDataFromMongo } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const Zona = () => {

    const [search, setSearch] = useState('')
    const [zona, setZona] = useState([])

    useEffect(() => {
        getDataFromMongo('zona')
            .then((data) => {
                setZona(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredZona = zona.filter(collection => {
        const lowerCaseSearch = search.toLowerCase();
        return (
            collection.Codigo.toLowerCase().includes(lowerCaseSearch) ||
            collection.Nombre.toLowerCase().includes(lowerCaseSearch)
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
            label: 'Zona',
            icon: faChevronRight
        }
    ]

    return (
        <>
            <Breadcrumbs items={items} />

            <Header
                icon={faBuilding}
                iconBgColor={'bg-neutral-50'}
                iconTextColor={'text-neutral-600'}
                title="Zona"
                description="Tabla de Referencia ZonaVersion2 de SISPRO"
                updateDate="2022-06-16"
                numberRegisters="2"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredZona.map(collection => (
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

export default Zona
