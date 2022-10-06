import React from 'react';
import { FaShoppingCart, FaUserCircle, FaPlus, FaSearch, FaTimes } from 'react-icons/fa';

function App() {
	return (
		<div className='wrapper clear'>
			<div className='overlay'>
				<div className='drawer'>
					<h2>Корзина</h2>

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
			</div>

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
			<div className='content p-40'>
				<div className='d-flex align-center mb-40 justify-between'>
					<h1 className=''>Все кроссовки</h1>
					<div className='search-block'>
						<FaSearch className='search-icon' />
						<input placeholder='Поиск...' />
					</div>
				</div>

				<div className='content-wrapper'>
					<div className='card'>
						<div className='favorite'>
							<img src='/img/heart-unliked.svg' alt='Unliked' />
						</div>
						<img width={133} height={112} src='/img/sneakers/sneakers-1.png' alt='Sneakers' />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column '>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<FaPlus className='btnPlus' />
							</button>
						</div>
					</div>
					<div className='card'>
						<img width={133} height={112} src='/img/sneakers/sneakers-2.png' alt='Sneakers' />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column '>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<FaPlus className='btnPlus' />
							</button>
						</div>
					</div>
					<div className='card'>
						<img width={133} height={112} src='/img/sneakers/sneakers-3.png' alt='Sneakers' />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column '>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<FaPlus className='btnPlus' />
							</button>
						</div>
					</div>
					<div className='card'>
						<img width={133} height={112} src='/img/sneakers/sneakers-4.png' alt='Sneakers' />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column '>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<FaPlus className='btnPlus' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
