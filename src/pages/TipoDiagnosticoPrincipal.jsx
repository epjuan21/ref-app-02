import { faDisease } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getTipoDiagnosticoPrincipalVersion2 } from '../api'
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

    return (
        <div>
            <div className='mb-6 flex items-center'>
                <div className={`py-3 px-3 mr-4 bg-yellow-100 text-yellow-600 rounded-md`}>
                    <FontAwesomeIcon icon={faDisease} size="xl" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-slate-800'>Tipo Diagóstico Principal</h1>
                    <span className='text-sm font-medium text-slate-500'>Tabla de Referencia RIPSTipoDiagnosticoPrincipalVersion2 de SISPRO</span>
                </div>
            </div>

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
        </div>
    )
}

export default TipoDiagnosticoPrincipal
