import { faBookMedical, faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getDataFromMongo } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const FinalidadConsultaV2 = () => {

    const [search, setSearch] = useState('')
    const [finalidadConsulta, setFinalidadConsulta] = useState([])

    useEffect(() => {
        getDataFromMongo('finalidadconsultaversion2')
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
                description="Tabla de Referencia RIPSFinalidadConsultaVersion2 de SISPRO"
                updateDate="2022-10-3"
                numberRegisters="34"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredFinalidadConsulta.map(collection => (
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
                            <p className='text-xs'>Consultas: <span>{collection["Extra_I:Consultas"]}</span></p>
                        </div>
                        <div>
                            <p className='text-xs'>Procedimientos: <span>{collection["Extra_II:Procedimientos"]}</span></p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default FinalidadConsultaV2
