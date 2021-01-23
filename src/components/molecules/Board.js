import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Cell from "./../atoms/Cell";

const StyledBoard = styled.div`
  width: ${props => props.cols * 104}px;
  height: ${props => props.rows * 104}px;
  margin: 50px auto;
  display:grid;
  grid-auto-flow: column;
grid-template-columns: repeat(${props => props.cols}, auto);
grid-template-rows: repeat(${props => props.rows}, auto);
border:5px solid;
border-color: ${props => props.lastColor};
`

const ErrorInfo = styled.p`
  color: white;
`
const Board = () => {
    const data = useSelector(state => state.board)
    const settings = useSelector(state => state.settings)
    const lastColor = useSelector(state => state.lastColor)

    return (
        <StyledBoard cols={settings.cols} rows={settings.rows} lastColor={lastColor}>
            {!!data ?
                data.map((col, colIndex) => {
                    return col.map((color, rowIndex) => {
                        return <Cell key={`cell-${colIndex}-${rowIndex}`} color={color} col={colIndex} row={rowIndex} />
                    })
                })
                :
                <ErrorInfo>Please refresh page.</ErrorInfo>
            }
        </StyledBoard>
    )
}

export default Board;