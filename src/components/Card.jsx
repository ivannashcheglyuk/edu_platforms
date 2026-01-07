import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; // we’ll create this CSS file

const Card = ({ creator }) => {
  return (
    <div className="creator-card">
      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} className="creator-image" />
      )}

      <div className="creator-info">
        <h2>{creator.name}</h2>
        <p>{creator.description}</p>
      </div>

      <div className="creator-buttons">
        <Link to={`/view/${creator.id}`} className="btn btn-view">View</Link>
        <Link to={`/edit/${creator.id}`} className="btn btn-edit">Edit</Link>
        {creator.url && (
          <a href={creator.url} target="_blank" rel="noopener noreferrer" className="btn btn-visit">
            Visit
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
