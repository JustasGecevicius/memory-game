import { useEffect, useState } from "react";

export const Body = ({
  setClickCount,
  setCurrentScore,
  updateCurrentScore,
  levelCount,
  setLevelCount,
}) => {
  let files = require.context("/public/Pokemon", false, /\.(png|jpe?g|svg)$/);

  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(files);
  //console.log(images);
  const [currentLevelObject, setcurrentLevelObject] = useState({});
  const [shuffleArray, setShuffleArray] = useState([]);

  const createLevelObject = (levelCount) => {
    const numberOfCards = levelCount * 3;
    const gameObject = {};
    const imagesKeys = Object.keys(images);
    for (let i = 0; i < numberOfCards; i++) {
      gameObject[Math.random()] = {
        location: images[imagesKeys[i]],
        clicked: false,
      };
      //console.log(gameObject);
    }

    return gameObject;
  };

  useEffect(() => {
    if (levelCount === 0) {
      setLevelCount(1);
    } else {
      //console.log(levelCount);
      setcurrentLevelObject((prev) => createLevelObject(levelCount));
    }
  }, [levelCount]);

  useEffect(() => {
    //console.log(currentLevelObject);

    setShuffleArray(shuffle(Object.entries(currentLevelObject)));
  }, [currentLevelObject]);

  const shuffle = (array) => {
    return [...array].sort((a, b) => 0.5 - Math.random());
  };

  const updatecurrentLevelObject = (updateId) => {
    setcurrentLevelObject((prev) => {
      return { ...prev, [updateId]: { ...prev[updateId], ["clicked"]: true } };
    });
  };

  const resetGame = () => {
    setLevelCount(0);
    setCurrentScore(0);
    setClickCount(0);
  };

  const handleImageClick = (event) => {
    event.preventDefault();
    if (currentLevelObject[event.target.id]["clicked"] === false) {
      updateCurrentScore();
      //console.log("first time");
      updatecurrentLevelObject(event.target.id);
    } else {
      //console.log("reset game");
      resetGame();
    }
  };

  return (
    <div className="body">
      <div className="gameDiv">
        {shuffleArray.map((key, index) => {
          console.log(key);
          return (
            <div key={index}>
              <img
                onClick={handleImageClick}
                alt="pokemon"
                src={key[1]["location"]}
                id={key[0]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
