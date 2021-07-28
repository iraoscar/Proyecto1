import React from "react";
import "../styles.css";

class Question extends React.Component {
  state = {
    pick: false,
    correct: false,
    // bookmark-related
    isBookmarked: false,
    bookmarkedQuestions: []
  };

  correctOrIncorrect = (pick) => {
    if (pick === this.state.pick) {
      return this.state.correct ? "correct" : "incorrect";
    } else if (
      pick === !this.state.correct &&
      this.props.currentQuestion.correctAnswer
    ) {
      return "correct";
    } else {
      return "clear";
    }
  };

  handleSelect = (pick) => {
    if (pick === this.props.currentQuestion.correctAnswer) {
      this.setState({ pick, correct: true });
    } else {
      this.setState({ pick });
    }
  };

  moveToNextQuestion = () => {
    this.setState({ pick: false, correct: false });
    this.props.nextQuestionHandler(this.state.correct);
  };

  // toggleBookmark
  handleBookmark = () => {
    console.log(this.props.currentQuestion);

    this.setState({
      isBookmarked: !this.state.isBookmarked
    });
  };

  render() {
    const { currentQuestion, shuffledAnswerChoices } = this.props;

    return (
      <div className={this.props.animation ? this.props.animation : null}>
        <span>
          <i
            id={currentQuestion}
            className={
              this.state.isBookmarked ? "fa fa-bookmark" : "fa fa-bookmark-o"
            }
            onClick={() => this.handleBookmark()}
          />
        </span>
        <p>{currentQuestion.text}</p>
        <ol type="A">
          {shuffledAnswerChoices.map((pick, idx) => {
            return (
              <li
                key={idx}
                className={
                  this.state.pick ? this.correctOrIncorrect(pick) : null
                }
                onClick={() => this.handleSelect(pick)}
              >
                {pick}
              </li>
            );
          })}
        </ol>
        {this.state.pick && (
          <div>
            {this.state.correct ? (
              <p>
                <i>Correct!</i>
              </p>
            ) : (
              <p>
                <i>Incorrect</i>
              </p>
            )}
            <button className="next-btn" onClick={this.moveToNextQuestion}>
              Next
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Question;
