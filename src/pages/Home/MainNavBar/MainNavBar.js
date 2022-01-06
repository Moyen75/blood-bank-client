import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import blood from '../../../images/blood-bag.png'

const MainNavBar = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <img src={blood} style={{ width: '45px' }} alt="" />
            </Box>
            <Box>
                <Box>
                   
                </Box>
            </Box>
            <Box className='main-nav-links'>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Link className='main-nav-link' to='home'>Home</Link>
                    <Link className='main-nav-link' to='about'>About</Link>
                    <Link className='main-nav-link' to='volunteer'>Volunteer</Link>
                    <Link className='main-nav-link' to='donors'>Donors</Link>
                    <Link className='main-nav-link' to='blog'>Blog</Link>
                    <Link className='main-nav-link' to='contact'>Contact</Link>
                </Box>
                <Link className='main-nav-link last' to='donateBlood'> Join as Donor</Link>
            </Box>
        </Box>
    );
};

export default MainNavBar;