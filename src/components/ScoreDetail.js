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
            (this.props.answers[10]
            +flip(this.props.answers[11])
            +this.props.answers[12]
            +flip(this.props.answers[13])
            +this.props.answers[14]
            +this.props.answers[15]
            +this.props.answers[16]
            +this.props.answers[17]
            +this.props.answers[18]
            +this.props.answers[19])/40*100
          }%
          <br />
          Agreeableness: {
            (flip(this.props.answers[20])
            +this.props.answers[21]
            +flip(this.props.answers[22])
            +this.props.answers[23]
            +flip(this.props.answers[24])
            +this.props.answers[25]
            +flip(this.props.answers[26])
            +this.props.answers[27]
            +this.props.answers[28]
            +this.props.answers[29])/40*100
          }%
          <br />
          Conscientiousness: {
            (this.props.answers[30]
            +flip(this.props.answers[31])
            +this.props.answers[32]
            +flip(this.props.answers[33])
            +this.props.answers[34]
            +flip(this.props.answers[35])
            +this.props.answers[36]
            +flip(this.props.answers[37])
            +this.props.answers[38]
            +this.props.answers[39])/40*100
          }%
          <br />
          Openness: {
            (this.props.answers[40]
            +flip(this.props.answers[41])
            +this.props.answers[42]
            +flip(this.props.answers[43])
            +this.props.answers[44]
            +flip(this.props.answers[45])
            +this.props.answers[46]
            +this.props.answers[47]
            +this.props.answers[48]
            +this.props.answers[49])/40*100
          }%
        </p>
      </div>
    );
  };
};

// const ScoreDetail = ({ answers, display }) => {
//   console.log('inside Score Detail function');
//   console.log('displayScore = ' + display);
//   if (!display) {
//     return <div>
//         <button
//         className="ui button primary"
//         onClick={() => displayScore(true)}
//         >
//           Submit
//         </button>
//     </div>
//   }
//   return (
//     <div>
//       <h3>Score:</h3>
//       <p>
//         Extraversion: {
//           Math.round((answers[0]
//           +flip(answers[1])
//           +answers[2]
//           +flip(answers[3])
//           +answers[4]
//           +flip(answers[5])
//           +answers[6]
//           +flip(answers[7])
//           +answers[8]
//           +flip(answers[9]))/4*100)/10
//         }%
//         <br />
//         Neuroticism: {
//           (answers[10]
//           +flip(answers[11])
//           +answers[12]
//           +flip(answers[13])
//           +answers[14]
//           +answers[15]
//           +answers[16]
//           +answers[17]
//           +answers[18]
//           +answers[19])/40*100
//         }%
//         <br />
//         Agreeableness: {
//           (flip(answers[20])
//           +answers[21]
//           +flip(answers[22])
//           +answers[23]
//           +flip(answers[24])
//           +answers[25]
//           +flip(answers[26])
//           +answers[27]
//           +answers[28]
//           +answers[29])/40*100
//         }%
//         <br />
//         Conscientiousness: {
//           (answers[30]
//           +flip(answers[31])
//           +answers[32]
//           +flip(answers[33])
//           +answers[34]
//           +flip(answers[35])
//           +answers[36]
//           +flip(answers[37])
//           +answers[38]
//           +answers[39])/40*100
//         }%
//         <br />
//         Openness: {
//           (answers[40]
//           +flip(answers[41])
//           +answers[42]
//           +flip(answers[43])
//           +answers[44]
//           +flip(answers[45])
//           +answers[46]
//           +answers[47]
//           +answers[48]
//           +answers[49])/40*100
//         }%
//       </p>
//     </div>
//   );
// };

const mapStateToProps = state => {
  console.log('SongDetail map state to props');
  console.log('displayScore = ' + state.displayScore);
  console.log('answers = ' + state.answers);
  return { answers: state.answers, display : state.displayScore };
};

export default connect(mapStateToProps, { displayScore })(ScoreDetail);
