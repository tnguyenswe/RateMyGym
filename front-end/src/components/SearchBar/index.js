/** @jsxImportSource theme-ui */
import { Text, Flex, Input, Button } from "theme-ui";
import React from "react";
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Flex sx={{mt:'-2rem' ,backgroundBlendMode: 'darken', width: '100%', height: '600px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',  
            // backgroundImage: `url("https://www.rhianwestbury.co.uk/wp-content/uploads/2019/07/danielle-cerullo-CQfNt66ttZM-unsplash-1440x960.jpg")`
            background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://www.rhianwestbury.co.uk/wp-content/uploads/2019/07/danielle-cerullo-CQfNt66ttZM-unsplash-1440x960.jpg')`
            }}>
            <Flex sx={{width: '100%'}} onSubmit={
                (e) => {
                    e.preventDefault();
                    console.log(e.target.gymSearch.value);
                    navigate('/gyms', { state: { gymName: e.target.gymSearch.value } })
                }
            } as="form" sx={{ width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Text sx={{ fontSize: '36px', fontWeight: '600', pb: '10px' }}>The #1 Site for Gym Reviews</Text>
                <Input placeholder="Search gym by name or city" name="gymSearch" id="gymSearch" sx={{ mb: '12px', fontSize: '18px', width: '60%', color: 'white', '::placeholder': {color: 'white'} }} />
                <Button>Search</Button>
            </Flex>
            </Flex>
        </React.Fragment >
    )
}

export default SearchBar;