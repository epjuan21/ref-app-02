import { faChevronRight, faEarthAmericas, faHome } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getDataFromMongo } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import SearchBar from '../components/SearchBar'

const Pais = () => {

    const [search, setSearch] = useState('')
    const [pais, setPais] = useState([])
    const itemsPerPage = 10;

    useEffect(() => {
        getDataFromMongo('pais')
            .then((data) => {
                setPais(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredPais = pais.filter(collection => {
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
            label: 'Pais',
            icon: faChevronRight
        }
    ]

    const CardComponent = ({ items }) => (
        <div
            className='border rounded bg-white border-indigo-200 mt-2 py-1 px-4'
            key={items._id}
        >
            <div className='flex items-center py-2'>
                <div className='w-12'>
                    <img src={`https://flagcdn.com/32x24/${items.Extra_II.toLowerCase()}.png`} height="40" alt={`Bandera de ${items.Nombre}`} />
                </div>
                <div>
                    <p className='text-sm font-semibold'>{items.Codigo} <span>{items.Nombre}</span></p>
                    <p className='text-xs'>Alpha-2 <span className='font-semibold'>{items.Extra_II}</span></p>
                    <p className='text-xs'>Alpha-3 <span className='font-semibold'>{items.Extra_III}</span></p>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Breadcrumbs items={items} />

            <Header
                icon={faEarthAmericas}
                iconBgColor={'bg-amber-50'}
                iconTextColor={'text-amber-600'}
                title="Pais"
                description="Tabla de Referencia Pais de SISPRO"
                updateDate="2018-10-03"
                numberRegisters="249"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

{/*             {filteredPais.map(collection => (
                <div
                    className='border rounded bg-white border-indigo-200 mt-2 py-1 px-4'
                    key={collection._id}
                >
                    <div className='flex items-center py-2'>
                        <div className='w-12'>
                            <img src={`https://flagcdn.com/32x24/${collection.Extra_II.toLowerCase()}.png`} height="40" alt={`Bandera de ${collection.Nombre}`} />
                        </div>
                        <div>
                            <p className='text-sm font-semibold'>{collection.Codigo} <span>{collection.Nombre}</span></p>
                            <p className='text-xs'>Alpha-2 <span className='font-semibold'>{collection.Extra_II}</span></p>
                            <p className='text-xs'>Alpha-3 <span className='font-semibold'>{collection.Extra_III}</span></p>
                        </div>
                    </div>
                </div>
            ))} */}

            <Pagination items={filteredPais} itemsPerPage={itemsPerPage} CardComponent={CardComponent} />
        </>
    )
}

export default Pais
