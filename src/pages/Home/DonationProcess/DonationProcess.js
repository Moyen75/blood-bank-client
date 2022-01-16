import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import '../../../Style/Style.css'

const DonationProcess = () => {
    return (
        <Box sx={{ backgroundColor: '#EDEDEE ', padding: '50px 10px', borderRadius: '5px' }}>
            <h1 className='blood' >
                Blood Donation Process
            </h1>
            <Grid container>
                <Grid itme xs={12} md={3}>
                    <Box sx={{ position: 'relative' }}>
                        <Box>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FF0066" d="M66.4,-3.3C66.4,24.5,33.2,49,4.6,49C-24,49,-48,24.5,-48,-3.3C-48,-31.2,-24,-62.3,4.6,-62.3C33.2,-62.3,66.4,-31.2,66.4,-3.3Z" transform="translate(100 100)" />
                            </svg>
                        </Box>
                        <Box sx={{ position: 'absolute', bottom: '0', top: { xs: '150px', md: '80px' }, left: '10px', right: '0', margin: 'auto', color: 'white' }}>
                            <Typography>
                                01
                            </Typography>
                            <Typography>
                                Registation
                            </Typography>
                            <Typography sx={{ display: { xs: 'none', md: 'block' } }}>
                                <i className="fas fa-arrow-right"></i>
                            </Typography>
                            <Typography sx={{ display: { xs: 'block', md: 'none' } }}>
                                <i className="fas fa-arrow-down"></i>                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid itme xs={12} md={3}>
                    <Box sx={{ position: 'relative' }}>
                        <Box>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FF0066" d="M66.4,-3.3C66.4,24.5,33.2,49,4.6,49C-24,49,-48,24.5,-48,-3.3C-48,-31.2,-24,-62.3,4.6,-62.3C33.2,-62.3,66.4,-31.2,66.4,-3.3Z" transform="translate(100 100)" />
                            </svg>
                        </Box>
                        <Box sx={{ position: 'absolute', bottom: '0', top: { xs: '150px', md: '80px' }, left: '10px', right: '0', margin: 'auto', color: 'white' }}>
                            <Typography>
                                02
                            </Typography>
                            <Typography>
                                Screening
                            </Typography>
                            <Typography sx={{ display: { xs: 'none', md: 'block' } }}>
                                <i className="fas fa-arrow-right"></i>
                            </Typography>
                            <Typography sx={{ display: { xs: 'block', md: 'none' } }}>
                                <i className="fas fa-arrow-down"></i>                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid itme xs={12} md={3}>
                    <Box sx={{ position: 'relative' }}>
                        <Box>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FF0066" d="M66.4,-3.3C66.4,24.5,33.2,49,4.6,49C-24,49,-48,24.5,-48,-3.3C-48,-31.2,-24,-62.3,4.6,-62.3C33.2,-62.3,66.4,-31.2,66.4,-3.3Z" transform="translate(100 100)" />
                            </svg>
                        </Box>
                        <Box sx={{ position: 'absolute', bottom: '0', top: { xs: '150px', md: '80px' }, left: '10px', right: '0', margin: 'auto', color: 'white' }}>
                            <Typography>
                                03
                            </Typography>
                            <Typography>
                                Donation
                            </Typography>
                            <Typography sx={{ display: { xs: 'none', md: 'block' } }}>
                                <i className="fas fa-arrow-right"></i>
                            </Typography>
                            <Typography sx={{ display: { xs: 'block', md: 'none' } }}>
                                <i className="fas fa-arrow-down"></i>                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid itme xs={12} md={3}>
                    <Box sx={{ position: 'relative' }}>
                        <Box>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FF0066" d="M66.4,-3.3C66.4,24.5,33.2,49,4.6,49C-24,49,-48,24.5,-48,-3.3C-48,-31.2,-24,-62.3,4.6,-62.3C33.2,-62.3,66.4,-31.2,66.4,-3.3Z" transform="translate(100 100)" />
                            </svg>
                        </Box>
                        <Box sx={{ position: 'absolute', bottom: '0', top: { xs: '150px', md: '80px' }, left: '10px', right: '0', margin: 'auto', color: 'white' }}>
                            <Typography>
                                04
                            </Typography>
                            <Typography>
                                Rest & Refresh
                            </Typography>
                            <Typography sx={{ display: { xs: 'none', md: 'block' } }}>
                                <i className="fas fa-arrow-right"></i>
                            </Typography>
                            <Typography sx={{ display: { xs: 'block', md: 'none' } }}>
                                <i className="fas fa-arrow-down"></i>                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DonationProcess
