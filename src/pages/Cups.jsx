import { faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getCups } from '../api'
import CupsCard from '../components/CupsCard'
import SearchBar from '../components/SearchBar'
import { useDebounce } from '../hooks/useDebounce'

const Cups = () => {

    const [search, setSearch] = useState('')
    const [cups, setCups] = useState([])
    const searchTerm = useDebounce(search, 1000)

    useEffect(() => {
        getCups(searchTerm)
            .then((data) => {
                setCups(data)
            })
    }, [searchTerm])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    return (
        <div>

            <div className='mb-6 flex items-center'>
                <div className={`py-3 px-3 mr-4 bg-yellow-100 text-yellow-600 rounded-md`}>
                    <FontAwesomeIcon icon={faList} size="xl" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-slate-800'>CUPS</h1>
                    <span className='text-sm font-medium text-slate-500'>Tabla de Referencia CUPSRips de SISPRO</span>
                </div>
            </div>
            
            <SearchBar
                value={search}
                handleChange={handleChange}
            />
            <div>
                {cups.map((cup, _id) => (
                    <CupsCard
                        key={_id}
                        cup={cup}
                    />
                ))}
            </div>
        </div>
    )
}

export default Cups
