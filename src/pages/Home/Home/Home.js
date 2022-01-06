import { Box } from '@mui/system';
import React from 'react';
import MainNavBar from '../MainNavBar/MainNavBar';
import TopBar from '../TopBar/TopBar';

const Home = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Box sx={{ paddingX: {xs:'10px',md:'150px'}}}>
                   <MainNavBar></MainNavBar>
            </Box>
        </div>
    );
};

export default Home;