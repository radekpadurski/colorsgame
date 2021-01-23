const deleteCells = (board, col, row) => {
    return board.map((prevCol, prevColIndex) => {
        if (prevColIndex === col) {
            return board[col].map((color, index) => index === row ? "white" : color)
        }
        return prevCol;
    })
}

export default deleteCells;