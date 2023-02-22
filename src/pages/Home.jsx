import React, { useState } from 'react'
import ListItems from '../components/ListItems';
import list from '../lists';
import SearchBar from '../components/SearchBar';
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

			<SearchBar
				value={searchTerm}
				handleChange={e => setSearchTerm(e.target.value)}
			/>

			<div className='grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-0'>
				{filteredItems?.map(item => (
					<ListItems
						key={item.title}
						title={item.title}
						description={item.description}
						icon={item.icon}
						iconBgColor={item.iconBgColor}
						iconTextColor={item.iconTextColor}
						bgColor={item.bgColor}
						textColor={item.textColor}
						applications={item.applications}
						link={item.link}
					/>
				))}
			</div>
		</>
	)
}

export default Home
