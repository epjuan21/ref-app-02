import React, { useEffect, useState } from 'react'
import { getSocrataData } from '../api'
import MedicamentCard from '../components/MedicamentCard'
import SearchBar from '../components/SearchBar'
import { useDebounce } from '../hooks/useDebounce'
import { v4 as uuidv4 } from 'uuid';
import Pagination from '../components/Pagination'

const Vencidos = () => {

    const [medicines, setMedicines] = useState([])
    const [search, setSearch] = useState('')
    const searchTerm = useDebounce(search, 1000)
    const itemsPerPage = 10;

    useEffect(() => {
        getSocrataData('vwwf-4ftk', searchTerm)
            .then((data) => {
                setMedicines(data)
            })
    }, [searchTerm])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    medicines.forEach(objeto => {
        objeto._id = uuidv4();
    });

    return (
        <>
            <h2 className='text-base font-semibold mb-5 text-blue-700'>Medicamentos Vencidos</h2>
            <SearchBar
                value={search}
                handleChange={handleChange}
            />

            <Pagination items={medicines} itemsPerPage={itemsPerPage} CardComponent={MedicamentCard} />
        </>
    )
}

export default Vencidos
