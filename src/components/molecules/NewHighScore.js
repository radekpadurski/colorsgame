import React from "react";
import styled from "styled-components";
import { Formik, Form } from 'formik';
import { connect, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { addHighScore as addItemAction } from './../../actions';
import Button from "./../atoms/Button";

import { Header1, Header2 } from "./../atoms/Header";
import Input from "./../atoms/Input";
import NavigationWrapper from "./../atoms/NavigationWrapper";
import BackButton from "./../atoms/BackButton";

const StyledHighWrapper = styled.div`
position: relative;
top:35vh;
display:flex;
justify-content:center;
align-items:center;
width:100%;
flex-direction: column;
`

const StyledHighScore = styled.div`
`

const StyledForm = styled(Form)`
margin: 0 auto;
width:400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HiddenLink = styled(Link)`
display:none!important;
`;


function NewHighScore({ addItem }) {
    const score = useSelector(state => state.score)
    return (
        <>
            <NavigationWrapper>
                <BackButton />
            </NavigationWrapper>
            <StyledHighWrapper>
                <StyledHighScore>
                    <Header1>Congratulations,</Header1>
                    <Header2>Your score is: {score}! enter name:</Header2>
                    <Formik
                        initialValues={{ name: '', score: '' + score }}
                        onSubmit={values => {
                            addItem(values);
                            document.getElementById('gotohighscore').click()
                        }}
                    >
                        {({ values }) => (
                            <StyledForm>
                                <Input placeholder="Your Name" name="name" value={values.name} />
                                <Button type="submit">OK</Button>
                                <HiddenLink id={"gotohighscore"} to="/HighScore"></HiddenLink>
                            </StyledForm>)}
                    </Formik>
                </StyledHighScore>
            </StyledHighWrapper>
        </>);
}

const mapDispatchToProps = dispatch => ({
    addItem: (score) => dispatch(addItemAction(score)),
});


export default connect(null, mapDispatchToProps)(NewHighScore);
