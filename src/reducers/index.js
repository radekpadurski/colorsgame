
import moveColors from "./../helpers/moveColors";
import deleteCells from "./../helpers/deleteCells";
import generateNewBoardWithMoves from "./../helpers/generateNewBoardWithMoves";
import checkGameOver from "./../helpers/checkGameOver";

const initialSettings = {
    rows: 5,
    cols: 5,
    lvl: 6,
}
const boardItemsReducer = (
    state = {
        board: null,
        score: 0,
        gameOver: false,
        lastColor: "white",
        settings: initialSettings,
        highscorelist: [],
    },
    action) => {
    switch (action.type) {
        case "GIVE_UP":
            return {
                ...state,
                gameOver: true,
            }
        case "NEW_GAME":
            return {
                ...state,
                board: generateNewBoardWithMoves(state.settings.cols, state.settings.rows, state.settings.lvl),
                score: 0,
                gameOver: false,
                lastColor: "white",
            }
        case "CLICK_HANDLED":
            // generate changed board after click
            action.payload.toDelete.map(item => state.board = deleteCells(state.board, item.col, item.row));
            const newBoard = state.board.map(column => moveColors(column, state.settings.lvl));

            return {
                ...state,
                board: newBoard,
                score: state.score + action.payload.toDelete.length,
                lastColor: action.payload.toDelete[0].color,
                gameOver: checkGameOver(state.settings.cols, state.settings.rows, newBoard),
            }
        case "UPDATE_SETTINGS":
            const UpdateSettings = action.payload.newSettings;
            return {
                ...state,
                settings: UpdateSettings,
            }
        case "ADD_HIGHSCORE":
            return {
                ...state,
                gameOver: false,
                highscorelist: [...state.highscorelist, action.payload],
            }
        default:
            return state;
    }
}

export default boardItemsReducer;