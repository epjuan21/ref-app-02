import { faArrowCircleRight, faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getViaIngreso } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const ViaIngreso = () => {

    const [search, setSearch] = useState('')
    const [via, setVia] = useState([])

    useEffect(() => {
        getViaIngreso()
            .then((data) => {
                setVia(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredViaIngreso = via.filter(collection => {
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
            label: 'Via Ingreso',
            icon: faChevronRight
        }
    ]

    return (
        <>
            <Breadcrumbs items={items} />

            <Header
                icon={faArrowCircleRight}
                iconBgColor={'bg-stone-50'}
                iconTextColor={'text-stone-600'}
                title="Via Ingreso Usuario"
                description="Tabla de Referencia ViaIngresoUsuario de SISPRO"
                updateDate="2022-06-16"
                numberRegisters="14"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredViaIngreso.map(collection => (
                <div
                    className='flex justify-between items-center border rounded bg-white border-indigo-200 mt-2 py-1 px-4'
                    key={collection._id}
                >
                    <div className='flex py-2'>
                        <div className='mr-2 font-semibold'>{collection.Codigo}</div>
                        <div>{collection.Nombre}</div>
                    </div>
                    <div>
                        <div>
                            <p className='text-xs'>Procedimientos: <span>{collection["Extra_II:Procedimientos"]}</span></p>
                        </div>
                        <div>
                            <p className='text-xs'>Hospitalización: <span>{collection["Extra_IV:Hospitalizacion"]}</span></p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ViaIngreso
