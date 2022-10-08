import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [
	{
		id: 1,
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 12999,
		imageUrl: '/img/sneakers/sneakers-1.png',
	},
	{
		id: 2,
		title: 'Мужские Кроссовки Nike Air Max 270',
		price: 13999,
		imageUrl: '/img/sneakers/sneakers-2.png',
	},
	{
		id: 3,
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 15999,
		imageUrl: '/img/sneakers/sneakers-3.png',
	},
	{
		id: 4,
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 17999,
		imageUrl: '/img/sneakers/sneakers-4.png',
	},
];

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
					{arr.map((obj) => (
						<Card key={obj.id} title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
