import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import characterData from "./data/CharacterData";
import ImageGrid from "./components/ImageGrid";
import ResultsPage from "./components/ResultsPage";
import BackButton from "./components/BackButton";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  return (
    <div className="appPage">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <ImageGrid
                characters={characterData}
                onClick={setSelectedCharacter}
              />
            </>
          }
        />
        <Route
          path="/character/:slug"
          element={<ResultsPage characters={characterData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
