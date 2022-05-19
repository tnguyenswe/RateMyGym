/** @jsxImportSource theme-ui */
import React from 'react';
import PreviewCards from '../PreviewCards';
import { Flex, Image } from 'theme-ui';
import Headline from '../Headline';
import Reviews from '../Reviews';
import { Link } from "react-router-dom";
import GymBuddyImage from '../../images/gymbuddy_image.png';
import SearchBar from '../SearchBar';
const Body = () => {
    return (
        <Flex sx={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'start' }}>
            {/* <Headline scale="h3" sx={{ fontWeight: '600', pb: '50px' }}>Top Rated Gyms</Headline>
            <PreviewCards /> */}
            <SearchBar/>
            <Headline scale="h3" sx={{ fontWeight: '600', pt: '50px' }}>Gym Buddy Finder</Headline>
            <Link to="/gymBuddy"><Image src={GymBuddyImage} sx={{ maxHeight: '300px' }} /></Link>
            {/* <Link to="/expenses">Expenses</Link> */}
            {/* <Reviews titleText="24 Hour Fitness" bodyText="This was a really good gym to go to" rating={5} /> */}
        </Flex>
    )
}

export default Body;