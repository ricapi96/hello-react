import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Hello(props) {
  console.log(Object.keys(props));
  return (
    <div>
      <h1>Welcome to {props.library}!</h1>
      <p>{props.message}</p>
      <p>How many number of props is {props.number}</p>
      <p>{Object.keys(props).length} Props Total</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello 
  library="Vue" 
  message="Have fun!" 
  number={3} />);
