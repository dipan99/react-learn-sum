import React, {useState} from 'react';

const Adder = () => {

  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [showResult, SetShowResult] = useState(false);

  const triggerFirstNum = (e) => {
    console.log('triggerFirstNum called.');
    setFirstNum(e.target.value);
    SetShowResult(true);
  }

  const triggerSecondNum = (e) => {
    console.log('triggerSecondNum called.');
    setFirstNum(e.target.value);
    SetShowResult(true);
  }

  return (
    <div>
      <input placeholder="Num1" onInput={triggerFirstNum}/>
      <input placeholder="Num2" onInput={(e) => {setSecondNum(e.target.value)}}/>
      <input value={parseInt(firstNum)+parseInt(secondNum)}/>
      {showResult && <p>Result: {firstNum} + {secondNum} = {firstNum+secondNum} </p>}
    </div>
  )
}

export default Adder;