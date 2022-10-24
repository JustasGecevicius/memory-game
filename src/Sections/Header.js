import { useState } from "react";

export const Header = ({currentScore, levelCount}) => {

    const [bestScore, setBestScore] = useState(0);
    if(currentScore > bestScore){
        setBestScore((prev) => prev + 1);
    }
    
    return(
        <div className="header">
            <h1 className="title">Memory Game</h1>
            <h2 className="level">Current Level {levelCount}</h2>
            <ul>
                <li className="currentScore">Best Score {bestScore}</li>
                <li className="bestScore">Current Score {currentScore}</li>
            </ul>
        </div>
    )
}