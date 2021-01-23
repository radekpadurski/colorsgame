import getRandomColor from "./getRandomColor";



const generateBoardItems = (cols, rows, level) => {
    const itemsCount = cols * rows;
    const boardItems = Array.from(Array(cols), () => []);
    for (let i = 0; i < itemsCount; i++) {
        const color = getRandomColor(level);
        const colIndex = [Math.floor(i / rows)];
        boardItems[colIndex].push(color);
    }
    return boardItems
}

export default generateBoardItems;