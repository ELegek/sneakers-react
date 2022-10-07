import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
	return (
		<div className='wrapper clear'>
			<Drawer />
			<Header />

			<div className='content p-40'>
				<div className='d-flex align-center mb-40 justify-between'>
					<h1 className=''>Все кроссовки</h1>
					<div className='search-block'>
						<FaSearch className='search-icon' />
						<input placeholder='Поиск...' />
					</div>
				</div>

				<div className='content-wrapper'>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}

export default App;
