import React from "react";
import { useDispatch } from "react-redux";
import Board from "./../molecules/Board";
import Score from "./../atoms/Score";
import { newGame } from "./../../actions"


const App = () => {
    const dispatch = useDispatch();
    dispatch(newGame());
    return (
        <>
            <Score />
            <Board />
        </>);

}

export default App;
