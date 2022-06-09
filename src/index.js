import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function England() {
  return (
    <div>
      <h1>Visit Stonehenge!</h1>
    </div>
  );
}

function London() {
  return (
    <div>
      <h1>Visit Buckingham Palace!</h1>
    </div>
  );
}

function App(props) {
  if(props.tour === "country") {
    return <England />;
  } else if (props.tour === "city") {
  return <London />;
}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App tour="country"/>
);
