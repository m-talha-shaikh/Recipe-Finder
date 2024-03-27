import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.css'

export default function Form({ fillTheList, setToSearched, setToRandom }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '30f11e2f6a32435585f86aba698be99a';
        const baseUrl = 'https://api.spoonacular.com/recipes/random';
        const response = await axios.get(baseUrl, {
          params: {
            apiKey: apiKey,
            number: 10,
          },
        });

        // const response = await axios.get('https://precious-creponne-da48ee.netlify.app/.netlify/functions/topRecipes');
        setToSearched();
        fillTheList(response.data.recipes);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
          const apiKey = 'ac8e0ffd9e0d46b48c36541a218e7e12'
          const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch';
          const response = await axios.get(baseUrl, {
            params: {
              apiKey: apiKey,
              query: inputValue,
            },
          });

          // Extract recipe data from the response
          const recipes = response.data.results;
      // const response = await axios.post('https://precious-creponne-da48ee.netlify.app/.netlify/functions/searchRecipe', { query: inputValue });
      // const recipes = response.data;

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
    <div id="form-box">
      <form id="form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter your search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">&#x1F50D;</button>
      </form>
    </div>
  );
}