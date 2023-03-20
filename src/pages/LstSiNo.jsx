import { faChevronRight, faHome, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getDataFromMongo } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const LstSiNo = () => {

    const [search, setSearch] = useState('')
    const [lstsino, SetLstsino] = useState([])

    useEffect(() => {
        getDataFromMongo('lstsino')
            .then((data) => {
                SetLstsino(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredLstSiNo = lstsino.filter(collection => {
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
            label: 'Lista Si No',
            icon: faChevronRight
        }
    ]

    return (
        <>
            <Breadcrumbs items={items}/>

            <Header
                icon={faThumbsUp}
                iconBgColor={'bg-purple-50'}
                iconTextColor={'text-purple-600'}
                title="Lista Si No"
                description="Tabla de Referencia LstSINO de SISPRO"
                updateDate="2021-07-21"
                numberRegisters="2"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />


            {filteredLstSiNo.map(collection => (
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

export default LstSiNo
