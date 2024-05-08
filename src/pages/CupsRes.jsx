import { faChevronRight, faHome, faList } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getDataFromMongo } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import CupsResCard from '../components/CupsResCard'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import SearchBar from '../components/SearchBar'
import { useDebounce } from '../hooks/useDebounce'

const CupsRes = () => {

    const [search, setSearch] = useState('')
    const [cups, setCups] = useState([])
    const searchTerm = useDebounce(search, 1000)
    const itemsPerPage = 10;

    useEffect(() => {
        getDataFromMongo('getcupsres', searchTerm)
            .then((data) => {
                setCups(data)
            })
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
            label: 'CUPSRes',
            icon: faChevronRight
        }
    ]

    return (
        <>
            <Breadcrumbs items={items} />

            <Header
                icon={faList}
                iconBgColor={'bg-purple-50'}
                iconTextColor={'text-purple-600'}
                title="CUPS Resolución 2236"
                description="CUPS Resolución 2236 de 2023"
                updateDate="2023-12-29"
                numberRegisters="10079"
            />

            <SearchBar
                value={search}
                handleChange={handleChange}
            />

            <Pagination items={cups} itemsPerPage={itemsPerPage} CardComponent={CupsResCard} />
        </>
    )
}

export default CupsRes
