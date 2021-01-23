import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';

const TabeleContainer = styled.div`
display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: white;
`

const TabeleWrapper = styled.div`
display: table;
`;

const ScoreTabeleHead = styled.div`
display: table-row;
font-weight: bold;
text-align: center;
font-size:3rem;
`;

const ScoreTableBody = styled.div`
display: table-row;
font-size:2rem;
`;

const ScoreTableCell = styled.div`
display: table-cell;
border: solid;
border-width: thin;
padding-left: 5px;
padding-right: 5px;
`;

function HighScoreTabele({ highscorelist }) {
    let sortList = highscorelist.sort((a, b) => Number(b.score) - Number(a.score))
    const list = (
        <>
            <ScoreTabeleHead>
                <ScoreTableCell>Name:</ScoreTableCell>
                <ScoreTableCell>Score:</ScoreTableCell>
            </ScoreTabeleHead>
            {sortList.map((ScoreItem) =>
                <ScoreTableBody key={ScoreItem.id}>
                    <ScoreTableCell>{ScoreItem.name}</ScoreTableCell>
                    <ScoreTableCell>{ScoreItem.score}</ScoreTableCell>
                </ScoreTableBody>
            )}
        </>
    )
    return (
        <TabeleContainer>
            <TabeleWrapper>
                {list}
            </TabeleWrapper>
        </TabeleContainer>
    );
}

const mapStateToProps = ({ highscorelist }) => ({ highscorelist });


export default connect(mapStateToProps)(HighScoreTabele);
