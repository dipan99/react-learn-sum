import React, {useState} from 'react';

const Adder = () => {

  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  //const [showResult, SetShowResult] = useState(false);

  const triggerFirstNum = (e) => {
    console.log('triggerFirstNum called.');
    setFirstNum(e.target.value);
    //SetShowResult(true);
  }

  const triggerSecondNum = (e) => {
    console.log('triggerSecondNum called.');
    setSecondNum(e.target.value);
    //SetShowResult(true);
  }

  const clearFields = () => {
    setFirstNum('');
    setSecondNum('');
    //SetShowResult(false);
  }

  return (
    <div>
      <input placeholder="Num1" value={firstNum} onInput={(e) => setFirstNum(e.target.value)}/>
      <input placeholder="Num2" value={secondNum} onInput={(e) => setSecondNum(e.target.value)}/>
      <input placeholder="Result..." value={firstNum && secondNum && parseInt(firstNum)+parseInt(secondNum)}/>
      {firstNum && secondNum && <p>Result: {firstNum} + {secondNum} = {parseInt(firstNum)+parseInt(secondNum)} </p>}
      {firstNum && secondNum && <button onClick={clearFields}>Clear</button>}
    </div>
  )
}

export default Adder;