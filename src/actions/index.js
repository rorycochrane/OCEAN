export const selectSong = song => {
    console.log('select song action called');
    return {
      type: 'SONG_SELECTED',
      payload: song
    };
};

export const changeAnswer = (score, val) => {
    console.log('change answer action called');
    return {
        type: 'CHANGE_SCORE',
        payload: { score: score, val: val }
    };
};

export const displayScore = (displayScore) => {
    console.log('display score action called');
    console.log('display score = '+ displayScore);
    return {
        type: 'DISPLAY_SCORE',
        payload: displayScore
    };
};
