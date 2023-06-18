import React from 'react'
import './Products.css'
import card from '../../../public/images/card.png'
import flag from '../../../public/images/flag.png'
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Card from '../Card/Card';

function Products() {
	const info = [
		{ img: card, price: '119 000 uzs', title: 'Argeta 100ml', id: 1 },
		{ img: card, price: '119 000 uzs', title: 'Argeta 100ml', id: 2 },
		{ img: card, price: '119 000 uzs', title: 'Argeta 100ml', id: 3 },
		{ img: card, price: '119 000 uzs', title: 'Argeta 100ml', id: 4 },
		{ img: card, price: '119 000 uzs', title: 'Argeta 100ml', id: 5 },
		{ img: card, price: '119 000 uzs', title: 'Argeta 100ml', id: 6 },
		{ img: card, price: '119 000 uzs', title: 'Argeta 100ml', id: 7 },
		{ img: card, price: '119 000 uzs', title: 'Argeta 100ml', id: 8 },
	]
	return (
		<div className='products'>
			<h1>Mahsulotlar</h1>
			<p><b>100 000uzs</b> dan yuqori bo’lgan haridlar uchun yetkazib berish bepul!</p>

			<div className="products_cards">
				{info.map((item) => {
					return (
						<Card id={item.id} title={item.title} img={item.img} price={item.price}/>
					)
				})}
			</div>
		</div>
	)
}

export default Products