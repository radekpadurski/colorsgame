export const changeBlocks = toDelete => ({
    type: "CLICK_HANDLED",
    payload: { toDelete }
});

export const newGame = () => ({
    type: "NEW_GAME",
});

export const giveUp = () => ({
    type: "GIVE_UP",
});

export const changeSettings = newSettings => ({
    type: "UPDATE_SETTINGS",
    payload: { newSettings }
});

export const addHighScore = (score) => {
    const getId = () =>
        `_${Math.random()
            .toString(36)
            .substr(2, 9)}`;
    return {
        type: "ADD_HIGHSCORE",
        payload: {
            id: getId(),
            ...score
        }
    }
};