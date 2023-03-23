import { faChevronRight, faHome, faListDots } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getDataFromMongo } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import SearchBar from '../components/SearchBar'

const Servicios = () => {

    const [search, setSearch] = useState('')
    const [servicios, setServicios] = useState([])
    const itemsPerPage = 10;

    useEffect(() => {
        getDataFromMongo('servicios')
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

    const items = [
        {
            label: 'Inicio',
            to: '/',
            icon: faHome
        },
        {
            label: 'Servicios',
            icon: faChevronRight
        }
    ]

    const CardComponent = ({ items }) => (
        <div className='flex items-center justify-between border rounded bg-white border-indigo-200 mt-2 py-1 px-4' key={items._id} >
            <div className='flex py-2'>
                <div className='mr-2 font-semibold'>{items.Codigo}</div>
                <div>{items.Nombre}</div>
            </div>
            <p className='text-sm'>{items.Descripcion}</p>
        </div>
    );

    return (
        <>
            <Breadcrumbs items={items} />

            <Header
                icon={faListDots}
                iconBgColor={'bg-orange-50'}
                iconTextColor={'text-orange-600'}
                title="Servicios"
                description="Tabla de Referencia Servicios de SISPRO"
                updateDate="2022-09-02"
                numberRegisters="157"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            <Pagination items={filteredServicios} itemsPerPage={itemsPerPage} CardComponent={CardComponent} />
        </>
    )
}

export default Servicios
