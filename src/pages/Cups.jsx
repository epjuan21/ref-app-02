import { faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getCups } from '../api'
import CupsCard from '../components/CupsCard'
import Header from '../components/Header'
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
        <>
            <Header
                icon={faList}
                title="CUPS"
                description="Tabla de Referencia CUPSRips de SISPRO"
                updateDate="2023-02-04"
                numberRegisters="12950"
            />

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
        </>
    )
}

export default Cups
