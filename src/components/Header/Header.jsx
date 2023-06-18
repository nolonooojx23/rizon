import React from 'react'
import './Header.css'
import bg from '../../../public/images/bg1.png'

function Header() {
	return (
		<div className='header'>
			<div className="header_background">
				<img src={bg} alt="" />
				<div className="header_backgroundCards">
					<div className="header_backgroundCard">
						<h1>*Ichak yo’llari uchun foydali</h1>
						<p>Lorem ipsum dolor sit amet consectetur. Duis eu in enim in phasellus tellus. Elementum ut id at urna nunc. Eu nullam et amet congue pulvinar velit iaculis in iaculis. </p>
					</div>
					<div className="header_backgroundCard">
						<h1>*Ichak yo’llari uchun foydali</h1>
						<p>Lorem ipsum dolor sit amet consectetur. Duis eu in enim in phasellus tellus. Elementum ut id at urna nunc. Eu nullam et amet congue pulvinar velit iaculis in iaculis. </p>
					</div>
					<div className="header_backgroundCard">
						<h1>*Ichak yo’llari uchun foydali</h1>
						<p>Lorem ipsum dolor sit amet consectetur. Duis eu in enim in phasellus tellus. Elementum ut id at urna nunc. Eu nullam et amet congue pulvinar velit iaculis in iaculis. </p>
					</div>
				</div>
			</div>
			<div className="header_text">
				<h1>Imunitetni oshiruvchi tabiiy sirop.</h1>
				<button>Batafsil</button>
			</div>
		</div>
	)
}

export default Header