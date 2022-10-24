import { useEffect, useState } from "react";
import { GameDisplay } from "./GameDisplay";

export const Body = ({updateCurrentScore, updateLevelCount, level}) => {

    let files = require.context('/public/Pokemon', false, /\.(png|jpe?g|svg)$/);
   
    function importAll(r) {
      let images = {};
      r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
      return images
    }
    const images = importAll(files);

   // console.log(level);
    //const [lost, setLost] = useState(false);
    const [currentLevel, setCurrentLevel] = useState([]);

    const createLevelArray = (level) => {
        const numberOfCards = level * 3;
        let gameArr = Object.keys(images).map((key, index) => {
            if(index < numberOfCards){
                return {[key]:images[key]}
            }
        })
        gameArr = gameArr.filter((elem) => elem !== undefined);

        return gameArr;
    }

    useEffect(() => {
        setCurrentLevel((prev) => createLevelArray(level));
    },[level]);

    const handleImageClick = () => {
        setCurrentLevel((prev) => prev.sort((a, b) => 0.5 - Math.random()));
    }

    return(
        <div className="body">
            <button onClick={updateLevelCount}>Update Count</button>   
            <GameDisplay currentLevel={currentLevel} handleImageClick={handleImageClick}/>

        </div>
    )
}