/** @jsxImportSource theme-ui */
import { Grid, Text, Label, Box, Input, Textarea, Button, Flex } from "theme-ui";
import React from "react";
import Headline from '../../src/components/Headline';
import SearchBar from '../../src/components/SearchBar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SingleCard from '../components/PreviewCards/SingleCard';


const CardsData = {
    gymName: '24 Hour Fitness',
    gymAddress: '1531 Parkmoor Ave, San Jose CA 95128',
    background: 'https://www.ocregister.com/wp-content/uploads/2017/11/rt_24hrfullerton-27sm.jpg',
    primary: 'https://pbs.twimg.com/profile_images/1032411070000816128/4PDonjr6_400x400.jpg',
};

const NavBar = (props) => {
    // const [titleText, setTitleText] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3001/getReviews')
            .then((res) => {
                res.data.map((obj) => console.log(obj))
            });
    },
        // [titleText, bodyText, rating]
        [bodyText, rating]
    )

    return (
        <Flex sx={{flexDirection: 'column'}}>
            {/* <Headline scale="h1">{titleText} Title Text</Headline>
            <Headline scale="h2">{bodyText} Body Text</Headline>
            <Headline scale="h3">{rating} Rating</Headline> */}

            {/* <Flex sx={{ width: '100%', justifyContent: 'end', px: '30px' }}> */}
            <Grid sx={{ justifyItems: 'center', alignItems: 'center', gridTemplateColumns: '7fr 3fr', width: '80%', alignSelf: 'center' }}>
                <Flex sx={{ justifyContent: 'center', flexDirection: 'column' }}>
                    <Headline scale="h2">
                        4.5/5
                </Headline>
                    <Headline scale="h3">
                        Overall Quality based on 100 ratings.
                </Headline>
                    <Headline scale="h4">
                        80% would come back again
                </Headline>
                </Flex>
                <SingleCard
                    sx={{ justifySelf: 'start !important' }}
                    gymAddress={CardsData.gymAddress}
                    creatorLink={CardsData.creatorLink}
                    gymName={CardsData.gymName}
                    background={CardsData.background}
                    primary={CardsData.primary}
                />
            </Grid>
            {/* <Flex sx={{ flexDirection: 'column' }}>
                <Headline scale="h1">24 Hour Fitness</Headline>
                <Headline scale="h2">1531 Parkmoor Ave, San Jose CA 95128</Headline>
                <Headline scale="h3">Rating: 4.5/5</Headline>
            </Flex> */}

            <Flex sx={{ pt: '20px', width: '80%', justifyContent: 'center', flexDirection: 'column', justifySelf: 'center', alignSelf: 'center' }}>
                <Headline scale="h3" sx={{pb: '10px'}}>Create A Review</Headline>
                <Box as="form"

                    onSubmit={(e) => {
                        e.preventDefault();
                        // console.log(e.target.title.value);
                        console.log(e.target.reviewBody.value);
                        console.log(e.target.rating.value);

                        // setTitleText(e.target.title.value);
                        setBodyText(e.target.reviewBody.value);
                        setRating(e.target.rating.value);
                        alert("Your review has been added!")
                    }}>
                    {/* <Label htmlFor="title" sx={{ fontSize: '24px' }}>Review Title</Label>
                    <Input name="title" id="title" sx={{ mb: '12px', fontSize: '18px' }} /> */}
                    <Label htmlFor="bodyText" sx={{ fontSize: '24px' }}>Review Body</Label>
                    <Textarea name="reviewBody" id="reviewBody" rows={8} />
                    <Label htmlFor="rating" sx={{ fontSize: '24px' }}>Rating</Label>
                    <Input name="rating" id="rating" sx={{ mb: '12px' }} />
                    <Button>Submit</Button>
                </Box>
                <Headline scale="h3" sx={{pt: '10px', textDecoration: 'underline'}}>Reviews</Headline>

                <Flex sx={(theme) => ({borderRadius: '20px', py: '10px', px: '30px', my: '20px', flexDirection: 'column', backgroundColor: theme.colors.navbar})}>
                <Headline scale="h4" sx={{pb: '10px'}}>Rating: 4/5</Headline>
                <Headline scale="h6">I would highly recommend going to this gym, the staff is incredibly friendly, and they have all the proper equipment to allow me to work out and hit everything I need to. People are very willing to give advice for your workouts too!</Headline>
                </Flex>

                <Flex sx={(theme) => ({borderRadius: '20px', py: '10px', px: '30px', my: '20px', flexDirection: 'column', backgroundColor: theme.colors.navbar})}>
                <Headline scale="h4" sx={{pb: '10px'}}>Rating: 1/5</Headline>
                <Headline scale="h6">I did not have a good experience here at all, everyone was extremely rude, and it smelled horrible.</Headline>
                </Flex>

                <Flex sx={(theme) => ({borderRadius: '20px', py: '10px', px: '30px', my: '20px', flexDirection: 'column', backgroundColor: theme.colors.navbar})}>
                <Headline scale="h4" sx={{pb: '10px'}}>Rating: 5/5</Headline>
                <Headline scale="h6">I think this is the best gym on the planet, I would never go anywhere else, they have so many awesome benefits!</Headline>
                </Flex>

                <Flex sx={(theme) => ({borderRadius: '20px', py: '10px', px: '30px', my: '20px', flexDirection: 'column', backgroundColor: theme.colors.navbar})}>
                <Headline scale="h4" sx={{pb: '10px'}}>Rating: 5/5</Headline>
                <Headline scale="h6">As the owner of the gym, I am definitely biased, but I think we're the best gym available in the area.</Headline>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default NavBar;