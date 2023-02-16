import { faBuildingUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getEapb } from '../api'
import SearchBar from '../components/SearchBar'
import { useDebounce } from '../hooks/useDebounce'

const Eapb = () => {

    const [search, setSearch] = useState('')
    const [eapb, setEapb] = useState([])
    const searchTerm = useDebounce(search, 1000)

    useEffect(() => {
        getEapb(searchTerm)
            .then((data) => {
                setEapb(data)
            }).catch(err => {
                console.error(err);
            });
    }, [searchTerm])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <div className='mb-6 flex items-center'>
                <div className={`py-3 px-3 mr-4 bg-yellow-100 text-yellow-600 rounded-md`}>
                    <FontAwesomeIcon icon={faBuildingUser} size="xl" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-slate-800'>EAPB</h1>
                    <span className='text-sm font-medium text-slate-500'>Tabla de Referencia CodigoEAPByNit de SISPRO</span>
                </div>
            </div>

            <SearchBar
                value={search}
                handleChange={handleChange}
            />

            

        </div>
    )
}

export default Eapb
