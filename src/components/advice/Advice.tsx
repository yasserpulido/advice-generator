import React, { useEffect, useState } from "react";
import DividerDesktop from "../../assets/images/pattern-divider-desktop.svg";
import DividerMobile from "../../assets/images/pattern-divider-mobile.svg";
import Dice from "../../assets/images/icon-dice.svg";
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

  let divider = DividerDesktop;

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

  if (width <= 428) divider = DividerMobile;

  if (isLoading) return <p>Searching...</p>;
  if (error) return <p>Advice not found!</p>;

  console.log(
    window.location.origin + "/docs/static/media/pattern-divider-desktop.svg"
  );

  return (
    <React.Fragment>
      <h6>ADVICE #{advice.slip?.id}</h6>
      <p>"{advice.slip?.advice}"</p>
      <img
        className="divider"
        src={"./assets/images/pattern-divider-desktop.svg"}
        alt="divider desktop/mobile"
      />
      <button type="button" onClick={diceHandler}>
        <img src={Dice} alt="dice" className="dice" />
      </button>
    </React.Fragment>
  );
};
