import React, { useEffect, useState } from "react";
// import DividerDesktop from "./images/pattern-divider-desktop.svg";
// import DividerMobile from "./images/pattern-divider-mobile.svg";
// import Dice from "./images/icon-dice.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export const Advice = () => {
  const { width } = useWindowDimensions();
  const [advice, setAdvice] = useState({
    slip: {
      id: null,
      advice: "",
    },
  });
  const [dice, setDice] = useState(true);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dicePath =
    "./static/media/icon-dice.08691e4c24c11b5ba564e06b1f6bcbf3.svg";
  let dividerPath =
    "./static/media/pattern-divider-desktop.ed9685263f6b47d21c8848f7d8bdd10e.svg";

  const fecthData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.adviceslip.com/advice/${Math.floor(Math.random() * 200)}`
      );
      const data = await response.json();
      setAdvice(data);
      setDice(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (dice) {
      fecthData();
    }
  }, [dice]);

  const diceHandler = () => {
    setDice(true);
  };

  if (width <= 428)
    dividerPath =
      "./static/media/pattern-divider-mobile.aca38726412164df099c43d4f2fed72e.svg";

  if (isLoading) return <p>Searching...</p>;
  if (error) return <p>Advice not found!</p>;

  return (
    <React.Fragment>
      <h6>ADVICE #{advice.slip?.id}</h6>
      <p>"{advice.slip?.advice}"</p>
      <img className="divider" src={dividerPath} alt="divider desktop/mobile" />
      <button type="button" onClick={diceHandler}>
        <img src={dicePath} alt="dice" className="dice" />
      </button>
    </React.Fragment>
  );
};
