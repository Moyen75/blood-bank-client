import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import img from '../../../images/login-3.jpg'
import facebook from '../../../images/facebook.png'
import google from '../../../images/search.png'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router'
import useAuth from '../../../context/useAuth'
import Swal from 'sweetalert2'

const Register = () => {
    const [data, setData] = useState('')
    const { googleSignIn, facebookSignIn, createUser } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const handleSignInData = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...data }
        newData[field] = value;
        setData(newData)
    }
    const handleSingUp = e => {
        e.preventDefault()
        if (data.password !== data.password2) {
            didNotMatched()
            return
        }
        createUser(data.email, data.password, data.name, navigate, fail)
        console.log(data)
    }
    const handleGoogleSignIn = () => {
        googleSignIn(navigate, location)
    }
    const handleFacebookSignIn = () => {
        facebookSignIn(navigate, location)
    }
    const success = () => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }
    const fail = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        })
    }
    const didNotMatched = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Password didn't matched!`
        })
    }
    return (
        <Box sx={{ paddingX: { xs: '10px', md: '150px' }, paddingY: { xs: '10px', md: '30px' } }}>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item xs={0} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <img style={{ width: '100%' }} src={img} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ maxWidth: '395px', marginX: 'auto', minHeight: { xs: '20vh', md: '0' }, paddingY: { xs: '40%', md: '0' }, overflow: 'hidden' }}>
                        <h1 style={{ color: '#1287EA' }}>Register Now</h1>
                        <form onSubmit={handleSingUp}>
                            <TextField
                                id='outline-basic'
                                label='Name'
                                name='name'
                                type='text'
                                onChange={handleSignInData}
                                sx={{ width: '75%', marginBottom: '15px' }}
                                variant='outlined'
                            />
                            <TextField
                                id='outline-basic'
                                label='Email'
                                name='email'
                                type='email'
                                onChange={handleSignInData}
                                sx={{ width: '75%', marginBottom: '15px' }}
                                variant='outlined'
                            />
                            <TextField
                                id='outline-basic'
                                label='Password'
                                name='password'
                                type='password'
                                onChange={handleSignInData}
                                sx={{ width: '75%', marginBottom: '15px' }}
                                variant='outlined'
                            />
                            <TextField
                                id='outline-basic'
                                label='Confirm Password'
                                name='password2'
                                type='password'
                                onChange={handleSignInData}
                                sx={{ width: '75%', marginBottom: '15px' }}
                                variant='outlined'
                            />
                            <input
                                type='submit'
                                className='form-input'
                                value='Register '
                            />
                        </form>
                        <p>OR</p>
                        <Box sx={{ width: '75%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', justifyContent: 'space-between', marginX: 'auto' }} onClick={handleGoogleSignIn}>
                            <img style={{ width: '10%', border: '1px solid gray', padding: '2px' }} src={google} alt="" />
                            <Typography sx={{ backgroundColor: '#1287EA', width: '100%', padding: '5px', color: 'white' }}>
                                Continue With Google
                            </Typography>
                        </Box>
                        <Box sx={{ width: '75%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', justifyContent: 'space-between', marginX: 'auto', marginTop: '5px' }} onClick={handleFacebookSignIn}>
                            <img style={{ width: '10%', border: '1px solid gray', padding: '2px' }} src={facebook} alt="" />
                            <Typography sx={{ backgroundColor: '#1287EA', width: '100%', padding: '5px', color: 'white' }}>
                                Continue With Facebook
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', marginX: 'auto', width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
                            <Typography>
                                Already Registered?
                            </Typography>
                            <Link style={{ display: 'inline-block', textDecoration: 'none' }} to='/login'>Sign In</Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Register;
