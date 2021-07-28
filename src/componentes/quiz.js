import React from "react";
import { quizzes } from "../quizzes";
import { shuffle } from "../utiles/shuffle";
import Question from "./Question";
import Result from "./resultado";
import "../styles.css";

class Quiz extends React.Component {
  state = {
    currentQuiz: 0,
    numOfQuestions: 0,
    score: 0,
    resultSummary: false,
    animation: false
  };

  applyAnimation = () => {
    return !this.state.animation
      ? this.setState({ animation: "multiple-choices" })
      : this.setState({ animation: false });
  };

  handleNextQuestion = (answer) => {
    const { currentQuiz, numOfQuestions, score } = this.state;

    if (answer) {
      this.setState(
        {
          score: score + 1,
          numOfQuestions: numOfQuestions + 1
        },
        this.applyAnimation
      );
    } else {
      this.setState(
        {
          numOfQuestions: numOfQuestions + 1
        },
        this.applyAnimation
      );
    }

    if (numOfQuestions === quizzes[currentQuiz].questions.length - 1) {
      this.setState({
        numOfQuestions,
        resultSummary: true
      });
    }
  };

  handleNextQuiz = () => {
    const { currentQuiz } = this.state;

    if (currentQuiz + 1 === quizzes.length) {
      this.setState({
        resultSummary: false,
        numOfQuestions: 0,
        score: 0,
        currentQuiz: 0
      });
    } else {
      this.setState({
        resultSummary: false,
        numOfQuestions: 0,
        score: 0,
        currentQuiz: currentQuiz + 1
      });
    }
  };

  render() {
    const {
      currentQuiz,
      numOfQuestions,
      score,
      resultSummary,
      animation
    } = this.state;

    const { title, questions } = quizzes[currentQuiz];
    const currentQuestion = questions[numOfQuestions];

    const shuffledAnswerChoices = shuffle([
      ...currentQuestion.incorrectAnswers,
      currentQuestion.correctAnswer
    ]);

    return (
      <div className="container">
        <h1>{title}</h1>
        {resultSummary ? (
          <Result
            score={score}
            numOfQuestions={numOfQuestions}
            nextQuizHandler={this.handleNextQuiz}
          />
        ) : (
          <Question
            currentQuestion={currentQuestion}
            shuffledAnswerChoices={shuffledAnswerChoices}
            nextQuestionHandler={this.handleNextQuestion}
            animation={animation}
          />
        )}
      </div>
    );
  }
}

export default Quiz;
