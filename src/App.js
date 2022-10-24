import { useState } from "react";
import "./App.css";
import { Body } from "./Sections/Body";
import { Header } from "./Sections/Header";

function App() {

  const [levelCount, setLevelCount] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  
  const updateCurrentScore = () => {
    setCurrentScore((prev) => prev + 1);
  };
  const updateLevelCount = () => {
    setLevelCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      <Header currentScore={currentScore} levelCount={levelCount} />
      <Body
        updateCurrentScore={updateCurrentScore}
        updateLevelCount={updateLevelCount}
        level={levelCount}
      />
    </div>
  );
}

export default App;
