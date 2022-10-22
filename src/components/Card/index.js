import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';
import AppContext from '../../context';
function Card({
	id,
	title,
	imageUrl,
	price,
	onFavorite,
	onPlus,
	favorited = false,
	added = false,
	loading = false,
}) {
	const { isItemAdded } = React.useContext(AppContext);
	const [isFavorite, setIsFavorite] = useState(favorited);

	const onClickPlus = () => {
		onPlus({ id, title, imageUrl, price });
	};

	const onClickFavorite = () => {
		onFavorite({ id, title, imageUrl, price });
		setIsFavorite(!isFavorite);
	};
	return (
		<div className={styles.card}>
			{loading ? (
				<ContentLoader
					speed={2}
					width={160}
					height={265}
					viewBox='0 0 160 265'
					backgroundColor='#f3f3f3'
					foregroundColor='#ecebeb'>
					<rect x='0' y='0' rx='10' ry='10' width='160' height='91' />
					<rect x='0' y='101' rx='3' ry='3' width='160' height='15' />
					<rect x='0' y='124' rx='3' ry='3' width='93' height='15' />
					<rect x='0' y='163' rx='3' ry='3' width='80' height='24' />
					<rect x='124' y='156' rx='8' ry='8' width='32' height='32' />
				</ContentLoader>
			) : (
				<>
					<div className={styles.favorite}>
						<img
							onClick={onClickFavorite}
							src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
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
							src={isItemAdded(id) ? '/img/btn-cheked.svg' : '/img/btn-plus.svg'}
							alt='Plus'
							onClick={onClickPlus}
						/>
					</div>
				</>
			)}
		</div>
	);
}

export default Card;
