import React, { createContext, useEffect, useState } from 'react';

// Библиотеки
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

// Компоненты
import Drawer from './components/Drawer';
import Header from './components/Header';

// Страницы
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

// Контекст
import AppContext from './context';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [searchValue, setSearchValue] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				// Получение пустого массива корзины с сервера
				const cartResponce = await axios.get(
					'https://6342ac4c3f83935a78472565.mockapi.io/cart',
				);

				// Получение пустого массима для избранных карточек товара с сервера
				const favoritesResponce = await axios.get(
					'https://6342ac4c3f83935a78472565.mockapi.io/favorites',
				);

				// Получение  карточек товара с сервера
				const itemsResponce = await axios.get(
					'https://6342ac4c3f83935a78472565.mockapi.io/items',
				);

				setIsLoading(false);
				setItems(itemsResponce.data);
				setCartItems(cartResponce.data);
				setFavorites(favoritesResponce.data);
			} catch (error) {
				alert('Ошибка при запросе данных с сервера :(');
			}
		}

		fetchData();
	}, []);

	// Добавление товаров в корзину на сервере и в реакте
	const onAddToCart = async (obj) => {
		try {
			// Проверка на добавление товара при повторном нажатии на кнопку плюс
			const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
			if (findItem) {
				setCartItems((prev) =>
					prev.filter((item) => Number(item.parentId) !== Number(obj.id)),
				);
				await axios.delete(
					`https://6342ac4c3f83935a78472565.mockapi.io/cart/${findItem.id}`,
				);
			} else {
				// Добавление объекта в массив cartItems
				setCartItems((prev) => [...prev, obj]);
				// Сохранение товара на сервере
				const { data } = await axios.post(
					'https://6342ac4c3f83935a78472565.mockapi.io/cart',
					obj,
				);
				setCartItems((prev) =>
					prev.map((item) => {
						if (item.parentId === data.parentId) {
							return {
								...item,
								id: data.id,
							};
						}
						return item;
					}),
				);
			}
		} catch (error) {
			alert('Ошибка при добавлении в корзину');
			console.error(error);
		}
	};

	// Удаление товара из корзины из сервера и из реакта
	const onRemoveItem = (id) => {
		try {
			axios.delete(`https://6342ac4c3f83935a78472565.mockapi.io/cart/${id}`);
			setCartItems((prev) => prev.filter((item) => item.id !== id));
		} catch (error) {
			alert('Ошибка при удалении из корзины');
			console.error(error);
		}
	};

	// Добавление товаров в избранное
	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
				axios.delete(`https://6342ac4c3f83935a78472565.mockapi.io/favorites/${obj.id}`);
				setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
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

	// Удаление товара со страницы избранное
	const onRemoveFavorite = (id) => {
		try {
			axios.delete(`https://6342ac4c3f83935a78472565.mockapi.io/favorite/${id}`);
			setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
		} catch (error) {
			alert('Не удалось удалить товар со страницы избранное');
		}
	};

	// Поиск товара
	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	};

	const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.parentId) === Number(id));
	};

	return (
		<AppContext.Provider
			value={{
				items,
				cartItems,
				favorites,
				isItemAdded,
				onAddToFavorite,
				onAddToCart,
				setCartOpened,
				setCartItems,
			}}>
			<div className='wrapper clear'>
				<Drawer
					items={cartItems}
					onClose={() => setCartOpened(false)}
					onRemove={onRemoveItem}
					opened={cartOpened}
				/>

				<Header onClickCart={() => setCartOpened(true)} />
				<Routes>
					<Route
						path='/'
						exact
						element={
							<Home
								items={items}
								cartItems={cartItems}
								searchValue={searchValue}
								setSearchValue={setSearchValue}
								onChangeSearchInput={onChangeSearchInput}
								onAddToFavorite={onAddToFavorite}
								onRemoveFavorite={onRemoveFavorite}
								onAddToCart={onAddToCart}
								isLoading={isLoading}
							/>
						}
					/>

					<Route path='/favorites' exact element={<Favorites />} />
					<Route path='/orders' exact element={<Orders />} />
				</Routes>
			</div>
		</AppContext.Provider>
	);
}

export default App;
