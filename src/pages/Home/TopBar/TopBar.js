import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Style/Style.css'

const TopBar = () => {
    return (
        <Box className='top-bar'>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingX: {xs:'30px',md:'150px'}, alignItems: 'center' }}>
                <Box>
                    <Typography>
                    <i class="fas fa-phone"></i>  +8801308989743
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Link className='top-nav-link' to='/'><i class="fab fa-facebook icon"></i></Link>
                        <Link className='top-nav-link' to='/'><i class="fab fa-instagram icon"></i></Link>
                        <Link className='top-nav-link' to='/'><i class="fab fa-twitter icon"></i></Link>
                        <Link className='top-nav-link' to='/'><i class="fab fa-youtube icon"></i></Link>
                    </Box>
                    <Button variant='contained' sx={{
                        backgroundColor: 'tomato', textTransform: 'lowercase', transition: 'all .8s', '&:hover': {
                            background: "#fff",
                            color: 'tomato'
                        },
                    }}>
                        Login
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default TopBar;