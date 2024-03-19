import React from 'react'
import './TopPick.css'

const TopPick = ({ image, title, description, id, index }) => {
	return (
		<div className={'top-pick' + ' ' + 'item-' + index} id={id}>
			<img src={image} alt={title} className='top-pick-image' />
			<h3 className='top-pick-title'>{title}</h3>
			<p className='top-pick-description'>{description}</p>
		</div>
	)
}

export default TopPick;