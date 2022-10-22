import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import styles from '../components/Drawer/Drawer.module.scss';
import AppContext from '../context';

function Info({ title, image, description }) {
	const { setCartOpened } = React.useContext(AppContext);
	return (
		<div className='cartEmpty d-flex align-center justify-center flex-column flex'>
			<img src={image} alt='' />
			<h2>{title}</h2>
			<p className='opacity-6'>{description}</p>
			<button onClick={() => setCartOpened(false)} className={styles.greenBtn}>
				Вернуться назад <FaArrowLeft className={styles.arrowRightIcon} />
			</button>
		</div>
	);
}

export default Info;
