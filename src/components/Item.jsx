import React from 'react';

import './Item.css'

const Item = ({ data, title, image, onBackClick }) => {
  return (
    <div className='recipe-item'>
      <button style={{ color: 'white', backgroundColor: 'lightskyblue', margin: '10px auto', padding: '10px', fontSize: '30px', borderRadius: '5px' }} onClick={onBackClick}>Go Back</button>
      <h2 style={{ display: 'inline-block', backgroundColor: 'black' , padding: '20px', borderRadius: '5px' , color: 'white', fontSize: '40px'}}>{title}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} id="image-item">
        <img src={image} alt={title} style={{ display: 'inline-block' , width: '40vw' , height: 'auto'}} />
      </div>

      <div className='equipments'>
        <h3>Equipment:</h3>
        {data && data.map((item, index) => (
          <div key={index} className='recipe-cards'>
            {item.equipment.length > 0 && (
              <div>
                {item.equipment.map((equip, i) => (
                  <span key={i}>
                    {equip.name}
                    {i !== item.equipment.length - 1 && ', '}
                  </span>
                ))}
                <br />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="ingredients">
        <h3>Ingredients:</h3>
        {data && data.map((item, index) => (
          <div key={index} className='recipe-cards'>
            {item.ingredients.length > 0 && (
              <div>
                {item.ingredients.map((ing, i) => (
                  <span key={i}>
                    {ing.name}
                    {i !== item.ingredients.length - 1 && ', '}
                  </span>
                ))}
                <br />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="steps">
        <h3>Steps:</h3>
        {data && data.map((item, index) => (
          <div key={index} className='recipe-cards'>
            <h4>{item.number < 10 ? `0${item.number}` : item.number}:</h4>
            <p><strong>Step:</strong> {item.step}</p>
            {item.length && (
              <div>
                <strong>Length:</strong> {item.length.number} {item.length.unit}
                <br />
              </div>
            )}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
