import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import banner from '../../../images/6261.jpg'


const currencies = [
    {
        value: 'Dhanghara',
        label: 'Dhanghara',
    },
    {
        value: 'Pangasi',
        label: 'Pangasi',
    },
    {
        value: 'Bramhogasa',
        label: 'Bramhogasa',
    },
    {
        value: 'Chandaikona',
        label: 'Chandaikona',
    },
    {
        value: 'Nimgachi',
        label: 'Nimgachi',
    }
];
const BloodGroups = [
    {
        value: 'A+',
        label: 'A+',
    },
    {
        value: 'A-',
        label: 'A-',
    },
    {
        value: 'B+',
        label: 'B+',
    },
    {
        value: 'B-',
        label: 'B-',
    },
    {
        value: 'AB+',
        label: 'AB+',
    },
    {
        value: 'AB-',
        label: 'AB-',
    },
    {
        value: 'O+',
        label: 'O+',
    },
    {
        value: 'O-',
        label: 'O-',
    }
];

export const TopBanner = () => {
    const [area, setArea] = React.useState('Dhanghara');
    const [blood, setBlood] = React.useState('A+');

    const [searchedData, setSearchedData] = React.useState([])

    const handleChange = (event) => {
        setArea(event.target.value);
    };
    const handleChangeBlood = (event) => {
        setBlood(event.target.value);
    };

    const handleSearch = e => {
        e.preventDefault()
        console.log('this is', area, blood)
        fetch(`http://localhost:5000/donors?area=${area}&blood=${blood}`)
            .then(res => res.json())
            .then(data => setSearchedData(data))
    }


    return (
        <Box>
            <Box>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            backgroundImage: {
                                xs: `url(${banner})`, backgroundSize: 'cover',
                                backgroundPosition: 'left',
                                backgroundRepeat: 'no-repeat', md: 'url()'
                            }, minHeight: { xs: '450px', md: 'auto' },
                            display: 'flex'

                        }}>
                            <Box sx={{ textAlign: { xs: 'left', md: 'center' }, maxWidth: { xs: '240px', md: '100%' }, color: 'gray' }}>
                                <Typography variant='h5' sx={{ textAlign: 'left', color: 'tomato' }}>
                                    DONATE BLOOD AND GET REAL BLESSINGS.
                                </Typography>
                                <Typography sx={{ textAlign: 'left' }}>
                                    Blood is the most precious gift that anyone can give to another person.
                                    Donating blood not only saves the life also save donor's lives.
                                </Typography>
                                <Button
                                    sx={{ color: "white", display: { xs: 'block', md: 'inline-block' }, margin: { xs: '10px 0', md: '0' }, backgroundColor: 'tomato', transition: 'all .3s', '&:hover': { color: 'tomato', backgroundColor: 'white', border: '1px solid tomato', boxShadow: 'none' } }}
                                    variant='contained'>JOIN US</Button>
                                <Button
                                    sx={{ marginLeft: { xs: '2px', md: '15px' }, color: "tomato", backgroundColor: 'white', border: '1px solid tomato', boxShadow: 'none', display: { xs: 'block', md: 'inline-block' }, transition: 'all .3s', '&:hover': { color: "white", backgroundColor: 'tomato' } }}
                                    variant='contained'>CONTACT NOW</Button>
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
            <Box sx={{ padding: { xs: '30px 0', md: '30px' }, backgroundColor: '#EDEDEE', marginBottom: '40px', marginTop: { xs: '-20px', md: '0' }, zIndex: '999', borderRadius: '5px' }}>
                <form onSubmit={handleSearch}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Area"
                        sx={{ width: { xs: '25%', md: '35%' }, marginX: '5px' }}
                        value={area}
                        onChange={handleChange}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Blood Group"
                        sx={{ width: { xs: '25%', md: '35%' }, marginX: '5px' }}
                        value={blood}
                        onChange={handleChangeBlood}
                    >
                        {BloodGroups.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button
                        type='submit'
                        variant='contained'
                        sx={{ paddingY: '16px', backgroundColor: 'tomato', color: 'white', "&:hover": { backgroundColor: 'white', color: 'tomato', boxShadow: 'none', outline: 'tomato solid 1px' } }}
                    >Search</Button>
                </form>
            </Box>
        </Box>
    )
}
