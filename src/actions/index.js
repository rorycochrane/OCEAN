export const selectSong = song => {
    return {
      type: 'SONG_SELECTED',
      payload: song
    };
};

export const changeAnswer = (score, val) => {
    return {
        type: 'CHANGE_SCORE',
        payload: { score: score, val: val }
    };
};

export const displayScore = (displayScore) => {
    return {
        type: 'DISPLAY_SCORE',
        payload: displayScore
    };
};
