import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeAnswer } from '../actions';

class QuestionList extends Component {
  renderList() {
    console.log('inside render List');
    return this.props.questions.map(question => {
      return (
        <div className="item" key={question.text}>
          <div className="right floated content">
            <div className="ui form">
              <div className="grouped fields">
                {/* <label>How often do you use checkboxes?</label> */}
                <div className="field">
                  <div className="ui radio checkbox">
                    <input type="radio" name={question.text} onChange={() => this.props.changeAnswer(question, 0)}/>
                    <label>Strongly Disagree</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input type="radio" name={question.text} onChange={() => this.props.changeAnswer(question, 1)}/>
                    <label>Disagree</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input type="radio" name={question.text} onChange={() => this.props.changeAnswer(question, 2)}/>
                    <label>Neutral</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input type="radio" name={question.text} onChange={() => this.props.changeAnswer(question, 3)}/>
                    <label>Agree</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input type="radio" name={question.text} onChange={() => this.props.changeAnswer(question, 4)}/>
                    <label>Strongly Agree</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">{question.text}</div>
        </div>
      );
    });
  }

  render() {
    console.log('inside QuestionList function');
    return (
        <div>
            <div className="ui divided list">
                {this.renderList()}
            </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('SongList map state to props');
  return { questions: state.questions, answers: state.answers, display: state.displayScore };
};

export default connect(
  mapStateToProps,
  { changeAnswer }
)(QuestionList);