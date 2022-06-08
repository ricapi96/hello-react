import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Hello({ library, message, number }) {
  
  return (
    <div>
      <h1>Welcome to {library}!</h1>
      <p>{message}</p>
      <p>How many number of props is {number}</p>
      <p>{number} Props Total</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello 
  library="React" 
  message="add dynamic data!" 
  number={3} />);
