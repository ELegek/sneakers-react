import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import style from './Header.module.scss';

function Header() {
	return (
		<header className='d-flex justify-between align-center p-40'>
			<div className='d-flex align-center'>
				<img width={40} height={40} src='/img/logo.png' alt='logo' className='mr-15' />
				<div>
					<h3 className='text-uppercase'>REACT SNEAKERS</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className='d-flex'>
				<li className='mr-30'>
					<FaShoppingCart className='icon' />
					<span>1205 руб.</span>
				</li>
				<li>
					<FaUserCircle className='icon' />
				</li>
			</ul>
		</header>
	);
}

export default Header;
