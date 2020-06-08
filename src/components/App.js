import React from 'react';
import QuestionList from './QuestionList';
import ScoreDetail from './ScoreDetail';
import { Segment } from 'semantic-ui-react';

const App = () => {
  console.log('inside App');
  return (
    <div className="ui container grid">
      <div className="ui row">
        
          <div className="column ten wide">
          <Segment style={{overflow: 'auto', maxHeight: 500 }}>
            <QuestionList />
          </ Segment>
          </div>
        <div className="column eight wide">
          <ScoreDetail />
        </div>
      </div>
    </div>
  );
};

export default App;