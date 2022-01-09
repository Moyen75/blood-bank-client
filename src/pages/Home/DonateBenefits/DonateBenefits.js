import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import blood1 from '../../../images/blood-day1.png'
import blood2 from '../../../images/blood-day2.jpg'

const DonateBenefits = () => {
    return (
        <Box>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 0 } }}>
                    <h1 style={{ color: '#052D65', textAlign: 'left' }}>
                        The Health Benefits of Donating Blood
                    </h1>
                    <p style={{ textAlign: 'left', color: 'gray' }}>
                        A blood transfusion can be a life saving treatment for patients with cancer,patients undergoing surgery,children with severe anaemia,women who have complications.
                    </p>
                    <ul className='list' style={{ textAlign: 'left', listStyle: 'none' }}>
                        <li>Reduce harmful iron stores.</li>
                        <li>Preserve card ovascular health.</li>
                        <li>Reduce the risk cancer.</li>
                        <li>Give you a sense of pride.</li>
                        <li>Free blood analysis.</li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={blood1} alt="" />
                </Grid>

            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={blood2} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <h1 style={{ color: '#052D65', textAlign: 'left' }}>
                        Recovery and Time Between Donations
                    </h1>
                    <p style={{ color: 'gray', textAlign: 'left' }}>
                        A blood transfusion can be a life saving treatment for patients with cancer,patients undergoing surgery,children with severe anaemia,women who have complications.
                    </p>
                    <p style={{ color: 'gray', textAlign: 'left' }}>
                        You must wait at least eight weeks (56 days) between donations of whole blood and 16 weeks (112 days) between power Red donation platelet apheresis donor may give every 7 days up to 24 times per year after a donation.Most peoples haemoglobin levels are back to normal after 6 to 12 weeks.
                    </p>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DonateBenefits;
