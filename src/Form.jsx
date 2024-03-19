import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f7f7f7;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
`;

const RandomText = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: #333;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  color: #fff;
  background-color: #4285f4;
  cursor: pointer;

  &:hover {
    background-color: #357ae8;
  }
`;

export default function Form({ fillTheList, setToSearched, setToRandom }) {
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://precious-creponne-da48ee.netlify.app/.netlify/functions/searchRecipe', { query: inputValue });
      const recipes = response.data;

      if (recipes.length > 0) {
        setToSearched();
        fillTheList(recipes);
      } else {
        setToRandom();
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleFormSubmit}>
        <RandomText>Search Recipes in Box</RandomText>
        <StyledInput
          type="text"
          placeholder="Enter Your Query here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
    </FormContainer>
  );
}
