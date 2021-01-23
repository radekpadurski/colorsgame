import styled from "styled-components";

const StyledButton = styled.button`
color: black;
  transition: 0.25s;
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em auto;
  padding: 1em 2em;
  cursor: pointer;

:hover , :focus{
    border-color: #ff7000;
    color: #fff;
  box-shadow: inset 6.5em 0 0 0 #ff7000;
}
`
export default StyledButton;