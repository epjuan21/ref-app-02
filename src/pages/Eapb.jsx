import { faBuildingUser, faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getDataFromMongo } from '../api'
import Breadcrumbs from '../components/Breadcrumbs'
import EapbCard from '../components/EapbCard'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import SearchBar from '../components/SearchBar'
import { useDebounce } from '../hooks/useDebounce'

const Eapb = () => {

    const [eapb, setEapb] = useState([])
    const [search, setSearch] = useState('')
    const searchTerm = useDebounce(search, 1000)
    const itemsPerPage = 10;

    useEffect(() => {
        getDataFromMongo('eapb', searchTerm)
            .then((data) => {
                setEapb(data)
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
            label: 'EAPB',
            icon: faChevronRight
        }
    ]

    return (
        <>
            <Breadcrumbs items={items} />

            <Header
                icon={faBuildingUser}
                iconBgColor={'bg-emerald-50'}
                iconTextColor={'text-emerald-600'}
                title="EAPB"
                description="Tabla de Referencia CodigoEAPByNit de SISPRO"
                updateDate="2022-08-02"
                numberRegisters="1690"
            />

            <SearchBar
                value={search}
                handleChange={handleChange}
            />

            <Pagination items={eapb} itemsPerPage={itemsPerPage} CardComponent={EapbCard} />

        </>
    )
}

export default Eapb
