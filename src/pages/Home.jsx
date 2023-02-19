import React, { useState } from 'react'
import ListItems from '../components/ListItems';
import list from '../lists';
import SearchBar from '../components/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

const Home = () => {

	const [searchTerm, setSearchTerm] = useState('');

	const filteredItems = list.filter(item => {
		return item.title.toLowerCase().includes(searchTerm.toLowerCase());
	});

	return (
		<>
			<Header
				icon={faHome}
				title="Inicio"
				description="Buscador Tablas de Referencias"
			/>

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
