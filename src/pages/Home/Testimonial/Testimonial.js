import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const Testimonial = () => {
    return (
        <Box sx={{ paddingX: { xs: '10px', md: '150px', backgroundColor: 'red' }, paddingY: '20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3} data-aos="fade-up">
                    <Box sx={{ color: 'white' }}>
                        <span style={{ fontSize: '40px' }}><i class="fas fa-address-book"></i></span>
                        <h2 style={{ fontSize: '40px', margin: '0' }}><CountUp start={0} duration={2} end={100} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp></h2>
                        <p style={{ margin: '0' }}>Happy Donors</p>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ color: 'white' }}>
                        <span style={{ fontSize: '40px' }}><i class="fas fa-tint"></i></span>
                        <h2 style={{ fontSize: '40px', margin: '0' }}><CountUp start={0} duration={2} end={8} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp></h2>
                        <p style={{ margin: '0' }}>Blood Group</p>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ color: 'white' }}>
                        <span style={{ fontSize: '40px' }}><i class="far fa-laugh"></i></span>
                        <h2 style={{ fontSize: '40px', margin: '0' }}><CountUp start={0} duration={2} end={80} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp></h2>
                        <p style={{ margin: '0' }}>Happy Client</p>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ color: 'white' }}>
                        <span style={{ fontSize: '40px' }}><i class="fas fa-trophy"></i></span>
                        <h2 style={{ fontSize: '40px', margin: '0' }}><CountUp start={0} duration={2} end={6} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp></h2>
                        <p style={{ margin: '0' }}>Awards</p>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Testimonial;
