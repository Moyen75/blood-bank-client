import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import banner from '../../../images/6261.jpg'

export const TopBanner = () => {
    const bgStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <Box>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        backgroundImage: {
                            xs: `url(${banner})`, backgroundSize: 'cover',
                            backgroundPosition: 'left',
                            backgroundRepeat: 'no-repeat', md: 'url()'
                        }, minHeight: { xs: '430px', md: 'auto' },
                        display:'flex',alignItems:'center'
                        
                    }}>
                        <Box sx={{textAlign:{xs:'left',md:'center'},maxWidth:{xs:'240px',md:'100%'},color:'gray'}}>
                            <Typography variant='h5' sx={{textAlign:'left',color:'tomato'}}>
                                DONATE BLOOD AND GET REAL BLESSINGS.
                            </Typography>
                            <Typography sx={{textAlign:'left'}}>
                                Blood is the most precious gift that anyone can give to another person.
                                Donating blood not only saves the life also save donor's lives.
                            </Typography>
                            <Button variant='contained'>DONATE NOW</Button>
                        </Box>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ width: '100%', display: { xs: 'none', md: 'block' } }}>
                        <img style={{ width: '100%' }} src={banner} alt="" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
