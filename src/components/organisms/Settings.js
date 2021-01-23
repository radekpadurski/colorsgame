import React from "react";
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { changeSettings as updateSettings } from '../../actions';
import Button from "./../atoms/Button"
import { Header2 } from "./../atoms/Header"

const SettingsContainer = styled.div`
display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: white;
`

const SettingsListWrapper = styled.div`
display: flex;
flex-direction: column;
list-style-type: none;
`

const SettingsListItem = styled.div`
margin:20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SettingsField = styled.div`
display:flex;

option{
    font-size:3rem;
  border: none;
  align-items: center;
}

option:active{
}

select {
    font-size:3rem;
  align-items: center;
  border: none;
color:#ff7000;
}

select::after {
  border-color: #fff transparent transparent transparent;
}
`
const StyledButtonWrapper = styled.div`
margin-top:30px;
`




function Settings({ settings, changeSettings }) {
    return (
        <>
            <Formik
                initialValues={{ rows: settings.rows, cols: settings.cols, lvl: settings.lvl }}
                onSubmit={
                    values => {
                        values.rows = parseInt(values.rows);
                        values.cols = parseInt(values.cols);
                        values.lvl = parseInt(values.lvl);
                        changeSettings(values);
                        document.getElementById('gotomenu').click()
                    }}
            >
                {({ values }) => (
                    <Form>
                        <SettingsContainer>
                            <SettingsListWrapper>
                                <SettingsListItem>
                                    <Header2>Number of rows:</Header2>
                                    <SettingsField>
                                        <Field name="rows" component="select" value={values.rows}>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                            <option value={11}>11</option>
                                            <option value={12}>12</option>
                                            <option value={13}>13</option>
                                            <option value={14}>14</option>
                                            <option value={15}>15</option>
                                        </Field>
                                    </SettingsField>
                                </SettingsListItem>
                                <SettingsListItem>
                                    <Header2>Number of cols:</Header2>
                                    <SettingsField>
                                        <Field name="cols" component="select" value={values.cols} >
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                            <option value={11}>11</option>
                                            <option value={12}>12</option>
                                            <option value={13}>13</option>
                                            <option value={14}>14</option>
                                            <option value={15}>15</option>
                                        </Field>
                                    </SettingsField>
                                </SettingsListItem>
                                <SettingsListItem>
                                    <Header2>How many colors:</Header2>
                                    <SettingsField>
                                        <Field name="lvl" component="select" value={values.lvl}>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={3}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                            <option value={11}>11</option>
                                            <option value={12}>12</option>
                                            <option value={13}>13</option>
                                            <option value={14}>14</option>
                                            <option value={15}>15</option>
                                        </Field>
                                    </SettingsField>
                                </SettingsListItem>
                                <StyledButtonWrapper>
                                    <Button type="submit">Save</Button>
                                    <Link id={"gotomenu"} className="hidden" to="/"></Link>
                                </StyledButtonWrapper>
                            </SettingsListWrapper>
                        </SettingsContainer>
                    </Form>)}
            </Formik>
        </>);

}


const mapDispatchToProps = dispatch => ({
    changeSettings: (NewSettings) => dispatch(updateSettings(NewSettings)),
});

function mapStateToProps(state) {
    const { settings } = state;
    return { settings: settings }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
