import React from "react";
// import { useState } from "react";
import { useParams } from "react-router-dom";
import characterData from "../data/CharacterData";
// import ImageGrid from "./ImageGrid";
import BackButton from "./BackButton";

function ResultsPage() {
  const { slug } = useParams();

  const character = characterData.find((character) => character.slug === slug);

  return (
    <div>
      <BackButton />
      <h1 className="results-header" style={{ color: character.color }}>
        {character.era}
      </h1>
      <img className="results-image" src={character.photo} />
      <ul className="results-songs">
        {character.songs.map((song) => (
          <li className="single-song">{song}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsPage;
