import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


function Lake({ name }) {
  return (
    <h1>{name}</h1>
  )
}
function App() {
   return (<div>
     <Lake name="Lake Tahoe" />
     <Lake name="Lake Lanier" />
     <Lake name="Crystal Lake" />
   </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);
