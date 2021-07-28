import React from "react";
import { getCheers } from "../chers";

const Result = (props) => {
  return (
    <div id="result">
      <p>
        You got <strong>{props.score}</strong> out of{" "}
        <strong>{props.numOfQuestions + 1}</strong> questions correct
      </p>
      <p>{getCheers()}</p>
      <button className="next-btn" onClick={props.nextQuizHandler}>
        Next Quiz
      </button>
    </div>
  );
};

export default Result;
