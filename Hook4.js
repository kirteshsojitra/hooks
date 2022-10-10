import {useMemo, useState} from "react";

function Hook4() {
  const [number, setNumber] = useState(0);
  const [item, setItem] = useState(0);

  const nameUseEffect = useMemo(() => {
    console.warn("fd");
  }, [number]);

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      {check}
      <button onClick={() => setItem(item + 1)}>{item}</button>
    </div>
  );
}

export default Hook4;
