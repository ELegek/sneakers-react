import React from 'react';
import { FaTimes, FaArrowRight } from 'react-icons/fa';
import styles from './Drawer.module.scss';

function Drawer() {
	return (
		<div className={styles.overlay}>
			<div className={styles.drawer}>
				<div className={styles.drawerHeader}>
					<h2>Корзина</h2>
					<button className={styles.btnRemove}>
						<FaTimes className='remove-icon' />
					</button>
				</div>

				<div className={styles.items}>
					<div className={styles.cartItem}>
						<div>
							<img src='/img/sneakers/sneakers-1.png' alt='' />
						</div>

						<div>
							<p>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<button className={styles.btnRemove}>
							<FaTimes className='remove-icon' />
						</button>
					</div>
				</div>
				<div className={styles.cartTotalBlock}>
					<ul>
						<li className={styles.cartBotom}>
							<span>Итого</span>
							<div></div>
							<b>21 498 руб.</b>
						</li>
						<li className={styles.cartBotom}>
							<span>Налог 5%: </span>
							<div></div>
							<b>1074 руб.</b>
						</li>
					</ul>
					<button className={styles.greenBtn}>
						Оформить заказ <FaArrowRight className='arrowRight-icon' />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Drawer;