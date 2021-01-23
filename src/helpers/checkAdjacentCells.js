import getAdjacentCells from "./getAdjacentCells";
import containsObject from "./containsObject";

const checkAdjacentCells = (event, data, ColToCheck, RowToCheck) => {
    let clicked = null;
    if (event !== null) {
        clicked = {
            col: parseInt(event.target.dataset.col),
            row: parseInt(event.target.dataset.row),
            get color() {
                return data[this.col][this.row]
            },
        };
    }
    else {
        clicked = {
            col: ColToCheck,
            row: RowToCheck,
            get color() {
                return data[this.col][this.row]
            },
        };
    }

    const findCellsWithTheSameColorAdjacent = (col, row) => getAdjacentCells(data, col, row).filter(block => block.color === clicked.color)
    let cellsWithTheSameColors = findCellsWithTheSameColorAdjacent(clicked.col, clicked.row)
    const cellsToDelete = [{ ...clicked }]
    while (cellsWithTheSameColors.length) {
        findCellsWithTheSameColorAdjacent(cellsWithTheSameColors[0].col, cellsWithTheSameColors[0].row).map(item => {
            if (!containsObject(cellsToDelete, item)) {
                cellsWithTheSameColors.push(item)
            }
        })
        if (!containsObject(cellsToDelete, cellsWithTheSameColors[0])) {
            cellsToDelete.push(cellsWithTheSameColors[0])
        }
        cellsWithTheSameColors.shift()
    }

    return cellsToDelete
}

export default checkAdjacentCells;