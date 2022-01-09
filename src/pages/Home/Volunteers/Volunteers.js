import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import donor1 from '../../../images/volun-1.jpg'
import donor2 from '../../../images/volun-2.jpg'
import donor3 from '../../../images/volun-3.jpg'
import donor4 from '../../../images/donor-2.jpg'
import { Link } from 'react-router-dom'


const volunteers = [
    {
        name: 'Moyenul Islam',
        blood: 'B+',
        title: 'Founder',
        img: donor1
    },
    {
        name: 'Moyenul Islam',
        blood: 'A+',
        title: 'General Member',
        img: donor2
    },
    {
        name: 'Moyenul Islam',
        blood: 'AB+',
        title: 'Founder',
        img: donor3
    },
    {
        name: 'Moyenul Islam',
        blood: 'O+',
        title: 'General Member',
        img: donor4
    }
]
const Volunteers = () => {
    return (
        <Box sx={{ backgroundColor: '#EDEDEE ', padding: '50px 10px', borderRadius: '5px', marginY: '15px' }}>
            <h1 className='blood' >
                Our Volunteers
            </h1>
            <Grid container spacing={2}>
                {
                    volunteers.map(donor => <Grid item xs={12} md={3}>
                        <Box sx={{ borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',backgroundColor:'#EDEDEE' }}>
                            <Box sx={{ paddingTop: '20px', position: 'relative' }}>
                                <img style={{ width: '130px', height: '130px', borderRadius: '50%', border: '2px solid #F5035B', objectFit: 'cover' ,zIndex:-999}} src={donor.img} alt="" />
                                <span style={{ position: 'absolute', border: '2px solid #F5035B', borderRadius: '50%', width: '40px', height: '40px', lineHeight: '40px',right:'30px',zIndex:999,backgroundColor:'#E6E4EA ',color:'#F5035B' }}>
                                    {donor.blood}
                                </span>
                            </Box>
                            <Box sx={{ padding: '10px' }}>
                                <Typography variant='h5' sx={{ color: '#052D65' }}>
                                    {donor.name}
                                </Typography>

                                <Typography>
                                    <span style={{ color: 'red' }}>{donor.title}</span>
                                </Typography>
                                <Box>
                                    <Link style={{ color: 'gray' }} className='top-nav-link' to='/'><i class="fab fa-facebook icon"></i></Link>
                                    <Link style={{ color: 'gray' }} className='top-nav-link' to='/'><i class="fab fa-instagram icon"></i></Link>
                                    <Link style={{ color: 'gray' }} className='top-nav-link' to='/'><i class="fab fa-twitter icon"></i></Link>
                                    <Link style={{ color: 'gray' }} className='top-nav-link' to='/'><i class="fab fa-youtube icon"></i></Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>)
                }
            </Grid>
        </Box>
    )
}

export default Volunteers
