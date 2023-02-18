import { faVirus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getCie } from '../api'
import CieCard from '../components/CieCard'
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
        <div>

            <div className='mb-6 flex items-center border-b pb-4'>
                <div className={`py-3 px-3 mr-4 bg-yellow-100 text-yellow-600 rounded-md`}>
                    <FontAwesomeIcon icon={faVirus} size="xl" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-slate-800'>CIE-10</h1>
                    <span className='text-sm font-medium text-slate-500'>Tabla de Referencia CIE10 de SISPRO</span>
                </div>
            </div>

            <div className='flex justify-between mb-6 border border-slate-200 p-4 rounded-md bg-slate-100'>
                <p className='text-sm font-semibold text-slate-600'>Fecha Actualización: <span>2023-02-04</span></p>
                <p className='text-sm font-semibold text-slate-600'>Total Registros: <span>12634</span></p>
            </div>

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
        </div>
    )
}

export default Cie
