import React from 'react';
import Card from '../components/Card';
import { FaSearch, FaTimes } from 'react-icons/fa';

function Home({
	items,
	cartItems,
	searchValue,
	setSearchValue,
	onChangeSearchInput,
	onAddToFavorite,
	onRemoveFavorite,
	onAddToCart,
	isLoading,
}) {
	const renderItems = () => {
		return (
			isLoading
				? [...Array(10)]
				: items.filter((item) => item.title.toLowerCase().includes(searchValue))
		).map((item, index) => (
			<Card
				key={index}
				onPlus={(obj) => onAddToCart(obj)}
				onFavorite={(obj) => onAddToFavorite(obj)}
				added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
				loading={isLoading}
				{...item}
			/>
		));
	};
	return (
		<div className='content p-40'>
			<div className='d-flex align-center mb-40 justify-between'>
				<h1>{searchValue ? `Поиск по закпросу: "${searchValue}"` : `Все кросовки`}</h1>
				<div className='search-block'>
					<FaSearch className='search-icon' />
					{searchValue && (
						<FaTimes onClick={() => setSearchValue('')} className='clear remove-icon' />
					)}
					<input
						onChange={onChangeSearchInput}
						placeholder='Поиск...'
						value={searchValue}
					/>
				</div>
			</div>

			<div className='content-wrapper'>{renderItems()}</div>
		</div>
	);
}

export default Home;
