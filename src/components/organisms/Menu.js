import React from 'react';
import styled from "styled-components";
import Link from "./../atoms/Link"

const NavContainer = styled.div`
display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: white;
`

const NavItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

const NavItem = styled.li`
padding: 6px 0;

`



export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <NavContainer>
                    <NavItemWrapper>
                        <NavItem>
                            <Link to="/Game">Game</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/HighScore">HighScore</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/Settings">Settings</Link>
                        </NavItem>
                    </NavItemWrapper>
                </NavContainer>
            </nav>
        );
    }
}