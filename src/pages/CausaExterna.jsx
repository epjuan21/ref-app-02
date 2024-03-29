import { faChevronRight, faFileMedical, faHome } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getDataFromMongo } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const CausaExterna = () => {

    const [search, setSearch] = useState('')
    const [causaExterna, setCausaExterna] = useState([])

    useEffect(() => {
        getDataFromMongo('causaexterna')
            .then((data) => {
                setCausaExterna(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredCausaExterna = causaExterna.filter(collection => {
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
            label: 'Causa Externa',
            icon: faChevronRight,
        }
    ]

    return (
        <>
            <Breadcrumbs items={items} />

            <Header
                icon={faFileMedical}
                iconBgColor={'bg-cyan-50'}
                iconTextColor={'text-cyan-600'}
                title="Causa Externa"
                description="Tabla de Referencia RIPSCausaExterna de SISPRO"
                updateDate="2022-06-06"
                numberRegisters="28"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            <table className='w-full text-sm text-left text-gray-500'>
                <thead className='text-xs text-gray-700 bg-gray-50'>
                    <tr>
                        <th scope="col" className="px-6 py-3">Código</th>
                        <th scope="col" className='px-6 py-3'>Nombre</th>
                        <th scope="col" className='px-6 py-3'>Fecha Actualización</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCausaExterna.map(collection => (
                        <tr className='bg-white border-b' key={collection._id}>
                            <th scope="row" className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>{collection.Codigo}</th>
                            <td className='px-6 py-4'>{collection.Nombre}</td>
                            <td className='px-6 py-4'>{collection.FechaActualizacion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default CausaExterna
