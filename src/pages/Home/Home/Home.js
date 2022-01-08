import { Box } from '@mui/system';
import React from 'react';
import Footer from '../Footer/Footer';
import MainNavBar from '../MainNavBar/MainNavBar';
import { TopBanner } from '../TopBanner/TopBanner';
import TopBar from '../TopBar/TopBar';

const Home = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Box sx={{ paddingX: { xs: '10px', md: '150px' } }}>
                <MainNavBar></MainNavBar>
                <TopBanner></TopBanner>
            </Box>
            <Footer></Footer>
        </div>
    );
};

export default Home;