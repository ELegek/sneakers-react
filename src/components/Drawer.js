import React from 'react';
import { FaTimes, FaArrowRight } from 'react-icons/fa';

function Drawer() {
	return (
		<div className='overlay'>
			<div className='drawer'>
				<div className='drawerHeader'>
					<h2>Корзина</h2>
					<button className='btn-remove'>
						<FaTimes className='remove-icon' />
					</button>
				</div>

				<div className='items'>
					<div className='cartItem'>
						<div>
							<img src='/img/sneakers/sneakers-1.png' alt='' />
						</div>

						<div>
							<p>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<button className='btn-remove'>
							<FaTimes className='remove-icon' />
						</button>
					</div>
				</div>
				<div className='cartTotalBlock'>
					<ul>
						<li className='cart-item'>
							<span>Итого</span>
							<div></div>
							<b>21 498 руб.</b>
						</li>
						<li className='cart-item'>
							<span>Налог 5%: </span>
							<div></div>
							<b>1074 руб.</b>
						</li>
					</ul>
					<button className='greenBtn'>
						Оформить заказ <FaArrowRight className='arrowRight-icon' />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Drawer;
