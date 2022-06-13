import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Checkbox() {
  const [checked, setChecked] = useState(true);
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });
  
  
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Checkbox />);
