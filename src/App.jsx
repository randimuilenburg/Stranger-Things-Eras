import React from "react";
import Header from "./components/Header";
import characterData from "./data/CharacterData";
import ImageGrid from "./components/ImageGrid";

// const [selectedCharacter, setSelectedCharacter] = useState(null);

function App() {
  return (
    <div>
      <Header />
      <ImageGrid characters={characterData} />
    </div>
  );
}

export default App;
