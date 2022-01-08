import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ paddingX: { xs: '10px', md: '150px' }, backgroundColor: 'rgb(5, 5, 69)', color: 'white', marginTop: '20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ padding: "2px 10px", color: 'tomato' }}>
                            <i class="fas fa-envelope"></i>
                        </Box>
                        <Box>
                            <Typography variant='h6'>
                                Email Address
                            </Typography>
                            <Typography>
                                moyenislam75@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ padding: "2px 10px", color: 'tomato' }}>
                        <i class="fas fa-phone"></i>
                        </Box>
                        <Box>
                            <Typography variant='h6'>
                                Emergency Calling
                            </Typography>
                            <Typography>
                                +8801308989743
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box>
                        
                        <Box>
                            <Typography variant='h6'>
                                Let's connect
                            </Typography>
                            <span><i class="fab fa-facebook"></i></span>
                            <span><i class="fab fa-instagram"></i></span>
                            <span><i class="fab fa-twitter"></i></span>
                            <span><i class="fab fa-youtube"></i></span>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box>
                            hello
                        </Box>
                        <Box>
                            <Typography>
                                moyenislam75@gmail.com
                            </Typography>
                            <Typography>
                                moyenislam75@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box>
                            hello
                        </Box>
                        <Box>
                            <Typography>
                                moyenislam75@gmail.com
                            </Typography>
                            <Typography>
                                moyenislam75@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box>
                            hello
                        </Box>
                        <Box>
                            <Typography>
                                moyenislam75@gmail.com
                            </Typography>
                            <Typography>
                                moyenislam75@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box>
                            hello
                        </Box>
                        <Box>
                            <Typography>
                                moyenislam75@gmail.com
                            </Typography>
                            <Typography>
                                moyenislam75@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;