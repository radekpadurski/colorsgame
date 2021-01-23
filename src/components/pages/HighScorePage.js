import React from 'react';
import BackButton from '../atoms/BackButton';
import NavigationWrapper from '../atoms/NavigationWrapper';
import HighScoreTabele from '../organisms/HighScoreTabele';

function HighScorePage() {

    return (
        <>
            <NavigationWrapper>
                <BackButton />
            </NavigationWrapper>
            <HighScoreTabele />
        </>
    )
}

export default HighScorePage;