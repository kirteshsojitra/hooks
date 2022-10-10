import {useCallback, useState} from "react";

const functionCounter = new Set();

function Hook5() {
  const [numberUse, setNumberUse] = useState(0);
  const [otherNumberUse, setOtherNumberUse] = useState(0);

  const increment = useCallback(() => {
    setNumberUse(numberUse + 1);
  }, [numberUse]);

  const decrement = useCallback(() => {
    setNumberUse(numberUse - 1);
  }, [numberUse]);

  const ontherCount = useCallback(() => {
    setOtherNumberUse(otherNumberUse + 1);
  }, [otherNumberUse]);

  functionCounter.add(increment);
  functionCounter.add(decrement);
  functionCounter.add(ontherCount);
  console.log(functionCounter);
  return (
    <div>
      {numberUse}
      <div>{otherNumberUse}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={ontherCount}>another counter</button>
    </div>
  );
}

export default Hook5;
