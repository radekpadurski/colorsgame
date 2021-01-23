import checkAdjacentCells from "./checkAdjacentCells";

const checkGameOver = (cols, rows, board) => {
    let isGameOver = true;
    for (let indexCol = 0; indexCol < cols; indexCol++) {
        for (let indexRow = 0; indexRow < rows; indexRow++) {
            if (isGameOver) {
                if (checkAdjacentCells(null, board, indexCol, indexRow).length > 1) {
                    isGameOver = false;
                }
            }
        }
    }
    return isGameOver;
}

export default checkGameOver;