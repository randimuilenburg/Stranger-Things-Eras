import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import characterData from "./data/CharacterData";
import ImageGrid from "./components/ImageGrid";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  return (
    <div className="appPage">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ImageGrid
              characters={characterData}
              onSelect={setSelectedCharacter}
            />
          }
        />
        {/* <Route
          path="/character/slug"
          element={<ResultsPage characters={characterData} />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
