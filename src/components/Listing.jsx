import React, { useState, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Item from './Item';
import './Listing.css'

export default function Listing({
  list,
  search,
  setToPicked,
  setToPickedItem,
  pickedItem,
  setToSearched,
  setToRandom,
}) {


const fillItem = (e) => {
  const clickedItemId = e.currentTarget.getAttribute('data-id');
  const clickedItemTitle = e.currentTarget.querySelector('.title-meal').textContent;
  const clickedItemImage = e.currentTarget.querySelector('img').getAttribute('src');
  populateItem(clickedItemId, clickedItemTitle, clickedItemImage);
};


  const populateItem = async (id, title, image) => {
    try {
      const apiKey = '30f11e2f6a32435585f86aba698be99a';
      const baseUrl =
        'https://api.spoonacular.com/recipes/' +
        id +
        '/analyzedInstructions';

      const response = await axios.get(baseUrl, {
        params: {
          apiKey: apiKey,
        },
      });

      let recipe = response.data;
      recipe[1] = title;
      recipe[2] = image
      setToPickedItem(recipe);
      console.log(recipe);
      setToPicked();
    } catch (error) {
      console.error('Error fetching item:', error);
    }
  };

  const listItems = list.map((meals) => (
    <li className="listed-item" onClick={fillItem} key={meals.id} data-id={meals.id}>
      <img src={meals.image} alt={meals.title} />
      <p className="title-meal">{meals.title}</p>
      <p className="read-more" onClick={fillItem} >Read More</p>
    </li>
  ));

  let newItem = [];

  if (pickedItem !== null) {
    const itemArray = [];
    itemArray.push(pickedItem);
    newItem = itemArray.map((item) => (
      <Fragment key={item.id}>
        <Item data={item[0].steps} title={item[1]} image={item[2]} onBackClick={() => setToSearched()} />
      </Fragment>
    ));
  }

  if (search === 'random') {
    return (
      <div>
        <div>
          <div></div>
        </div>
      </div>
    );
  } else if (search === 'searched') {
    return (
      <section id="list-page">
        <div id='searched-list'>
          <div id='listing-grid'>{listItems}</div>
        </div>
      </section>
    );
  } else if (search === 'picked') {
    return (
      <div id="list-page">
        <div>{newItem}</div>
      </div>
    );
    }
}
