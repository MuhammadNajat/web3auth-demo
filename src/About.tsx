import React from 'react';
import { Trans } from 'react-i18next';

function About() {
    return (
        <div>
            <p id='companyIntro'>
                <Trans i18nKey="description.part5">Wind is a team of designers, engineers, and founders which is dedicated to making borderless payments a reality for everyone. Their mission is to set people's money as free as the wind.
Their mission is to empower creators, entrepreneurs and businesses of the new age to go beyond borders and limits.</Trans>
            </p>
        </div>
    );
};

export default About;