import React, { useState, useEffect } from "react";

import "./style.css";
import AllSection from "./DisplaySection/AllSection";
import Avatar from "./Avatar/Avatar";
import { allPart } from "./Constants";

export default function App() {
  const [state, setState] = useState({
    body: null,
    eyes: null,
    noses: null,
    hair: null,
    mouths: null,
    eyebrows: null,
    hats: null,
    glasses: null,
    earrings: null,
    neckwear: null,
    clothingL1: null,
    clothingL2: null,
    clothingL3: null,
  });

  function handleClick({ data, name }) {
    const newData = { ...state };
    newData[`${name}`] = data;
    setState(newData);
  }
  function getRandomNumb(maxNumber) {
    return Math.floor(Math.random() * maxNumber + 1);
  }
  function handleRandomize() {
    let newObj = {};
    allPart.forEach((part) => {
      const newId = getRandomNumb(part.total);
      const newPart = {
        id: newId,
        imgUrl: `Assets/${part.name}/${newId}.png`,
      };
      newObj[`${part.name}`] = newPart;
    });
    setState(newObj);
  }
  useEffect(() => {
    handleRandomize();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <div className="title">character</div>
        <div className="content">
          <p>🛠️customization🛠️</p>
        </div>
        <div className="line-break"></div>
      </div>
      <div className="main">
        <Avatar data={state} handleRandomize={handleRandomize} />
        <div className="list-sections">
          <AllSection onClickItem={handleClick} state={state} />
        </div>
      </div>
    </div>
  );
}
