import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; // Make sure your Card.css includes .btn-youtube styles

const Card = ({ creator }) => {
  return (
    <div className="creator-card">
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          className="creator-image"
        />
      )}

      {/* YouTube button on top of description */}
      {creator.youtube_url && (
        <a
          href={creator.youtube_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-youtube"
        >
          {/* YouTube SVG logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M23.498 6.186a2.967 2.967 0 0 0-2.09-2.1C19.629 3.5 12 3.5 12 3.5s-7.63 0-9.408.586a2.967 2.967 0 0 0-2.09 2.1A31.53 31.53 0 0 0 0 12a31.53 31.53 0 0 0 .502 5.814 2.967 2.967 0 0 0 2.09 2.1c1.778.586 9.408.586 9.408.586s7.629 0 9.408-.586a2.967 2.967 0 0 0 2.09-2.1A31.53 31.53 0 0 0 24 12a31.53 31.53 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
      )}

      <div className="creator-info">
        <h2>{creator.name}</h2>
        <p>{creator.description}</p>
      </div>

      <div className="creator-buttons">
        <Link to={`/view/${creator.id}`} className="btn btn-view">
          View
        </Link>
        <Link to={`/edit/${creator.id}`} className="btn btn-edit">
          Edit
        </Link>
        {creator.url && (
          <a
            href={creator.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-visit"
          >
            Visit
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
