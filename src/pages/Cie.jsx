import { faVirus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
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
            <Header
                icon={faVirus}
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
