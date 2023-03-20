import { faChevronRight, faHome, faMountainSun } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getDataFromMongo } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const Municipio = () => {

    const [search, setSearch] = useState('')
    const [municipio, setMunicipio] = useState([])

    useEffect(() => {
        getDataFromMongo('municipio')
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

    const items = [
        {
            label: 'Inicio',
            to: '/',
            icon: faHome
        },
        {
            label: 'Municipios',
            icon: faChevronRight
        }
    ]

    return (
        <>
            <Breadcrumbs items={items}/>

            <Header
                icon={faMountainSun}
                iconBgColor={'bg-yellow-50'}
                iconTextColor={'text-yellow-600'}
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
