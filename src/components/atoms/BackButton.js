import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from "./Button"

const StyledLink = styled(Link)`
text-decoration: none;
color:black;
width:100%;
height:100%;
`;

const handleClick = () => {
  document.getElementById('backbutton').click();
}

function BackButton() {
  return (
    <Button onClick={handleClick}>
      <StyledLink id={"backbutton"} to="/">BACK</StyledLink>
    </Button>
  )
}

export default BackButton;