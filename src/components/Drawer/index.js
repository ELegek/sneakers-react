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

				{items.length > 0 ? (
					<div>
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
				) : (
					<div className='cartEmpty d-flex align-center justify-center flex-column flex'>
						<img src='/img/empty-cart.jpg' alt='' />
						<h2>Корзина пустая</h2>
						<p className='opacity-6'>
							Добавьте хотябы одну пару кросовок чтобы сделать заказ.
						</p>
						<button onClick={onClose} className={styles.greenBtn}>
							Вернуться назад{' '}
							<FaArrowRight className={styles.arrowRightIcon} />
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Drawer;
