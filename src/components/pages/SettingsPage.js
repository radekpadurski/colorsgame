import React from 'react';
import Settings from '../organisms/Settings';
import BackButton from '../atoms/BackButton';
import NavigationWrapper from '../atoms/NavigationWrapper';

function SettingsPage() {
    return (
        <>
            <NavigationWrapper>
                <BackButton />
            </NavigationWrapper>
            <Settings />
        </>
    )
}

export default SettingsPage;