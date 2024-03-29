import { faBookMedical, faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getDataFromMongo } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const FinalidadConsulta = () => {

    const [search, setSearch] = useState('')
    const [finalidadConsulta, setFinalidadConsulta] = useState([])

    useEffect(() => {
        getDataFromMongo('finalidadconsulta')
            .then((data) => {
                setFinalidadConsulta(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredFinalidadConsulta = finalidadConsulta.filter(collection => {
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
            label: 'Finalidad Consulta',
            icon: faChevronRight
        }
    ]

    return (
        <>
            <Breadcrumbs items={items} />

            <Header
                icon={faBookMedical}
                iconBgColor={'bg-sky-50'}
                iconTextColor={'text-sky-600'}
                title="Finalidad Consulta"
                description="Tabla de Referencia RIPSFinalidadConsulta de SISPRO"
                updateDate="2022-10-3"
                numberRegisters="34"
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
                    {filteredFinalidadConsulta.map(collection => (
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

export default FinalidadConsulta
