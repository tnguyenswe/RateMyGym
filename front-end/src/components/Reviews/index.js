/** @jsxImportSource theme-ui */
import { Grid, Text } from "theme-ui";
import React from "react";
import Headline from '../Headline';
import SearchBar from '../SearchBar';
import axios from 'axios';
import { useState, useEffect } from 'react';

const NavBar = (props) => {
    const [titleText, setTitleText] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3001/getReviews')
            .then((res) => { console.log(res.data) });
    }
    )

    return (
        <React.Fragment>
            <Headline scale="h1">{titleText} Title Text</Headline>
            <Headline scale="h2">{bodyText} Body Text</Headline>
            <Headline scale="h3">{rating} Rating</Headline>
        </React.Fragment>
    );
};

export default NavBar;