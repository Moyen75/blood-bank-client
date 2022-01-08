import { Box, Grid } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ paddingX: { xs: '10px', md: '150px' } }}>
               <Grid container spacing={2}>
                   <Grid item xs={12} md={6}></Grid>
               </Grid>
        </Box>
    );
};

export default Footer;