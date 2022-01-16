import { MenuItem, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import useAuth from '../../context/useAuth';
import img from '../../images/jpg.jpg'


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
const JoinDonor = () => {
    const { user } = useAuth()
    const area = 'Dhanghara';
    const blood = 'A+';
    const userData = { blood, area, name: user.displayName, email: user.email }
    const [data, setData] = useState(userData)

    const isAuth = localStorage.getItem('isLoggedIn')
    console.log('This is isAuth', isAuth)
    console.log('Hello from join ')
    const handleSignInData = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...data }
        newData[field] = value;
        setData(newData)
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        console.log(data)
    }
    console.log(data)
    return (
        <Box>
            <Box>
                <img style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} src={img} alt="" />
            </Box>
            <Box sx={{ backgroundColor: 'skyBlue ', padding: '50px 0' }}>
                <Box sx={{ maxWidth: '395px', marginX: 'auto', marginTop: '10px', backgroundColor: '#EDEDEE', paddingY: '15px', borderRadius: '5px', boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px', marginY: '0' }}>
                    <h2 className='blood' >Join As Donor</h2>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            id='outline-basic'
                            label='Name'
                            name='name'
                            defaultValue={user.displayName}
                            onChange={handleSignInData}
                            sx={{ width: '75%', marginBottom: '15px' }}
                            variant='outlined'
                        />
                        <TextField
                            id='outline-basic'
                            label='Email'
                            name='email'
                            type='email'
                            defaultValue={user.email}
                            onChange={handleSignInData}
                            sx={{ width: '75%', marginBottom: '15px' }}
                            variant='outlined'
                        />
                        <TextField
                            id='outline-basic'
                            label='Mobile Number'
                            name='number'
                            onChange={handleSignInData}
                            sx={{ width: '75%', marginBottom: '15px' }}
                            variant='outlined'
                        />
                        <TextField
                            id='outline-basic'
                            label='Date Of Birth'
                            name='number'
                            onChange={handleSignInData}
                            sx={{ width: '75%', marginBottom: '15px' }}
                            variant='outlined'
                        />
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Area"
                            name='area'
                            sx={{ width: '75%', marginBottom: '15px' }}
                            defaultValue={area}
                            onChange={handleSignInData}
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
                            name='blood'
                            label="Blood Group"
                            sx={{ width: '75%', marginBottom: '15px' }}
                            value={blood}
                            onChange={handleSignInData}
                        >
                            {BloodGroups.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <input
                            type='submit'
                            className='form-input'
                            value='Join'
                        />
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default JoinDonor;
