import React, { useEffect, useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [searchValue, setSearchValue] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		// Получение карточек товара с сервера
		axios
			.get('https://6342ac4c3f83935a78472565.mockapi.io/items')
			.then((res) => {
				setItems(res.data);
			});
		// Получение пустого массива корзины с сервера
		axios
			.get('https://6342ac4c3f83935a78472565.mockapi.io/cart')
			.then((res) => {
				setCartItems(res.data);
			});
	}, []);

	// Добавление товаров в корзину на сервере и в реакте
	const onAddToCart = (obj) => {
		// Сохранение товара на сервере
		axios.post(
			'https://6342ac4c3f83935a78472565.mockapi.io/cart',
			obj,
		);
		// Добавление объекта в массив cartItems
		setCartItems((prev) => [...prev, obj]);
	};

	// Удаление товара из корзины из сервера и из реакта
	const onRemoveItem = (id) => {
		axios.delete(
			`https://6342ac4c3f83935a78472565.mockapi.io/cart/${id}`,
		);
		setCartItems((prev) => prev.filter((item) => item.id !== id));
	};

	// Добавление товаров в избранное
	const onAddToFavorite = (obj) => {
		// Сохранение товара на сервере
		axios.post(
			'https://6342ac4c3f83935a78472565.mockapi.io/favorites',
			obj,
		);
		// Добавление объекта в массив favorites
		setFavorites((prev) => [...prev, obj]);
	};

	// Удаление товара из корзины из сервера и из реакта
	const onRemoveFavorite = (id) => {
		axios.delete(
			`https://6342ac4c3f83935a78472565.mockapi.io/favorite/${id}`,
		);
		setFavorites((prev) => prev.filter((item) => item.id !== id));
	};

	// Поиск товара
	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<div className='wrapper clear'>
			{cartOpened && (
				<Drawer
					items={cartItems}
					onClose={() => setCartOpened(false)}
					onRemove={onRemoveItem}
				/>
			)}

			<Header onClickCart={() => setCartOpened(true)} />

			<div className='content p-40'>
				<div className='d-flex align-center mb-40 justify-between'>
					<h1>
						{searchValue
							? `Поиск по закпросу: "${searchValue}"`
							: `Все кросовки`}
					</h1>
					<div className='search-block'>
						<FaSearch className='search-icon' />
						{searchValue && (
							<FaTimes
								onClick={() => setSearchValue('')}
								className='clear remove-icon'
							/>
						)}
						<input
							onChange={onChangeSearchInput}
							placeholder='Поиск...'
							value={searchValue}
						/>
					</div>
				</div>

				<div className='content-wrapper'>
					{items
						.filter((item) =>
							item.title.toLowerCase().includes(searchValue),
						)
						.map((item, index) => (
							<Card
								key={index}
								title={item.title}
								price={item.price}
								imageUrl={item.imageUrl}
								onPlus={(obj) => onAddToCart(obj)}
								onFavorite={(obj) => onAddToFavorite(obj)}
								removeFavorite={onRemoveFavorite}
							/>
						))}
				</div>
			</div>
		</div>
	);
}

export default App;
