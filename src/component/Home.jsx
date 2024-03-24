import React, { useState , useEffect } from 'react'
import axios from 'axios'
import './Home.css'

export default function Home() {
	return (
		<div id="home">
			<h1>Yummmyy</h1>
			<h2>Find a tasty recipe</h2>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
			<div id="categories">
				<div class="category-item">
					<img src="./pizza-icon.png" alt="" />
					<h3>Breakfast</h3>
				</div>
				<div class="category-item">
					<img src="./pizza-icon.png" alt="" />
					<h3>Lunch</h3>
				</div>
				<div class="category-item">
					<img src="./pizza-icon.png" alt="" />
					<h3>Dinner</h3>
				</div>
				<div class="category-item">
					<img src="./pizza-icon.png" alt="" />
					<h3>Party</h3>
				</div>
				<div class="category-item">
					<img src="./pizza-icon.png" alt="" />
					<h3>Dessert</h3>
				</div>
				<div class="category-item">
					<img src="./pizza-icon.png" alt=""  />
					<h3>Smoothie</h3>
				</div>
			</div>
		</div>
	)
}
