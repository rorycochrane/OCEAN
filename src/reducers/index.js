import { combineReducers } from 'redux';

const questionsReducer = () => {
    return [
        { text: 'I am the life of the party', loc: 0 },
        { text: 'I don\'t talk a lot', loc: 1 },
        { text: 'I feel comfortable around people', loc: 2 },
        { text: 'I keep in the background', loc: 3 },
        { text: 'I start conversations', loc: 4 },
        { text: 'I have little to say', loc: 5 },
        { text: 'I talk to a lot of different people at parties', loc: 6 },
        { text: 'I don\'t like to draw attention to myself', loc: 7 },
        { text: 'I don\'t mind being the center of attention', loc: 8 },
        { text: 'I am quiet around strangers', loc: 9 },
        { text: 'I get stressed out easily', loc: 10 },
        { text: 'I am relaxed most of the time', loc: 11 },
        { text: 'I worry about things', loc: 12 },
        { text: 'I seldom feel blue.', loc: 13 },
        { text: 'I am easily disturbed', loc: 14 },
        { text: 'I get upset easily', loc: 15 },
        { text: 'I change my mood a lot', loc: 16 },
        { text: 'I have frequent mood swings', loc: 17 },
        { text: 'I get irritated easily', loc: 18 },
        { text: 'I often feel blue', loc: 19 },
        { text: 'I feel little concern for others', loc: 20 },
        { text: 'I am interested in people', loc: 21 },
        { text: 'I insult people', loc: 22 },
        { text: 'I sympathize with others\' feelings', loc: 23 },
        { text: 'I am not interested in other people\'s problems', loc: 24 },
        { text: 'I have a soft heart', loc: 25 },
        { text: 'I am not really interested in others', loc: 26 },
        { text: 'I take time out for others', loc: 27 },
        { text: 'I feel others\' emotions', loc: 28 },
        { text: 'I make people feel at ease', loc: 29 },
        { text: 'I am always prepared', loc: 30 },
        { text: 'I leave my belongings around', loc: 31 },
        { text: 'I pay attention to details', loc: 32 },
        { text: 'I make a mess of things', loc: 33 },
        { text: 'I get chores done right away', loc: 34 },
        { text: 'I often forget to put things back in their proper place', loc: 35 },
        { text: 'I like order', loc: 36 },
        { text: 'I shirk my duties', loc: 37 },
        { text: 'I follow a schedule', loc: 38 },
        { text: 'I am exacting in my work', loc: 39 },
        { text: 'I have a rich vocabulary', loc: 40 },
        { text: 'I have difficulty understanding abstract ideas', loc: 41 },
        { text: 'I have a vivid imagination', loc: 42 },
        { text: 'I am not interested in abstract ideas', loc: 43 },
        { text: 'I have excellent ideas', loc: 44 },
        { text: 'I do not have a good imagination', loc: 45 },
        { text: 'I am quick to understand things', loc: 46 },
        { text: 'I use difficult words', loc: 47 },
        { text: 'I spend time reflecting on things', loc: 48 },
        { text: 'I am full of ideas', loc: 49 }
    ];
};

const answersReducer = (answers = Array(50).fill(2), action) => {
    const newAnswers = answers.slice();
    if (action.type === 'CHANGE_SCORE') {
        newAnswers[action.payload.score.loc] = action.payload.val;
        return newAnswers;
    }
    
    return newAnswers;
};

const scoreReducer = (displayScore=false, action) => {
    if (action.type === 'DISPLAY_SCORE'){
        return action.payload;
    }
    return displayScore;
};

export default combineReducers({
  questions: questionsReducer,
  answers: answersReducer,
  displayScore: scoreReducer
});