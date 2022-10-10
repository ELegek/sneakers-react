import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [searchValue, setSearchValue] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		fetch('https://6342ac4c3f83935a78472565.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setItems(json);
			});
	}, []);

	const onAddToCart = (obj) => {
		setCartItems((prev) => [...prev, obj]);
	};

	const onChangeSearchInput = (event) => {
		setSearchValue();
	};

	return (
		<div className='wrapper clear'>
			{cartOpened && (
				<Drawer
					items={cartItems}
					onClose={() => setCartOpened(false)}
				/>
			)}

			<Header onClickCart={() => setCartOpened(true)} />

			<div className='content p-40'>
				<div className='d-flex align-center mb-40 justify-between'>
					<h1>Все кроссовки</h1>
					<div className='search-block'>
						<FaSearch className='search-icon' />
						<input placeholder='Поиск...' />
					</div>
				</div>

				<div className='content-wrapper'>
					{items.map((item, index) => (
						<Card
							key={index}
							title={item.title}
							price={item.price}
							imageUrl={item.imageUrl}
							onPlus={(obj) => onAddToCart(obj)}
							onFavorite={() => console.log('нажали на favorite')}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
