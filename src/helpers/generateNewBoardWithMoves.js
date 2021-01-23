import generateBoardItems from "./generateBoardItems";
import checkAdjacentCells from "./checkAdjacentCells";

const generateNewBoardWithMoves = (cols, rows, level) => {
    let newGameBoard = null;
    let isAnyMoves = true;
    while (isAnyMoves) {
        newGameBoard = generateBoardItems(cols, rows, level)
        isAnyMoves = true;
        for (let indexCol = 0; indexCol < cols; indexCol++) {
            for (let indexRow = 0; indexRow < rows; indexRow++) {
                if (isAnyMoves) {
                    if (checkAdjacentCells(null, newGameBoard, indexCol, indexRow).length > 1) {
                        isAnyMoves = false;
                    }
                }
            }
        }
    }
    return newGameBoard;
}

export default generateNewBoardWithMoves;