import React, { useState } from 'react';
import axios from 'axios';
import './Category.css';

export default function Category({ list, search, setToPicked, setToPickedItem, pickedItem, setToSearched, setToRandom, fillTheList }) {

    const [inputValue, setInputValue] = useState('');

    const onClickItem = async (e, text) => {
        e.preventDefault();
        setInputValue(text); // Set inputValue to the text of the clicked category

        try {
            const apiKey = 'ac8e0ffd9e0d46b48c36541a218e7e12';
            const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch';
            const response = await axios.get(baseUrl, {
                params: {
                    apiKey: apiKey,
                    query: text, // Use the clicked category text as the query
                },
            });

            // Extract recipe data from the response
            const recipes = response.data.results;
            // const response = await axios.post('https://precious-creponne-da48ee.netlify.app/.netlify/functions/searchRecipe', { query: inputValue });
            // const recipes = response.data;

            if (recipes.length > 0) {
                setToSearched(); // Assuming these functions are defined elsewhere
                fillTheList(recipes); // Assuming these functions are defined elsewhere
            } else {
                setToRandom(); // Assuming these functions are defined elsewhere
            }
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <div id="categories">
            <div className="category-item" onClick={(e) => onClickItem(e, 'Pizza')}>
                <img src="/assets/pizza-icon.png" alt="" />
                <h3>Pizza</h3>
            </div>
            <div className="category-item" onClick={(e) => onClickItem(e, 'Fish')}>
                <img src="/assets/pizza-icon.png" alt="" />
                <h3>Fish</h3>
            </div>
            <div className="category-item" onClick={(e) => onClickItem(e, 'Pasta')}>
                <img src="/assets/pizza-icon.png" alt="" />
                <h3>Pasta</h3>
            </div>
            <div className="category-item" onClick={(e) => onClickItem(e, 'Juice')}>
                <img src="/assets/pizza-icon.png" alt="" />
                <h3>Juice</h3>
            </div>
            <div className="category-item" onClick={(e) => onClickItem(e, 'Dessert')}>
                <img src="/assets/pizza-icon.png" alt="" />
                <h3>Dessert</h3>
            </div>
            <div className="category-item" onClick={(e) => onClickItem(e, 'Smoothie')}>
                <img src="/assets/pizza-icon.png" alt="" />
                <h3>Smoothie</h3>
            </div>
        </div>
    );
}
