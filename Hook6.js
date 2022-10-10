import {useRef, useContext} from "react";

function Hook6() {
  let name = useContext(Context);
  let inputRef = useRef(null);
  const handleChange = () => {
    inputRef.current.value = "kirtesh";
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <Context.Consumer>{(value) => <span>{value}</span>}</Context.Consumer>
      <button onClick={handleChange}>change</button>
    </div>
  );
}

export default Hook6;
