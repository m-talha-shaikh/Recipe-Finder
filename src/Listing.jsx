import React, { useState, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Item from './Item';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #f5f5f5;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e9e9e9;
  }

  img {
    width: 200px;
    height: 200px;
    margin-left: 10px;
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const RandomText = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: #333;
`;

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
    <ListItem onClick={fillItem} key={meals.id} data-id={meals.id}>
      {meals.title}
      <img src={meals.image} alt={meals.title} />
    </ListItem>
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
      <Container>
        <Title>
          <RandomText>SEARCH RECIPES IN THE BOX</RandomText>
        </Title>
      </Container>
    );
  } else if (search === 'searched') {
    return (
      <Container>
        <Title>{listItems}</Title>
      </Container>
    );
  } else if (search === 'picked') {
    return (
      <Container>
        <Title>{newItem}</Title>
      </Container>
    );
  }
}
