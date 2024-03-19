import React, { useState , useEffect } from 'react'
import axios from 'axios'
import TopPick from './TopPick'

const TopPicks = () => {

  const [topRecipes, setTopRecipes] = useState([]);

	// const topRecipes = [
 //    {
 //      image: 'pizza.jpeg',
 //      title: 'Margherita Pizza',
 //      description: 'Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil.'
 //    },
 //    {
 //      image: 'pizza.jpeg',
 //      title: 'Pepperoni Pizza',
 //      description: 'Pizza topped with tomato sauce, mozzarella cheese, and slices of pepperoni.'
 //    },
 //    {
 //      image: 'pizza.jpeg',
 //      title: 'Vegetarian Pizza',
 //      description: 'Pizza loaded with assorted vegetables like bell peppers, onions, olives, and mushrooms.'
 //    },
 //    {
 //      image: 'pizza.jpeg',
 //      title: 'BBQ Chicken Pizza',
 //      description: 'Pizza topped with tangy barbecue sauce, grilled chicken, onions, and mozzarella cheese.'
 //    },
 //    {
 //      image: 'pizza.jpeg',
 //      title: 'Supreme Pizza',
 //      description: 'Pizza piled high with various toppings like pepperoni, sausage, onions, bell peppers, and olives.'
 //    }
 //  ];

   useEffect(() => {
    // Fetch data from URL
    const fetchData = async () => {
      try {
        const response = await axios.get('https://precious-creponne-da48ee.netlify.app/.netlify/functions/topRecipes');
        setTopRecipes(response.data);
        console.log(recipes.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  	return (
  		<div className='top-picks'>

	  		{topRecipes.map((item, index) => (
	  			<TopPick key={index} image={item.image} title={item.title}
	  				description={item.description} id={index === 0 ? 'main-pick' : null} index={index} />
	  		))}

  		</div>
  	)

}

export default TopPicks;