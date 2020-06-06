import React from 'react';
import QuestionList from './QuestionList';
import ScoreDetail from './ScoreDetail';

const App = () => {
  console.log('inside App');
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column ten wide">
          <QuestionList />
        </div>
        <div className="column eight wide">
          <ScoreDetail />
        </div>
      </div>
    </div>
  );
};

export default App;