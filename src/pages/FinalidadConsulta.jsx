import { faBookMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFinalidadConsultaVersion2 } from '../api'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const FinalidadConsulta = () => {

    const [search, setSearch] = useState('')
    const [finalidadConsulta, setFinalidadConsulta] = useState([])

    useEffect(() => {
        getFinalidadConsultaVersion2()
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

    return (
        <>
            <nav className="flex mb-6" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <span className="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400 ">Finalidad Consulta</span>
                        </div>
                    </li>
                </ol>
            </nav>

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

export default FinalidadConsulta
