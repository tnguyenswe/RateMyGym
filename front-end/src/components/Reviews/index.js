/** @jsxImportSource theme-ui */
import { Label, Box, Input, Textarea, Button } from "theme-ui";
import React from "react";
import Headline from '../Headline';
import axios from 'axios';
import { useState, useEffect } from 'react';

const NavBar = (props) => {
    const [titleText, setTitleText] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3001/getReviews')
            .then((res) => {
                res.data.map((obj) => console.log(obj))
            });
    },
        [titleText, bodyText, rating]
    )

    return (
        <React.Fragment>
            <Headline scale="h3">Create A Review</Headline>
            <Box as="form" onSubmit={(e) => {
                e.preventDefault();
                console.log(e.target.title.value);
                console.log(e.target.reviewBody.value);
                console.log(e.target.rating.value);

                setTitleText(e.target.title.value);
                setBodyText(e.target.reviewBody.value);
                setRating(e.target.rating.value);
                alert("Your review has been added!")
            }}>
                <Label htmlFor="title" sx={{fontSize: '24px'}}>Review Title</Label>
                <Input name="title" id="title" sx={{ mb: '12px', fontSize: '18px' }} />
                <Label htmlFor="bodyText" sx={{fontSize: '24px'}}>Review Body</Label>
                <Textarea name="reviewBody" id="reviewBody" rows={8} />
                <Label htmlFor="rating" sx={{fontSize: '24px'}}>Rating</Label>
                <Input name="rating" id="rating" sx={{ mb: '12px' }} />
                <Button>Submit</Button>
            </Box>

            <Headline scale="h1">{titleText} Title Text</Headline>
            <Headline scale="h2">{bodyText} Body Text</Headline>
            <Headline scale="h3">{rating} Rating</Headline>
        </React.Fragment>
    );
};

export default NavBar;