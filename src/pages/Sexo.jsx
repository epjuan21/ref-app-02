import { faChevronRight, faHome, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getDataFromMongo } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const Sexo = () => {

    const [search, setSearch] = useState('')
    const [sexo, setSexo] = useState([])

    useEffect(() => {
        getDataFromMongo('sexo')
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

    const items = [
        {
            label: 'Inicio',
            to: '/',
            icon: faHome
        },
        {
            label: 'Sexo',
            icon: faChevronRight
        }
    ]

    return (
        <>
            <Breadcrumbs items={items}/>

            <Header
                icon={faPeopleGroup}
                iconBgColor={'bg-indigo-50'}
                iconTextColor={'text-indigo-600'}
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
