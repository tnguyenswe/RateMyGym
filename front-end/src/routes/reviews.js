/** @jsxImportSource theme-ui */
import { Grid, Label, Box, Input, Textarea, Button, Flex, Image } from "theme-ui";
import React from "react";
import Headline from '../../src/components/Headline';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SingleCard from '../components/PreviewCards/SingleCard';
import { useLocation } from "react-router-dom";


const NavBar = (props) => {
    const location = useLocation();
    const CardsData = location.state
    const [filteredReviews, setFilteredReviews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getReviews')
            .then((res) => {
                const filteredByReviewURL = res.data.filter((obj) => { return (obj['reviewURL'].toLowerCase().includes(location.state.reviewURL.toLowerCase())) })
                setFilteredReviews(filteredByReviewURL);
            });
    },
        [location.state.reviewURL]
    )
    return (
        <Flex sx={{flexDirection: 'column'}}>
            <Grid sx={{ justifyItems: 'center', alignItems: 'center', gridTemplateColumns: '7fr 3fr', width: '90%', alignSelf: 'center', height: '100%' }}>
                <Box as="form" sx={{width: '100%', height: '100%', pb: '10px'}}
                    onSubmit={(e) => {
                        e.preventDefault();
                        axios.post('http://localhost:3001/createReview', 
                        {reviewURL: location.state.reviewURL,
                         body: e.target.reviewBody.value,
                         rating: e.target.rating.value,
                         images: e.target.reviewImage.value
                        })
                        .then(res => {
                            console.log(res);
                            console.log(res.data);
                        })
                        alert("Your review has been added!")
                    }}>
                    <Headline scale="h3" sx={{pb: '50px'}}>Create A Review</Headline>
                    <Label htmlFor="bodyText" sx={{ fontSize: '24px', pt: '10px' }}>Review Body</Label>
                    <Textarea name="reviewBody" id="reviewBody" rows={8} sx={{mb: '12px'}} />
                    <Label htmlFor="rating" sx={{ fontSize: '24px' }}>Rating</Label>
                    <Input name="rating" id="rating" sx={{ mb: '12px' }} />
                    <Label htmlFor="reviewImage" id="reviewImage" sx={{fontSize: '24px'}}>Review Image (Optional)</Label>
                    <Input name="reviewImage" id="reviewImage" sx={{ mb: '12px' }} />
                    <Button>Submit</Button>
                </Box>
                <SingleCard
                    sx={{ justifySelf: 'start !important' }}
                    gymAddress={CardsData.gymAddress}
                    gymName={CardsData.gymName}
                    background={CardsData.background}
                    primary={CardsData.primary}
                />
            </Grid>

            <Flex sx={{ pt: '20px', width: '90%', justifyContent: 'center', flexDirection: 'column', justifySelf: 'center', alignSelf: 'center' }}>
                <Headline scale="h3" sx={{pt: '10px', textDecoration: 'underline'}}>Reviews</Headline>
                {filteredReviews.map((data, i) => {
                    return(<Flex key={i} sx={(theme) => ({borderRadius: '20px', py: '10px', px: '30px', my: '20px', flexDirection: 'column', backgroundColor: theme.colors.navbar})}>
                    <Headline scale="h4" sx={{pb: '10px'}}>Rating: {data.rating}/5</Headline>
                    <Headline scale="h6" sx={{pb: '10px'}}>{data.body}</Headline>
                    {data.images && <Image src={data.images} alt="review image" sx={{pb: '10px', borderRadius: '10px', alignSelf: 'start', justifySelf: 'start' ,objectFit: 'contain', height: '200px', width: 'auto'}}/>}
                    </Flex>)
                })}
            </Flex>
        </Flex>
    );
};

export default NavBar;