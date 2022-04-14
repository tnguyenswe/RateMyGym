/** @jsxImportSource theme-ui */
import React from 'react';
import PreviewCards from '../PreviewCards';
import { Flex } from 'theme-ui';
import Headline from '../Headline';
import Reviews from '../Reviews';

const Body = () => {
    return (
        <Flex sx={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'start' }}>
            <Headline scale="h3" sx={{ fontWeight: '600', pb: '50px' }}>Top Rated Gyms</Headline>
            <PreviewCards />
            <Reviews titleText="24 Hour Fitness" bodyText="This was a really good gym to go to" rating={5} />
        </Flex>
    )
}

export default Body;