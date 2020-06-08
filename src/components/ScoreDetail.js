import React from 'react';
import { connect } from 'react-redux';

const flip = (num) => {
  return 4-num;
}

const ScoreDetail = ({ answers, displayScore }) => {
  console.log('inside Score Detail function');
  console.log('displayScore = ' + displayScore);
  if (!displayScore) {
    return <div>Fill out the survey, then click Submit</div>;
  }
  return (
    <div>
      <h3>Score:</h3>
      <p>
        Extraversion: {
          Math.round((answers[0]
          +flip(answers[1])
          +answers[2]
          +flip(answers[3])
          +answers[4]
          +flip(answers[5])
          +answers[6]
          +flip(answers[7])
          +answers[8]
          +flip(answers[9]))/4*100)/10
        }%
        <br />
        Neuroticism: {
          (answers[10]
          +flip(answers[11])
          +answers[12]
          +flip(answers[13])
          +answers[14]
          +answers[15]
          +answers[16]
          +answers[17]
          +answers[18]
          +answers[19])/40*100
        }%
        <br />
        Agreeableness: {
          (flip(answers[20])
          +answers[21]
          +flip(answers[22])
          +answers[23]
          +flip(answers[24])
          +answers[25]
          +flip(answers[26])
          +answers[27]
          +answers[28]
          +answers[29])/40*100
        }%
        <br />
        Conscientiousness: {
          (answers[30]
          +flip(answers[31])
          +answers[32]
          +flip(answers[33])
          +answers[34]
          +flip(answers[35])
          +answers[36]
          +flip(answers[37])
          +answers[38]
          +answers[39])/40*100
        }%
        <br />
        Openness: {
          (answers[40]
          +flip(answers[41])
          +answers[42]
          +flip(answers[43])
          +answers[44]
          +flip(answers[45])
          +answers[46]
          +answers[47]
          +answers[48]
          +answers[49])/40*100
        }%
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('SongDetail map state to props');
  console.log('displayScore = ' + state.displayScore);
  console.log('answers = ' + state.answers);
  return { answers: state.answers, displayScore : state.displayScore };
};

export default connect(mapStateToProps)(ScoreDetail);




// import React from 'react';
// import { connect } from 'react-redux';

// const SongDetail = ({ song }) => {
//   if (!song) {
//     return <div>Select a song</div>;
//   }

//   return (
//     <div>
//       <h3>Details for:</h3>
//       <p>
//         Title: {song.title}
//         <br />
//         Duration: {song.duration}
//       </p>
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return { song: state.selectedSong };
// };

// export default connect(mapStateToProps)(SongDetail);

