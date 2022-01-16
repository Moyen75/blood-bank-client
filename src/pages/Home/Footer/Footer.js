import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/blood-bag.png'

const Footer = () => {
    return (
        <Box>
            <Box sx={{ paddingX: { xs: '30px', md: '150px' }, backgroundColor: 'rgb(5, 5, 69)', color: 'white', marginTop: '20px' }}>
                <Grid container spacing={2} sx={{ paddingTop: '10px' }}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ padding: "2px 10px", color: 'tomato' }}>
                                <i className="fas fa-envelope"></i>
                            </Box>
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography variant='h6'>
                                    Email Address
                                </Typography>
                                <Typography sx={{ color: 'gray' }}>
                                    moyenislam75@gmail.com
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ padding: "2px 10px", color: 'tomato' }}>
                                <i className="fas fa-phone"></i>
                            </Box>
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography variant='h6'>
                                    Emergency Calling
                                </Typography>
                                <Typography sx={{ color: 'gray' }}>
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
                                <Typography className='connects'>
                                    <Link to='/'><i className="fab fa-facebook"></i></Link>
                                    <Link to='/'><i className="fab fa-instagram"></i></Link>
                                    <Link to='/'><i className="fab fa-twitter"></i></Link>
                                    <Link to='/'><i className="fab fa-youtube"></i></Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ marginTop: '30px' }}>
                    <Grid item xs={12} md={3}>
                        <Box>

                            <Box sx={{ textAlign: 'left' }}>
                                <img style={{ width: '40px', height: '40px', marginX: 'auto' }} src={img} alt="" />
                                <Typography sx={{ color: 'gray' }}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus expedita autem incidunt necessitatibus aut unde atque.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box>
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography variant='h6'>
                                    USEFUL LINKS
                                </Typography>
                                <Typography sx={{ color: 'gray' }}>
                                    Email Address
                                </Typography>
                                <Typography sx={{ color: 'gray' }}>
                                    Blood Group
                                </Typography>
                                <Typography sx={{ color: 'gray' }}>
                                    Phone Number
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ textAlign: 'left' }}>
                        <Typography variant='h6'>
                            Recent Posts
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', margin: '4px' }}>
                            <Box>
                                <img style={{ width: '40px', height: '40px', marginX: 'auto' }} src={img} alt="" />
                            </Box>
                            <Box>
                                <Typography sx={{ color: 'gray' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', margin: '4px' }}>
                            <Box>
                                <img style={{ width: '40px', height: '40px', marginX: 'auto' }} src={img} alt="" />
                            </Box>
                            <Box>
                                <Typography sx={{ color: 'gray' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box>
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography variant='h6'>
                                    Important Links
                                </Typography>
                                <Typography sx={{ color: 'gray' }}>
                                    Home
                                </Typography>
                                <Typography sx={{ color: 'gray' }}>
                                    Contact us
                                </Typography>
                                <Typography sx={{ color: 'gray' }}>
                                    Join Us
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ backgroundColor: 'black', textAlign: 'center', color: 'gray' }}>
                <Typography>
                    &copy;copyright 2022,all rights reseved by Blood Bank
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;