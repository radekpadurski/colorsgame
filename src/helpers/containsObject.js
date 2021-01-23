const containsObject = (array, object) => array.some(item => item.col === object.col && item.row === object.row)

export default containsObject;