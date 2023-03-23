import { faChevronRight, faHome, faVirus } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getDataFromMongo } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import CieCard from '../components/CieCard'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import SearchBar from '../components/SearchBar'
import { useDebounce } from '../hooks/useDebounce'

const Cie = () => {

    const [search, setSearch] = useState('')
    const [cies, setCies] = useState([])
    const searchTerm = useDebounce(search, 1000)
    const itemsPerPage = 10;

    useEffect(() => {
        getDataFromMongo('searchCie', searchTerm)
            .then((data) => {
                setCies(data)
            }).catch(err => {
                console.error(err);
            });
    }, [searchTerm])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const items = [
        {
            label: 'Inicio',
            to: '/',
            icon: faHome
        },
        {
            label: 'CIE10',
            icon: faChevronRight
        }
    ]

    return (
        <>
            <Breadcrumbs items={items}/>

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

            <Pagination items={cies} itemsPerPage={itemsPerPage} CardComponent={CieCard} />
        </>
    )
}

export default Cie
