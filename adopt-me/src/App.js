import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

// create a component
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Markiza" animal="Dog" breed="Collie" />
      <Pet name="Gosha" animal="Cat" breed="Mixed" />
      <Pet name="Pepper" animal="Bird" breed="Parrot" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
