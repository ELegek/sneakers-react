import React from 'react';
import axios from 'axios';
import { FaTimes, FaArrowRight } from 'react-icons/fa';
import styles from './Drawer.module.scss';
import Info from '../Info';
import AppContext from '../../context';

function Drawer({ onRemove, onClose, items = [] }) {
	const { cartItems, setCartItems } = React.useContext(AppContext);
	const [orderId, setOrderId] = React.useState(null);
	const [isOrderComplete, setIsOrderComplete] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);
	const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

	const onClickOrder = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.post(
				'https://6342ac4c3f83935a78472565.mockapi.io/orders',
				{ items: cartItems },
			);
			await axios.put('https://6342ac4c3f83935a78472565.mockapi.io/cart', []);
			setOrderId(data.id);
			setIsOrderComplete(true);
			setCartItems([]);
		} catch (error) {
			alert('Не удалось создать заказ :(');
		}
		setIsLoading(false);
	};
	return (
		<div className={styles.overlay}>
			<div className={styles.drawer}>
				<div className={styles.drawerHeader}>
					<h2>Корзина</h2>
					<button onClick={onClose} className={styles.btnRemove}>
						<FaTimes className={styles.removeIcon} />
					</button>
				</div>

				{items.length > 0 ? (
					<div className='d-flex flex-column flex'>
						<div className={styles.items}>
							{items.map((obj) => (
								<div key={obj.id} className={styles.cartItem}>
									<div>
										<img src={obj.imageUrl} alt='' />
									</div>

									<div>
										<p>{obj.title}</p>
										<b>{obj.price} руб.</b>
									</div>
									<button onClick={() => onRemove(obj.id)} className={styles.btnRemove}>
										<FaTimes className={styles.removeIcon} />
									</button>
								</div>
							))}
						</div>

						<div className={styles.cartTotalBlock}>
							<ul>
								<li className={styles.cartBotom}>
									<span>Итого</span>
									<div></div>
									<b>{totalPrice} руб.</b>
								</li>
								<li className={styles.cartBotom}>
									<span>Налог 5%: </span>
									<div></div>
									<b>{Math.round(totalPrice * 0.05)} руб.</b>
								</li>
							</ul>
							<button
								disabled={isLoading}
								onClick={onClickOrder}
								className={styles.greenBtn}>
								Оформить заказ <FaArrowRight className={styles.arrowRightIcon} />
							</button>
						</div>
					</div>
				) : (
					<Info
						title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
						image={isOrderComplete ? '/img/complete-order.jpg' : '/img/empty-cart.jpg'}
						description={
							isOrderComplete
								? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
								: 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
						}
					/>
				)}
			</div>
		</div>
	);
}

export default Drawer;
