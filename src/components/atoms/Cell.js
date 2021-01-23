import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { changeBlocks } from "./../../actions";
import checkAdjacentCells from "./../../helpers/checkAdjacentCells";

const StyledCell = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
  background-color: ${props => props.color};
  padding:1px 1px;
  margin:1px 1px;
  transition: transform .2s;
  grid-auto-flow: column;

  &:hover {
    border:3px solid;
    border-color:#ff7000;
    transform: scale(1.05);
  }
`

const Cell = ({ color, col, row }) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.board)

  const handleClick = event => {
    const toDelete = checkAdjacentCells(event, data)
    toDelete.length > 1 && dispatch(changeBlocks(toDelete))
  }

  return <StyledCell color={color} data-col={col} data-row={row} onClick={handleClick} />
}

export default Cell;