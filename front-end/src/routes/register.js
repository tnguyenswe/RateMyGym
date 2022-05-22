
/** @jsxImportSource theme-ui */
import { Label, Box, Input, Button, Flex } from "theme-ui";
import React from "react";
import Headline from '../components/Headline';
import axios from 'axios';

const Register = () => {
    return (
        <Flex sx={{ width: '100%', justifyContent: 'center' }}>
            <Box as="form" sx={{ width: '80%', height: '100%', pb: '10px' }}
                onSubmit={(e) => {
                    e.preventDefault();
                    axios.post('http://localhost:3001/createUser',
                        {
                            username: e.target.username.value,
                            password: e.target.password.value,
                        })
                        .then(res => {
                            console.log(res);
                            console.log(res.data);
                        })
                    alert("Your information has been registered!")
                }}>
                <Headline scale="h3" sx={{ pb: '50px' }}>Register User Information</Headline>
                <Label htmlFor="username" sx={{ fontSize: '24px', pt: '10px' }}>Username</Label>
                <Input name="username" id="username" sx={{ mb: '12px' }} />

                <Label htmlFor="password" sx={{ fontSize: '24px', pt: '10px' }}>Password</Label>
                <Input type="password" name="password" id="password" sx={{ mb: '12px' }} />

                <Button>Register</Button>
            </Box>
        </Flex>
    );
}
export default Register;
