import React from 'react';
import styled from 'styled-components';
import './Item.css'

export default function Item({ props }) {
  let ingredientsList = [];

  for (let i = 0; i < props.extendedIngredients.length; i++) {
    ingredientsList.push(props.extendedIngredients[i].name);
  }

  console.log(ingredientsList);

  let updatedList = [];
  let i = 0;
  updatedList = ingredientsList.map((ingr) => (
    <li key={i++}>{ingr}</li>
  ));

  return (
    <>
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <ul>{updatedList}</ul>
    </>
  );
}