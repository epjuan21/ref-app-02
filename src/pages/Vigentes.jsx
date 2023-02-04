import React, { useEffect, useState } from 'react'
import { getSocrataData } from '../api'
import MedicamentCard from '../components/MedicamentCard'
import SearchBar from '../components/SearchBar'

const Vigentes = () => {

	const [medicines, setMedicines] = useState([])
	const [search, setSearch] = useState('')

	useEffect(() => {
		getSocrataData('i7cb-raxc', search)
			.then((data) => {
				setMedicines(data)
			})
	}, [search])

	const handleChange = e => {
		setSearch(e.target.value)
		console.log("Busqueda:  ", e.target.value)
	}

	return (
		<div>

			<h2 className='text-base font-semibold mb-5 text-blue-700'>Medicamentos Vigentes</h2>

			<SearchBar
				value={search}
				handleChange={handleChange} />
			<div>
				{medicines.map((medicine, idx) => (
					<MedicamentCard
						key={idx}
						medicament={medicine}
					/>
				))}
			</div>
		</div>
	)
}

export default Vigentes
