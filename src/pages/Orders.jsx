import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../context';
import Card from '../components/Card';

function Orders() {
	const { onAddToCart, onAddToFavorite } = React.useContext(AppContext);
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get(
					'https://6342ac4c3f83935a78472565.mockapi.io/orders',
				);
				// console.log(data.map((obj) => obj.items).flat());
				setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
				setIsLoading(false);
			} catch (error) {
				alert('Ошибка при закпросе заказов');
			}
		})();
	}, []);
	return (
		<div className='content p-40'>
			<div className='d-flex align-center mb-40 justify-between'>
				<h1>Мои заказы</h1>
			</div>

			<div className='content-wrapper'>
				{(isLoading ? [...Array(4)] : orders).map((item, index) => (
					<Card key={index} loading={isLoading} {...item} />
				))}
			</div>
		</div>
	);
}

export default Orders;
