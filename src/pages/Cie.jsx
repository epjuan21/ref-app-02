import { faVirus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCie } from '../api'
import CieCard from '../components/CieCard'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import { useDebounce } from '../hooks/useDebounce'

const Cie = () => {

    const [search, setSearch] = useState('')
    const [cies, setCies] = useState([])
    const searchTerm = useDebounce(search, 1000)

    useEffect(() => {
        getCie(searchTerm)
            .then((data) => {
                setCies(data)
            }).catch(err => {
                console.error(err);
            });
    }, [searchTerm])

    const handleChange = e => {
        setSearch(e.target.value)
    }

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
                            <span className="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400 ">CIE10</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <Header
                icon={faVirus}
                iconBgColor={'bg-green-50'}
                iconTextColor={'text-green-600'}
                title="CIE-10"
                description="Tabla de Referencia CIE10 de SISPRO"
                updateDate="2023-02-04"
                numberRegisters="12634"
            />

            <SearchBar
                value={search}
                handleChange={handleChange}
            />
            <div>
                {cies.map((cie, _id) => (
                    <CieCard
                        key={_id}
                        cie={cie}
                    />
                ))}
            </div>
        </>
    )
}

export default Cie
