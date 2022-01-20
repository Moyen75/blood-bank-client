import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useDonors from '../../hooks/useDonors';

export const Bloods = () => {
    const { group } = useParams();
    const donors = useDonors()
    const [matched, setMatched] = useState([])
    useEffect(() => {
        const filtering = donors?.filter(donor => donor.blood === group)
        setMatched(filtering)
    }, [donors])
    console.log('I am looking for matched item', matched)
    return (
        <div>
            {matched && <div>
                {
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Container>
                                <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, width: { xs: '100%', md: "35%" } }}>
                                    <button className='filter-button'>Dhanghara</button>
                                    <button className='filter-button'>Dhanghara</button>
                                    <button className='filter-button'>Dhanghara</button>
                                    <button className='filter-button'>Dhanghara</button>
                                </Box>
                            </Container>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={2}>
                                {matched.map(donor => <Grid item xs={12} md={4}>

                                </Grid>)}
                            </Grid>
                        </Grid>
                    </Grid>
                }
            </div>}
        </div >
    )
}
