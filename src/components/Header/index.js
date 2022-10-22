import React from 'react';
import { FaShoppingCart, FaUserCircle, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import { useCart } from '../../hook/useCart';

function Header(props) {
	// Кастомный хук
	const { totalPrice } = useCart();

	return (
		<header className='d-flex justify-between align-center p-40'>
			<Link to='/'>
				<div className='d-flex align-center'>
					<img width={40} height={40} src='/img/logo.png' alt='logo' className='mr-15' />
					<div>
						<h3 className='text-uppercase'>REACT SNEAKERS</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>
			<ul className='d-flex'>
				<li onClick={props.onClickCart} className='mr-30 cu-p'>
					<FaShoppingCart className='icon' />
					<span>{totalPrice} руб.</span>
				</li>
				<li>
					<Link to='/favorites'>
						<FaRegHeart className='icon' />
					</Link>
				</li>
				<li>
					<Link to='/orders'>
						<FaUserCircle className='icon' />
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
