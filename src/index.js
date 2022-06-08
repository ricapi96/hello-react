import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const lakeList = [
  "Lake Juliette", 
  "Erica Lake", 
  "Lady Lake"
];

function App({ lakes }) {
   return (
     <ul>
       {lakes.map(lake => <li>{lake}</li>)}
     </ul>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App lakes={lakeList}/>
);
