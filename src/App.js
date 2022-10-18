import React, { useEffect, useState } from 'react';

// Библиотеки
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

// Компоненты
import Drawer from './components/Drawer';
import Header from './components/Header';

// Страницы
import Home from './pages/Home';
import Favorites from './pages/Favorites';

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
		// Получение избранных карточек товара с сервера
		axios
			.get('https://6342ac4c3f83935a78472565.mockapi.io/favorites')
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
	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find((favObj) => favObj.id === obj.id)) {
				axios.delete(
					`https://6342ac4c3f83935a78472565.mockapi.io/favorites/${obj.id}`,
				);
				setFavorites((prev) =>
					prev.filter((item) => item.id !== obj.id),
				);
			} else {
				// Сохранение товара на сервере
				const { data } = await axios.post(
					'https://6342ac4c3f83935a78472565.mockapi.io/favorites',
					obj,
				);

				// Добавление объекта в массив favorites
				setFavorites((prev) => [...prev, data]);
			}
		} catch (error) {
			alert('Не удалось добавить в фавориты');
		}
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
			<Routes>
				<Route
					path='/'
					exact
					element={
						<Home
							items={items}
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							onChangeSearchInput={onChangeSearchInput}
							onAddToFavorite={onAddToFavorite}
							onRemoveFavorite={onRemoveFavorite}
							onAddToCart={onAddToCart}
						/>
					}
				/>

				<Route
					path='/favorites'
					exact
					element={
						<Favorites
							items={favorites}
							onAddToFavorite={onAddToFavorite}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
