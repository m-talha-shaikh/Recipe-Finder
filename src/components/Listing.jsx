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
    populateItem(clickedItemId);
  };

  const populateItem = async (id) => {
    try {
      const apiKey = '408d436b50c74df3bf2c7f01db1f6cd6';
      const baseUrl =
        'https://api.spoonacular.com/recipes/' +
        id +
        '/information?includeNutrition=false';

      const response = await axios.get(baseUrl, {
        params: {
          apiKey: apiKey,
        },
      });

      const recipe = response.data;
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
        <Item props={item} />
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
      <div>
        <div>{newItem}</div>
      </div>
    );
div  }
}
