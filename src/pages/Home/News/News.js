import React from 'react'
import { Box } from '@mui/system';
import img1 from '../../../images/donor-1.jpg'
import img2 from '../../../images/donor-2.jpg'
import img3 from '../../../images/donor-3.jpg'
import { Grid } from '@mui/material';

const news = [
    {
        id: 1,
        title: 'Subject to ecstatic children up as built match gravida',
        news: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae sint tempore cum adipisci soluta, dicta saepe officiis minus ab ipsam?',
        img: img1,
        man: 'Moyen'
    },
    {
        id: 2,
        title: 'Subject to ecstatic children up as built match gravida',
        news: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae sint tempore cum adipisci soluta, dicta saepe officiis minus ab ipsam?',
        img: img2,
        man: 'Moyen'
    },
    {
        id: 3,
        title: 'Subject to ecstatic children up as built match gravida',
        news: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae sint tempore cum adipisci soluta, dicta saepe officiis minus ab ipsam?',
        img: img3,
        man: 'Moyen'
    }
]

const News = () => {

    return (
        <Box sx={{ backgroundColor: '#EDEDEE ', padding: '50px 10px', borderRadius: '5px', marginY: '15px' }}>
            <h1 className='blood' >
                News Update
            </h1>
            <Grid container spacing={2}>
                {news.map(n => <Grid item xs={12} md={4}>
                    <Box sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', paddingBottom: '5px', borderRadius: '5px' }}>
                        <img style={{ width: '100%', objectFit: 'cover', maxHeight: '200px' }} src={n.img} alt="" />
                        <Box sx={{ paddingX: '10px', textAlign: 'left' }}>
                            <p style={{ color: 'gray', textAlign: 'left' }}>posted by {n.man}</p>
                            <h3 style={{ textAlign: 'left', color: '#052D65' }}>{n.title}</h3>
                            <p style={{ color: 'gray', textAlign: 'left' }}>posted by {n.news}</p>
                            <button style={{ border: 'none',fontWeight:600,color:'gray' }}>Read more</button>
                        </Box>
                    </Box>
                </Grid>)}
            </Grid>
        </Box>
    )
}

export default News;
