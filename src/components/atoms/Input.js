import styled from "styled-components";
import { Field } from 'formik';


const StyledInput = styled(Field)`
width: 200px;
margin: 0.5em auto;
padding: 16px 28px;
background-color: transparent;
transition: transform 250ms ease-in-out;
line-height: 1;
color: #ff7000;
background-color: transparent;
font-size:15px;

::placeholder {
    color: color(#575756 a(0.8));
    text-transform: uppercase;
    letter-spacing: 1.5px;
}

:hover,
:focus {
    padding: 16px 29px;
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid #ff7000;
    border-radius: 0;
}
`;

export default StyledInput;