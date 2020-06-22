import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayScore } from '../actions';
import {XYPlot, VerticalBarSeries} from 'react-vis';


const flip = (num) => {
  return 4-num;
}

// class BarGraph extends Component {
//   render() {
//     const data = [
//       {x: 0, y: 8},
//       {x: 1, y: 5},
//       {x: 2, y: 4},
//       {x: 3, y: 9},
//       {x: 4, y: 1}
//     ];
//     return (
//       <div className="App">
//         <XYPlot height={200} width={200}>
//             <VerticalBarSeries data={data} />
//         </XYPlot>
//       </div>
//     );
//   }
// }

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

    const ex = (
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
    )

    const neu = (
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
    )

    const ag = (
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
    )

    const con = (
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
    )

    const op = (
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
    )

    const data = [
            {x: 0, y: op},
            {x: 1, y: con},
            {x: 2, y: ex},
            {x: 3, y: ag},
            {x: 4, y: neu}
          ];
  
    return (
      <div>
      <div>
        <h3>Score:</h3>
        <p>
          Your O-C-E-A-N score is {
            Math.round((op-0.01)/10)
          }-{
            Math.round((con-0.01)/10)
          }-{
            Math.round((ex-0.01)/10)
          }-{
            Math.round((ag-0.01)/10)
          }-{
            Math.round((neu-0.01)/10)
          }
        </p>
      </div>
      <div className="ui container grid">
        <div className="column eight wide">
          <br />
          Extraversion: {ex} %
          <br />
          Neuroticism: {neu} %
          <br />
          Agreeableness: {ag} %
          <br />
          Conscientiousness: {con} %
          <br />
          Openness: {op} %
        </div>
        <div className="column eight wide">
        <div>
          <XYPlot height={200} width={200}>
            <VerticalBarSeries data={data} />
          </XYPlot>
        </div>
        </div>
      </div>
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
