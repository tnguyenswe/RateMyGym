/** @jsxImportSource theme-ui */
import { Grid, Text, Label, Box, Input, Textarea, Button, Flex } from "theme-ui";
import React from "react";
import Headline from '../../src/components/Headline';
import SearchBar from '../../src/components/SearchBar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SingleCard from '../components/PreviewCards/SingleCard';

const GymBuddy = () => {
    return(
<Flex sx={{ pt: '20px', width: '80%', justifyContent: 'center', flexDirection: 'column', justifySelf: 'center', alignSelf: 'center' }}>
                <Headline scale="h3" sx={{pb: '10px'}}>Add Your Data</Headline>
                <Box as="form">
                    <Label htmlFor="name" sx={{ fontSize: '24px' }}>Name</Label>
                    <Input name="name" id="name" sx={{ mb: '12px' }} />
                    <Label htmlFor="location" sx={{ fontSize: '24px' }}>Location Preferences</Label>
                    <Input name="location" id="location" sx={{ mb: '12px' }} />
                    
                    <Label htmlFor="workout" sx={{ fontSize: '24px' }}>Workout Preferences</Label>
                    <Textarea name="workout" id="workout" rows={8} />
                    <Button>Submit</Button>
                </Box>
                <Headline scale="h3" sx={{pt: '10px', textDecoration: 'underline'}}>Reviews</Headline>
            </Flex>
    )
}

export default GymBuddy;