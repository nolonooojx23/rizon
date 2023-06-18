import React from 'react'
import './Navbar.css'
import logo from '../../../public/images/logo.png'
import icon from '../../../public/images/icon.png'

function Navbar() {
	return (
		<div className='navbar'>
			<div className="navbar_left">
				<img src={logo} alt="" />
			</div>
			<div className="navbar_right">
				<ul>
					<li>Asosiy</li>
					<li>Biz haqimizda</li>
					<li>Mahsulotlar</li>
				</ul>
				<button>Kirish <img src={icon} alt="" /></button>
			</div>
		</div>
	)
}

export default Navbar