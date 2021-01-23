import { COLORS } from "./../constants";

const getRandomColor = (level) => COLORS[Math.floor(Math.random() * level)]

export default getRandomColor;