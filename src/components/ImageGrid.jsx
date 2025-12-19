import React from "react";
// import { Container, Row, Col, Ratio } from "react-bootstrap";

const ImageGrid = ({ characters }) => {
  return (
    <div className="image-grid">
      {characters.map((character) => (
        <img key={character.id} src={character.photo} alt={character.name} />
      ))}
    </div>
  );
};

export default ImageGrid;
