import getRandomColor from "./getRandomColor";

const moveColors = (column, level) => {
    const movedColors = []
    const filteredColumn = column.filter(item => {
        if (item === "white") {
            movedColors.push(getRandomColor(level))
            return false
        }
        return true
    })
    movedColors.push(...filteredColumn)

    return movedColors
}

export default moveColors;