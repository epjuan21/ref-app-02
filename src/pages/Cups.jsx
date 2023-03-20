import { faChevronRight, faHome, faList } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getDataFromMongo } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import CupsCard from '../components/CupsCard'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import { useDebounce } from '../hooks/useDebounce'

const Cups = () => {

    const [search, setSearch] = useState('')
    const [cups, setCups] = useState([])
    const searchTerm = useDebounce(search, 1000)

    useEffect(() => {
        getDataFromMongo('searchCups', searchTerm)
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
            label: 'CUPS',
            icon: faChevronRight
        }
    ]

    return (
        <>
            <Breadcrumbs items={items} />

            <Header
                icon={faList}
                iconBgColor={'bg-blue-50'}
                iconTextColor={'text-blue-600'}
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
