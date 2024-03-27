import React, { useState , useEffect } from 'react'
import axios from 'axios'
import './Category.css'

export default function Cateogry() {
	return (
		
			<div id="categories">
				<div className="category-item">
					<img src="/assets/pizza-icon.png" alt="" />
					<h3>Breakfast</h3>
				</div>
				<div className="category-item">
					<img src="/assets/pizza-icon.png" alt="" />
					<h3>Lunch</h3>
				</div>
				<div className="category-item">
					<img src="/assets/pizza-icon.png" alt="" />
					<h3>Dinner</h3>
				</div>
				<div className="category-item">
					<img src="/assets/pizza-icon.png" alt="" />
					<h3>Party</h3>
				</div>
				<div className="category-item">
					<img src="/assets/pizza-icon.png" alt="" />
					<h3>Dessert</h3>
				</div>
				<div className="category-item">
					<img src="/assets/pizza-icon.png" alt=""  />
					<h3>Smoothie</h3>
				</div>
			</div>

	)
}