import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledScore = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-top: 10vh;
`
const Score = () => {
    const score = useSelector(state => state.score)
    return <StyledScore>Your score: {score}</StyledScore>
}

export default Score;