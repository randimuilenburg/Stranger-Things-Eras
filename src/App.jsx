import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import characterData from "./data/CharacterData";
import ImageGrid from "./components/ImageGrid";

// const [selectedCharacter, setSelectedCharacter] = useState(null);

// FIX THIS
function App() {
  return (
    <div>
      <Routes>
        <>
          <Header />
          <ImageGrid characters={characterData} />
        </>
      </Routes>
    </div>
  );
}

export default App;
