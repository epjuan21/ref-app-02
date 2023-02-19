import { faBuildingUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { getEapb } from '../api'
import EapbCard from '../components/EapbCard'
import PaginateComponent from '../components/PaginateComponent'
import Pagination from '../components/Pagination'
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
        <div>
            <div className='mb-6 flex items-center border-b pb-4'>
                <div className={`py-3 px-3 mr-4 bg-yellow-100 text-yellow-600 rounded-md`}>
                    <FontAwesomeIcon icon={faBuildingUser} size="xl" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-slate-800'>EAPB</h1>
                    <span className='text-sm font-medium text-slate-500'>Tabla de Referencia CodigoEAPByNit de SISPRO</span>
                </div>
            </div>

            <div className='flex justify-between mb-6 border border-slate-200 p-4 rounded-md bg-slate-100'>
                <p className='text-sm font-semibold text-slate-600'>Fecha Actualización: <span>2022-08-02</span></p>
                <p className='text-sm font-semibold text-slate-600'>Total Registros: <span>1690</span></p>
            </div>

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

        </div>
    )
}

export default Eapb
