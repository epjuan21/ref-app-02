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
        getDataFromMongo('causaexternaversion2')
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
                description="Tabla de Referencia RIPSCausaExternaVersion2 de SISPRO"
                updateDate="2022-06-06"
                numberRegisters="28"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredCausaExterna.map(collection => (
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
                            <p className='text-xs'>Urgencias: <span>{collection["Extra_III:Urgencias"]}</span></p>
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

export default CausaExterna
