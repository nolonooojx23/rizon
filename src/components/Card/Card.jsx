import React from 'react'
import './Card.css'
import flag from '../../../public/images/flag.png'
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Card({ id ,img ,title ,price }) {
	return (
		<div className="products_card" key={id}>
			<div className="products_card_img">
				<div className="bg"></div>
				<div className='bg-text'><img src={flag} alt="" className='bg-flag' /> <p>Kanada texnologiyasi asosida tayyorlangan!</p> </div>
				<button className='bg-btn'>Batafsil</button>
				<div className="bg-icons">
					<LogoutIcon className='icon' />
					<FavoriteBorderIcon className='icon' />
					<ShoppingCartOutlinedIcon className='icon' />
				</div>
				<img src={img} alt="" />
			</div>
			<div className="products_card_text_main">
				<div className="products_card_text">
					<h1>{title}</h1>
					<p>{price}</p>
				</div>
				<div className="bg-stars">
					<p>★ ★ ★ ★ ✰</p>
				</div>
			</div>
		</div>
	)
}

export default Card