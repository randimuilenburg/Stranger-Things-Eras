import React from "react";
import { Link } from "react-router-dom";

const ImageGrid = ({ characters, onSelect }) => {
  return (
    <div className="image-grid">
      {characters.map((character) => (
        <div className="image-tile" key={character.id}>
          <Link
            key={character.id}
            to={`/character/${character.slug}`}
            className="character-link"
          >
            <img
              className="character-image"
              // key={character.id}
              src={character.photo}
              alt={character.name}
              // onSelect={onselect}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
