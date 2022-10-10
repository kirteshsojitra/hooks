import {useEffect, useState} from "react";

function Hook3() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    setTimeout(() => setNumber((number) => number + 1), 1000);
  }, [number]);
  return <div>{number}</div>;
}

export default Hook3;
