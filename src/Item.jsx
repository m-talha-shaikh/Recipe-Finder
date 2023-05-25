import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
  font-family: 'monospace', sans-serif;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: contain;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
`;


const IngredientsList = styled.ol`
  list-style: none;
  margin-top: 10px;
  padding: 10px;
  background-color: pink;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
`;

const IngredientItem = styled.li`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #FF4D00;
  color: cornsilk;
  font-family: monospace;
`;

export default function Item({ props }) {
  let ingredientsList = [];

  for (let i = 0; i < props.extendedIngredients.length; i++) {
    ingredientsList.push(props.extendedIngredients[i].name);
  }

  console.log(ingredientsList);

  let updatedList = [];
  let i = 0;
  updatedList = ingredientsList.map((ingr) => (
    <IngredientItem key={i++}>{ingr}</IngredientItem>
  ));

  return (
    <>
      <Title>{props.title}</Title>
      <ImageContainer>
        <Image src={props.image} alt="Recipe" />
      </ImageContainer>
      <IngredientsList>{updatedList}</IngredientsList>
    </>
  );
}
