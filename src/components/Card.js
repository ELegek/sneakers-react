import React from 'react';
import { FaPlus } from 'react-icons/fa';

function Card() {
	return (
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
	);
}

export default Card;
