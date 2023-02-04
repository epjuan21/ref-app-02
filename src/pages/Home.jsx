import React, { useState } from 'react'
import ListItems from '../components/ListItems';
import list from '../lists';
import SearchBar from '../components/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

	const [searchTerm, setSearchTerm] = useState('');

	const filteredItems = list.filter(item => {
		return item.title.toLowerCase().includes(searchTerm.toLowerCase());
	});

	return (
		<>
			<div className='mb-6 flex items-center'>
				<div className={`py-3 px-3 mr-4 bg-slate-100 text-slate-600 rounded-md`}>
					<FontAwesomeIcon icon={faHome} size="xl" />
				</div>
				<div>
					<h1 className='text-xl font-semibold text-slate-800'>Inicio</h1>
					<span className='text-sm font-medium text-slate-500'>Buscador Tablas de Referencias</span>
				</div>
			</div>

			<div className='mb-10'>
				<h1 className="text-2xl font-semibold">Inicio</h1>
			</div>

			<SearchBar
				value={searchTerm}
				handleChange={e => setSearchTerm(e.target.value)}
			/>

			{filteredItems?.map(item => (
				<ListItems
					key={item.title}
					title={item.title}
					description={item.description}
					icon={item.icon}
					bgColor={item.bgColor}
					textColor={item.textColor}
					applications={item.applications}
					link={item.link}
				/>
			))}


		</>
	)
}

export default Home
