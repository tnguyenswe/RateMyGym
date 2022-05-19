/** @jsxImportSource theme-ui */
import { Grid, Text, Label, Box, Input, Textarea, Button, Flex } from "theme-ui";
import React from "react";
import Headline from '../components/Headline';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SingleCard from '../components/PreviewCards/SingleCard';
import { useLocation } from "react-router-dom";
import AddGymCard from "../components/PreviewCards/AddGymCard";

const Gyms = () => {

    const [filteredGyms, setFilteredGyms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getGyms')
            .then((res) => {
                const filteredByCityGyms = res.data.filter((obj) => { return (obj['gymAddress'].toLowerCase().includes(location.state.gymName.toLowerCase())) })
                if(filteredByCityGyms.length === 0){
                    const filteredByNameGyms = res.data.filter((obj) => { return (obj['gymName'].toLowerCase().includes(location.state.gymName.toLowerCase())) })
                    if(filteredByNameGyms.length === 0){
                        alert('There were no gyms according to your search criteria! Please try again!')
                    }
                    setFilteredGyms(filteredByNameGyms)
                }else{
                setFilteredGyms(filteredByCityGyms)
                }
            });
    },
        []
    )

    const location = useLocation();

    console.log(location.state.gymAddress);


    return (
    <Flex sx={{justifyContent: 'center'}}>
        <Grid sx={{ maxWidth: '90%', gridTemplateColumns: ['1fr', '1fr 1fr', null, '1fr 1fr 1fr'], gridColumnGap: ['10px', '30px', null, '50px'], gridRowGap: ['20px', '20px'] }}>
        {
            filteredGyms.map((data, i) => {
                const dashedGymName = filteredGyms[i].gymName.replaceAll(' ', '-');
                const dashedGymAddress = filteredGyms[i].gymAddress.replaceAll(' ', '-');
                const reviewURL = dashedGymName.toLowerCase() + "-" + dashedGymAddress.toLowerCase();

                return (<SingleCard
                    key={i}
                    gymAddress={filteredGyms[i].gymAddress}
                    reviewURL={reviewURL}
                    gymName={filteredGyms[i].gymName}
                    background={filteredGyms[i].background}
                    primary={filteredGyms[i].primary} />);
            }
            )
        }
        <AddGymCard gymName="Add a gym" primary="https://media.istockphoto.com/vectors/dumbbell-vector-id1331186720?k=20&m=1331186720&s=612x612&w=0&h=cUrjMsuYARIaWajP1DzhQUONzycHBiw8_-APxBT2TKs="
        background="https://media.istockphoto.com/photos/gym-background-fitness-weight-equipment-on-empty-dark-floor-picture-id1213615970?k=20&m=1213615970&s=612x612&w=0&h=S2Ny5JNrAlcpZ_0mt76CKAwARqvJN5glvHpB9fD3DA0="
        />
    </Grid>
    </Flex>)
};

export default Gyms;