import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import donor1 from '../../../images/donor-1.jpg'
import donor2 from '../../../images/donor-2.jpg'
import donor3 from '../../../images/donor-3.jpg'
import donor4 from '../../../images/donor-4.jpg'

const donors = [
    {
        name: 'Moyenul Islam',
        blood: 'B+',
        total: '1',
        img: donor1
    },
    {
        name: 'Moyenul Islam',
        blood: 'A+',
        total: '1',
        img: donor2
    },
    {
        name: 'Moyenul Islam',
        blood: 'AB+',
        total: '1',
        img: donor3
    },
    {
        name: 'Moyenul Islam',
        blood: 'B-',
        total: '1',
        img: donor4
    }
]
const RecentDonors = () => {
    return (
        <Box sx={{ backgroundColor: '#EDEDEE ', padding: '50px 10px', borderRadius: '5px', marginY: '15px' }}>
            <h1 className='blood' >
                Recent Donors
            </h1>
            <Grid container spacing={2}>
                {
                    donors.map(donor => <Grid item xs={12} md={3}>
                        <Box sx={{ borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                            <img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src={donor.img} alt="" />
                            <Box sx={{ padding: '10px' }}>
                                <Typography variant='h5' sx={{ color: '#052D65' }}>
                                    {donor.name}
                                </Typography>
                                <Typography>
                                    Blood Group: <span style={{ color: 'red' }}>{donor.blood}</span>
                                </Typography>
                                <Typography>
                                    Total Donates: <span style={{ color: 'red' }}>{donor.total}</span> times
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>)
                }
            </Grid>
        </Box>
    )
}

export default RecentDonors;
