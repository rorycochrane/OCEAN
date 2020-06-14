import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayScore } from '../actions';


const flip = (num) => {
  return 4-num;
}

class ScoreDetail extends Component {
  render() {
    if (!this.props.display) {
          return <div>
              <button
              className="ui button primary"
              onClick={() => this.props.displayScore(true)}
              >
                Submit
              </button>
          </div>
        }
    return (
      <div>
        <h3>Score:</h3>
        <p>
          Extraversion: {
            Math.round((this.props.answers[0]
            +flip(this.props.answers[1])
            +this.props.answers[2]
            +flip(this.props.answers[3])
            +this.props.answers[4]
            +flip(this.props.answers[5])
            +this.props.answers[6]
            +flip(this.props.answers[7])
            +this.props.answers[8]
            +flip(this.props.answers[9]))/4*100)/10
          }%
          <br />
          Neuroticism: {
            Math.round((this.props.answers[10]
            +flip(this.props.answers[11])
            +this.props.answers[12]
            +flip(this.props.answers[13])
            +this.props.answers[14]
            +this.props.answers[15]
            +this.props.answers[16]
            +this.props.answers[17]
            +this.props.answers[18]
            +this.props.answers[19])/4*100)/10
          }%
          <br />
          Agreeableness: {
            Math.round((flip(this.props.answers[20])
            +this.props.answers[21]
            +flip(this.props.answers[22])
            +this.props.answers[23]
            +flip(this.props.answers[24])
            +this.props.answers[25]
            +flip(this.props.answers[26])
            +this.props.answers[27]
            +this.props.answers[28]
            +this.props.answers[29])/4*100)/10
          }%
          <br />
          Conscientiousness: {
            Math.round((this.props.answers[30]
            +flip(this.props.answers[31])
            +this.props.answers[32]
            +flip(this.props.answers[33])
            +this.props.answers[34]
            +flip(this.props.answers[35])
            +this.props.answers[36]
            +flip(this.props.answers[37])
            +this.props.answers[38]
            +this.props.answers[39])/4*100)/10
          }%
          <br />
          Openness: {
            Math.round((this.props.answers[40]
            +flip(this.props.answers[41])
            +this.props.answers[42]
            +flip(this.props.answers[43])
            +this.props.answers[44]
            +flip(this.props.answers[45])
            +this.props.answers[46]
            +this.props.answers[47]
            +this.props.answers[48]
            +this.props.answers[49])/4*100)/10
          }%
        </p>
      </div>
    );
  };
};

const mapStateToProps = state => {
  console.log('SongDetail map state to props');
  console.log('displayScore = ' + state.displayScore);
  console.log('answers = ' + state.answers);
  return { answers: state.answers, display : state.displayScore };
};

export default connect(mapStateToProps, { displayScore })(ScoreDetail);
