import React from 'react';
import NavigationWrapper from "./../atoms/NavigationWrapper";
import Game from "./../organisms/Game";
import { giveUp } from "./../../actions"
import { useSelector, useDispatch } from "react-redux";
import NewHighScore from "./../molecules/NewHighScore";
import BackButton from "./../atoms/BackButton";
import Button from "./../atoms/Button";

function GamePage() {
    let isGameOver = useSelector(state => state.gameOver)
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(giveUp())
    }
    if (!isGameOver) {
        return (
            <>
                <NavigationWrapper>
                    <BackButton />
                    <Button onClick={handleClick} to="/Game">Give Up</Button>
                </NavigationWrapper>
                <Game />
            </>
        )
    }
    else {
        return (
            <NewHighScore />);
    }
}

export default GamePage;