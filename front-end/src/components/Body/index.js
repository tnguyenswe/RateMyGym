/** @jsxImportSource theme-ui */
import React from 'react';
import PreviewCards from '../PreviewCards';
import {Flex} from 'theme-ui';
import Headline from '../Headline';

const Body = () => {
    return(
        <Flex sx={{justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'start'}}>
            <Headline scale="h3" sx={{fontWeight: '600', pb: '50px'}}>Top Rated Gyms</Headline>
            <PreviewCards />
        </Flex>
    )
}

export default Body;