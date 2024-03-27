import React from 'react';

const Item = ({ data, title, image }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} id="image-item">
        <img src={image} alt={title} style={{ display: 'inline-block' , width: '40vw' , height: 'auto'}} />
      </div>


      {data && data.map((item, index) => (
        <div key={index}>
          <h3>{item.number < 10 ? `0${item.number}` : item.number}:</h3>
          {item.equipment.length > 0 && (
            <div>
              <strong>Equipment:</strong>{' '}
              {item.equipment.map((equip, i) => (
                <span key={i}>
                  {equip.name}
                  {i !== item.equipment.length - 1 && ', '}
                </span>
              ))}
              <br />
            </div>
          )}
          {item.ingredients.length > 0 && (
            <div>
              <strong>Ingredients:</strong>{' '}
              {item.ingredients.map((ing, i) => (
                <span key={i}>
                  {ing.name}
                  {i !== item.ingredients.length - 1 && ', '}
                </span>
              ))}
              <br />
            </div>
          )}
          {item.length && (
            <div>
              <strong>Length:</strong> {item.length.number} {item.length.unit}
              <br />
            </div>
          )}
          <strong>Step:</strong> {item.step}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Item;
