import React, { useState } from "react";
import Adder from "./Adder";
import "./style.css";

export default function App() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const toggleAddition = () => {
    console.log("toggleAddition called.");
    setShowResult(true);
  };

  return (
    <>
      <Adder onToggle={toggleAddition} /> 
      {showResult && <p>{firstNum} + {secondNum} = {firstNum+secondNum}</p>}
    </>
    );
}
