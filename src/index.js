import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./componentes/Quiz";

const App = () => {
  return (
    <div className="app">
      <Quiz />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
