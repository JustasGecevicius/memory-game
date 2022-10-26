import { useEffect, useState } from "react";
import "./App.css";
import { Body } from "./Sections/Body";
import { Header } from "./Sections/Header";

function App() {
  const [levelCount, setLevelCount] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const updateCurrentScore = () => {
   // console.log("updateCurrentScore");
    setCurrentScore((prev) => prev + 1);
    setClickCount((prev) => prev + 1);
  };
  const updateLevelCount = () => {
    //console.log("updateLevelCount");
    setLevelCount((prev) => prev + 1);
    setClickCount(0);
  };


  useEffect(() => {
    //console.log(typeof currentScore, typeof levelCount);  
    if(clickCount === levelCount*3 && levelCount !== 0){
        //console.log("zebaginas");
        updateLevelCount();
    }
    //else{console.log("Not Enough"); return}
}, [currentScore, clickCount, levelCount])


  return (
    <div className="App">
      <Header currentScore={currentScore} levelCount={levelCount} />
      <Body
      setClickCount={setClickCount}
      setCurrentScore={setCurrentScore}
      setLevelCount={setLevelCount}
      updateCurrentScore={updateCurrentScore}
      levelCount={levelCount}
      />
    </div>
  );
}

export default App;
