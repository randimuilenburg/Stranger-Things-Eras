import React from "react";
// import { Container, Row, Col, Ratio } from "react-bootstrap";

const ImageGrid = ({ characters }) => {
  return (
    <div className="image-grid">
      {characters.map((character) => (
        <div className="image-tile" key={character.id}>
          <img
            className="character-image"
            key={character.id}
            src={character.photo}
            alt={character.name}
            // onClick={onClick}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
