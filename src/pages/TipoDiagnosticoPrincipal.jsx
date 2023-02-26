import { faChevronRight, faDisease, faHome } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getTipoDiagnosticoPrincipalVersion2 } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const TipoDiagnosticoPrincipal = () => {

    const [search, setSearch] = useState('')
    const [tipoDiagnosticoPrincipal, setTipoDiagnosticoPrincipal] = useState([])

    useEffect(() => {
        getTipoDiagnosticoPrincipalVersion2()
            .then((data) => {
                setTipoDiagnosticoPrincipal(data)
            }).catch(err => {
                console.error(err);
            });
    }, [search])

    const filteredTipoDiagnosticoPrincipal = tipoDiagnosticoPrincipal.filter(collection => {
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
            label: 'Tipo Diagnóstico Principal',
            icon: faChevronRight
        }
    ]

    return (
        <>
            <Breadcrumbs items={items}/>

            <Header
                icon={faDisease}
                iconBgColor={'bg-violet-50'}
                iconTextColor={'text-violet-600'}
                title="Tipo Diagóstico Principal"
                description="Tabla de Referencia RIPSTipoDiagnosticoPrincipalVersion2 de SISPRO"
                updateDate="2022-06-16"
                numberRegisters="3"
            />

            <SearchBar
                value={search}
                handleChange={handleSearch}
            />

            {filteredTipoDiagnosticoPrincipal.map(collection => (
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

export default TipoDiagnosticoPrincipal
