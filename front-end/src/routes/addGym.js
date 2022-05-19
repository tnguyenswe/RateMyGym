
/** @jsxImportSource theme-ui */
import { Label, Box, Input, Button, Flex } from "theme-ui";
import React from "react";
import Headline from '../components/Headline';
import axios from 'axios';



const AddGym = () => {
    return(
        <Flex sx={{width: '100%', justifyContent: 'center'}}>
    <Box as="form" sx={{width: '80%', height: '100%', pb: '10px'}}
                    onSubmit={(e) => {
                        e.preventDefault();
                        axios.post('http://localhost:3001/createGym', 
                        {
                         gymName: e.target.gymName.value,
                         gymAddress: e.target.gymAddress.value,
                         background: e.target.background.value,
                         primary: e.target.primary.value
                        })
                        .then(res => {
                            console.log(res);
                            console.log(res.data);
                        })
                        alert("Your gym has been added!")
                    }}>
                    <Headline scale="h3" sx={{pb: '50px'}}>Add A Gym</Headline>
                    <Label htmlFor="gymName" sx={{ fontSize: '24px', pt: '10px' }}>Gym Name</Label>
                    <Input name="gymName" id="gymName" sx={{mb: '12px'}}/>
                    <Label htmlFor="gymAddress" sx={{ fontSize: '24px', pt: '10px' }}>Gym Address</Label>
                    <Input name="gymAddress" id="gymAddress" sx={{mb: '12px'}}/>

                    <Label htmlFor="background" sx={{ fontSize: '24px', pt: '10px' }}>Background Image</Label>
                    <Input name="background" id="background" sx={{mb: '12px'}}/>

                    <Label htmlFor="primary" sx={{ fontSize: '24px', pt: '10px' }}>Logo Image</Label>
                    <Input name="primary" id="primary" sx={{mb: '12px'}}/>

                    <Button>Submit</Button>
                </Box>
                </Flex>
    );
}
export default AddGym;
