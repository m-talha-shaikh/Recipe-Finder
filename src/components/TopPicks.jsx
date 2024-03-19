import React, { useState , useEffect } from 'react'
import axios from 'axios'
import TopPick from './TopPick'

const TopPicks = () => {

  const [topRecipes, setTopRecipes] = useState([]);

   useEffect(() => {
    // Fetch data from URL
    const fetchData = async () => {
      try {
        const response = await axios.get('https://precious-creponne-da48ee.netlify.app/.netlify/functions/topRecipes');
        setTopRecipes(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  	return (
  		<div className='top-picks'>

	  		{topRecipes.map((item, index) => {
          let description = item.dishTypes || item.cuisine || item.diets || [];
          return (
            <TopPick
              key={index}
              image={item.image}
              title={item.title}
              description={description}
              id={index === 0 ? 'main-pick' : null}
              index={index}
            />
          );
        })}


  		</div>
  	)

}

export default TopPicks;