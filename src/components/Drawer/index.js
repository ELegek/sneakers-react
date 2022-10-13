import React from 'react';
import { FaTimes, FaArrowRight } from 'react-icons/fa';
import styles from './Drawer.module.scss';

function Drawer({ onRemove, onClose, items = [] }) {
	return (
		<div className={styles.overlay}>
			<div className={styles.drawer}>
				<div className={styles.drawerHeader}>
					<h2>Корзина</h2>
					<button onClick={onClose} className={styles.btnRemove}>
						<FaTimes className={styles.removeIcon} />
					</button>
				</div>

				<div className={styles.items}>
					{items.map((obj) => (
						<div className={styles.cartItem}>
							<div>
								<img src={obj.imageUrl} alt='' />
							</div>

							<div>
								<p>{obj.title}</p>
								<b>{obj.price} руб.</b>
							</div>
							<button
								onClick={() => onRemove(obj.id)}
								className={styles.btnRemove}>
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
							<b>21 498 руб.</b>
						</li>
						<li className={styles.cartBotom}>
							<span>Налог 5%: </span>
							<div></div>
							<b>1074 руб.</b>
						</li>
					</ul>
					<button className={styles.greenBtn}>
						Оформить заказ{' '}
						<FaArrowRight className={styles.arrowRightIcon} />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Drawer;
