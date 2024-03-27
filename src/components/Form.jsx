import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.css'

export default function Form({ fillTheList, setToSearched, setToRandom }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://precious-creponne-da48ee.netlify.app/.netlify/functions/topRecipes');
        setToSearched();
        fillTheList(response.data);
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