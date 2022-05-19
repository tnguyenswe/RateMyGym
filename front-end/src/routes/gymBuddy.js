/** @jsxImportSource theme-ui */
import { Label, Box, Input, Textarea, Button, Flex, Image } from "theme-ui";
import React from "react";
import Headline from '../../src/components/Headline';
import axios from 'axios';
import { useState, useEffect } from 'react';

const GymBuddy = () => {

    const [gymBuddiesList, setGymBuddiesList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getGymBuddies')
            .then((res) => {
                const gymBuddies = res.data;
                setGymBuddiesList(gymBuddies);
            });
    },
        []
    )

    return (

        <Flex sx={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Box as="form" sx={{ width: '80%', height: '100%', pb: '10px' }}
                onSubmit={(e) => {
                    e.preventDefault();
                    axios.post('http://localhost:3001/createGymBuddy',
                        {
                            name: e.target.name.value,
                            locationPreferences: e.target.locationPreferences.value,
                            workoutPreferences: e.target.workoutPreferences.value,
                            profilePic: e.target.profilePic.value,
                            phoneNumber: e.target.phoneNumber.value,
                            instagram: e.target.instagram.value
                        })
                        .then(res => {
                            console.log(res);
                            console.log(res.data);
                        })
                    alert("Your info has been added!")
                }}>
                <Headline scale="h3" sx={{ pb: '50px' }}>Add Your Data</Headline>

                <Label htmlFor="name" sx={{ fontSize: '24px', pt: '10px' }}>Your Name</Label>
                <Input name="name" id="name" sx={{ mb: '12px' }} />

                <Label htmlFor="locationPreferences" sx={{ fontSize: '24px', pt: '10px' }}>Location Preferences</Label>
                <Input name="locationPreferences" id="locationPreferences" sx={{ mb: '12px' }} />

                <Label htmlFor="workoutPreferences" sx={{ fontSize: '24px', pt: '10px' }}> Workout Preferences</Label>
                <Textarea name="workoutPreferences" id="workoutPreferences" sx={{ mb: '12px' }} rows={6} />

                <Label htmlFor="profilePic" sx={{ fontSize: '24px', pt: '10px' }}>Profile Pic</Label>
                <Input name="profilePic" id="profilePic" sx={{ mb: '12px' }} />

                <Label htmlFor="phoneNumber" sx={{ fontSize: '24px', pt: '10px' }}>Phone Number</Label>
                <Input name="phoneNumber" id="phoneNumber" sx={{ mb: '12px' }} />

                <Label htmlFor="instagram" sx={{ fontSize: '24px', pt: '10px' }}>Instagram</Label>
                <Input name="instagram" id="instagram" sx={{ mb: '12px' }} />

                <Button>Submit</Button>
            </Box>

            {gymBuddiesList.map((data, i) => {
                return (
                <Flex key={i} sx={(theme) => ({ borderRadius: '20px', py: '10px', px: '30px', my: '20px', flexDirection: 'column', backgroundColor: theme.colors.navbar, width: '80%' })}>
                    {data.profilePic && <Image src={data.profilePic} alt="profile pic" sx={{borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover'}}/>}
                    <Headline scale="h4" sx={{ pb: '10px' }}>Name: {data.name}</Headline>
                    <Headline scale="h6" sx={{pb: '10px'}}>Location Preferences: {data.locationPreferences}</Headline>
                    <Headline scale="h6" sx={{ pb: '10px' }}>Workout Preferences: {data.workoutPreferences}</Headline>
                    <Headline scale="h6" sx={{pb: '10px'}}>Phone Number: {data.phoneNumber}</Headline>
                    <Headline scale="h6" sx={{pb: '10px'}}>Instagram: {data.instagram}</Headline>
                </Flex>
                )
            })}

        </Flex>
    )
}

export default GymBuddy;
