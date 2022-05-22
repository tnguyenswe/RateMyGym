
/** @jsxImportSource theme-ui */
import { Label, Box, Input, Button, Flex } from "theme-ui";
import React from "react";
import Headline from '../components/Headline';
import axios from 'axios';

const SignIn = () => {
    return (
        <Flex sx={{ width: '100%', justifyContent: 'center' }}>
            <Box as="form" sx={{ width: '80%', height: '100%', pb: '10px' }}
                onSubmit={(e) => {
                    e.preventDefault();
                    axios.get('http://localhost:3001/getUsers')
                    .then((res) => {
                        const usernameMatches = res.data.filter((obj) => {
                            return(obj['username'].toLowerCase().includes(e.target.username.value))
                        })

                        if(usernameMatches.length === 0){
                            alert("Your credentials are invalid, please try again.")
                        }else{
                            const passwordMatches = res.data.filter((obj) => {
                                return(obj['password'].toLowerCase().includes(e.target.password.value))
                            })
                            if(passwordMatches.length === 0){
                                alert("Your credentials are invalid, please try again.")
                            }else{
                                alert("You have been logged in successfully.")
                            }
                        }
                    })
                }}>

                <Headline scale="h3" sx={{ pb: '50px' }}>Sign In</Headline>
                <Label htmlFor="username" sx={{ fontSize: '24px', pt: '10px' }}>Username</Label>
                <Input name="username" id="username" sx={{ mb: '12px' }} />

                <Label htmlFor="password" sx={{ fontSize: '24px', pt: '10px' }}>Password</Label>
                <Input type="password" name="password" id="password" sx={{ mb: '12px' }} />

                <Button>Sign In</Button>
            </Box>
        </Flex>
    );
}
export default SignIn;
