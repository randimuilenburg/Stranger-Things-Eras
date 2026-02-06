import React from "react";
// import { useState } from "react";
import { useParams } from "react-router-dom";
import characterData from "../data/CharacterData";
// import ImageGrid from "./ImageGrid";
import BackButton from "./BackButton";
import EmojiRain from "./EmoijiRain";

function ResultsPage() {
  const { slug } = useParams();

  const character = characterData.find((character) => character.slug === slug);

  return (
    <div>
      <BackButton />
      <EmojiRain emoji={character.emoji} />
      <h1 className="results-header" style={{ color: character.color }}>
        {character.era}
      </h1>
      <img className="results-image" src={character.photo} />
      <h6 className="songs-header">Top Tracks:</h6>
      <ul className="results-songs">
        {character.songs.map((song) => (
          <li className="single-song">{song}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsPage;
