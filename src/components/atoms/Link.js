import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`

position: relative;
  display: block;
  text-decoration: none;
  font-size: 4rem;
  color: black;
  text-transform: uppercase;
  padding: 4px 0;
  transition: 0.5s;

::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 3px;
  top: 100%;
  left: 0;
  background: #ff7000;
  transition: transform 0.5s;
  transform: scaleX(0);
  transform-origin: right;
}

:hover {
  color: #95a5a6;
}

:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
`

export default StyledLink;