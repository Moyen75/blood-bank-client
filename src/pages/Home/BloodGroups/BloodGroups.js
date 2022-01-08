import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const BloodGroups = () => {
    return (
        <Box sx={{ backgroundColor: '#EDEDEE ', padding: '50px 10px', borderRadius: '5px', marginTop: '10px' }}>
            <h1 className='blood' >
                Our Available Donors
            </h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Box sx={{ border: '2px dashed tomato', paddingY: '35px' }}>
                        <Typography sx={{ backgroundColor: '#ff347d33', width: '30px', margin: '0 auto', padding: '8px 10px', borderRadius: '5px', color: 'red',marginY:'10px' }} variant='h5'>
                            A+
                        </Typography>
                        <Link className='link' to='/'>view all</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ border: '2px dashed tomato', paddingY: '35px' }}>
                        <Typography sx={{ backgroundColor: '#ff347d33', width: '30px', margin: '0 auto', padding: '8px 10px', borderRadius: '5px', color: 'red',marginY:'10px' }} variant='h5'>
                            A-
                        </Typography>
                        <Link className='link' to='/'>view all</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ border: '2px dashed tomato', paddingY: '35px' }}>
                        <Typography sx={{ backgroundColor: '#ff347d33', width: '45px', margin: '0 auto', padding: '8px', borderRadius: '5px', color: 'red',marginY:'10px' }} variant='h5'>
                            AB+
                        </Typography>
                        <Link className='link' to='/'>view all</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ border: '2px dashed tomato', paddingY: '35px' }}>
                        <Typography sx={{ backgroundColor: '#ff347d33', width: '40px', margin: '0 auto', padding: '8px', borderRadius: '5px', color: 'red',marginY:'10px' }} variant='h5'>
                            AB-
                        </Typography>
                        <Link className='link' to='/'>view all</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ border: '2px dashed tomato', paddingY: '35px' }}>
                        <Typography sx={{ backgroundColor: '#ff347d33', width: '30px', margin: '0 auto', padding: '8px 10px', borderRadius: '5px', color: 'red',marginY:'10px' }} variant='h5'>
                            B+
                        </Typography>
                        <Link className='link' to='/'>view all</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ border: '2px dashed tomato', paddingY: '35px' }}>
                        <Typography sx={{ backgroundColor: '#ff347d33', width: '30px', margin: '0 auto', padding: '8px 10px', borderRadius: '5px', color: 'red',marginY:'10px' }} variant='h5'>
                            B-
                        </Typography>
                        <Link className='link' to='/'>view all</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ border: '2px dashed tomato', paddingY: '35px' }}>
                        <Typography sx={{ backgroundColor: '#ff347d33', width: '30px', margin: '0 auto', padding: '8px 10px', borderRadius: '5px', color: 'red',marginY:'10px' }} variant='h5'>
                            O+
                        </Typography>
                        <Link className='link' to='/'>view all</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ border: '2px dashed tomato', paddingY: '35px' }}>
                        <Typography sx={{ backgroundColor: '#ff347d33', width: '30px', margin: '0 auto', padding: '8px 10px', borderRadius: '5px', color: 'red',marginY:'10px' }} variant='h5'>
                            O-
                        </Typography>
                        <Link className='link' to='/'>view all</Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default BloodGroups
