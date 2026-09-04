import React from 'react';

function Card({ title, description, image, children }) {
  return (
    <div className="card" style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', margin: '10px' }}>
      {image && <img src={image} alt={title} style={{ width: '100%', borderRadius: '4px' }} />}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;