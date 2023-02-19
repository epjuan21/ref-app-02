import { faBuildingUser } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { getEapb } from '../api'
import EapbCard from '../components/EapbCard'
import Header from '../components/Header'
import PaginateComponent from '../components/PaginateComponent'
import SearchBar from '../components/SearchBar'
import { useDebounce } from '../hooks/useDebounce'
import { usePagination } from '../hooks/usePagination'

const Eapb = () => {

    const [eapb, setEapb] = useState([])
    const [search, setSearch] = useState('')
    const searchTerm = useDebounce(search, 1000)
    const { currentItems, totalPages, handlePageClick } = usePagination(eapb, 20);

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
        <>
            <Header
                icon={faBuildingUser}
                title="EAPB"
                description="Tabla de Referencia CodigoEAPByNit de SISPROO"
                updateDate="2022-08-02"
                numberRegisters="1690"
            />

            <SearchBar
                value={search}
                handleChange={handleChange}
            />

            {
                currentItems.map(page => (
                    <EapbCard
                        key={page._id}
                        eapb={page}
                    />
                ))
            }

            <PaginateComponent totalPages={totalPages} handlePageClick={handlePageClick} />
        </>
    )
}

export default Eapb
