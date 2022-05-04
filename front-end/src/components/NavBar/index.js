/** @jsxImportSource theme-ui */
import { Grid, Text } from "theme-ui";
import React from "react";
import Headline from '../Headline';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <React.Fragment>
            <Grid
                sx={(theme) => ({
                    gridTemplateColumns: "1fr 2fr 1fr",
                    justifyItems: "center",
                    alignItems: "center",
                    width: "100%",
                    minHeight: "60px",
                    py: ["10px", "20px"],
                    backgroundColor: theme.colors.navbar,
                    position: "relative",
                    zIndex: "10",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.07)",
                    mb: '2rem'
                })}
            >
                <Link to="/" sx={{textDecoration: 'none'}}><Text sx={{ fontWeight: '700', fontSize: 4, color: 'white'}}>RateMy<Text sx={{ fontWeight: '700', fontSize: 4, color: (theme) => theme.mainColors.blue50 }}>Gym</Text></Text></Link>
                <SearchBar />
                {/* <Text sx={{ fontWeight: '700', fontSize: 3 }}>Write A Review</Text> */}
            </Grid>
        </React.Fragment>
    );
};

export default NavBar;