import React from 'react'
import './Product_info.css'
import '../Products/Products.css'
import medicen from '../../../public/images/medicen.png'
import card from '../../../public/images/card.png'
import Card from '../Card/Card'

function Product_info() {
	const info = [
		{ img: card, price: '119 000 uzs', title: 'Argeta 100ml', id: 1 },
		{ img: card, price: '119 000 uzs', title: 'Argeta 100ml', id: 2 },
		{ img: card, price: '119 000 uzs', title: 'Argeta 100ml', id: 3 },
		{ img: card, price: '119 000 uzs', title: 'Argeta 100ml', id: 4 },
	]
	return (
		<div className="product_info">
			<div className="product_info_main">
				<div className="product_info_text">
					<h2>35% chegirma</h2>
					<h1>Oyning eng ommabop mahsuloti</h1>
					<p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
					<div className="list">
						<p><b>✓</b> Lorem ipsum dolor sit amet consectetur.</p>
						<p><b>✓</b> Lorem ipsum dolor sit amet consectetur.</p>
						<p><b>✓</b> Lorem ipsum dolor sit amet consectetur.</p>
						<p><b>✓</b> Lorem ipsum dolor sit amet consectetur.</p>
						<p><b>✓</b> Lorem ipsum dolor sit amet consectetur.</p>
					</div>
					<button className='product_info_button'>Sotib olish!</button>
				</div>
				<div className="product_info_img">
					<img src={medicen} alt="" />
				</div>
			</div>
			<div className="product_medicen_cards">
			{info.map((item) => {
					return (
						<Card id={item.id} title={item.title} img={item.img} price={item.price}/>
					)
				})}
			</div>
		</div>
	)
}

export default Product_info