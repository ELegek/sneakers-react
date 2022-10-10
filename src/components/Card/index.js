import React, { useState } from 'react';
import styles from './Card.module.scss';

function Card({ title, imageUrl, price, onFavorite, onPlus }) {
	const [isAdded, setIsAdded] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false);

	const onClickPlus = () => {
		onPlus({ title, imageUrl, price });
		setIsAdded(!isAdded);
	};

	const onClickFavorite = () => {
		onFavorite();
		setIsFavorite(!isFavorite);
	};
	return (
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img
					onClick={onClickFavorite}
					src={
						isFavorite
							? '/img/heart-liked.svg'
							: '/img/heart-unliked.svg'
					}
					alt='Unliked'
				/>
			</div>
			<img width={133} height={112} src={imageUrl} alt='Sneakers' />
			<h5>{title}</h5>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column '>
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<img
					className={styles.plus}
					src={isAdded ? '/img/btn-cheked.svg' : '/img/btn-plus.svg'}
					alt='Plus'
					onClick={onClickPlus}
				/>
			</div>
		</div>
	);
}

export default Card;
