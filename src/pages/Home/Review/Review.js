import { Box } from '@mui/system';
import React from 'react'
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import img1 from '../../../images/donor-1.jpg'
import img2 from '../../../images/donor-2.jpg'
import img3 from '../../../images/donor-3.jpg'
import img4 from '../../../images/donor-4.jpg'
import img5 from '../../../images/volun-1.jpg'
import img6 from '../../../images/volun-2.jpg'
import img7 from '../../../images/volun-3.jpg'
import Rating from '@mui/material/Rating';
import SwiperCore, {
    Autoplay
} from 'swiper';

SwiperCore.use(Autoplay);
const reviews = [
    {
        name: 'Moyenul islam',
        rate: 5,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum recusandae possimus odit perferendis! Quidem repellendus porro ut, quis consectetur distinctio molestias perferendis eaque dolores ipsum nihil delectus laudantium eius fugiat fuga error, voluptatibus consequatur. Hic facere autem minus fugit. Cupiditate.',
        img: img1
    },
    {
        name: 'Nayenul islam',
        rate: 5,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum recusandae possimus odit perferendis! Quidem repellendus porro ut, quis consectetur distinctio molestias perferendis eaque dolores ipsum nihil delectus laudantium eius fugiat fuga error, voluptatibus consequatur. Hic facere autem minus fugit. Cupiditate.',
        img: img2
    },
    {
        name: 'Sajedul islam',
        rate: 5,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum recusandae possimus odit perferendis! Quidem repellendus porro ut, quis consectetur distinctio molestias perferendis eaque dolores ipsum nihil delectus laudantium eius fugiat fuga error, voluptatibus consequatur. Hic facere autem minus fugit. Cupiditate.',
        img: img3
    },
    {
        name: 'Majedul islam',
        rate: 5,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum recusandae possimus odit perferendis! Quidem repellendus porro ut, quis consectetur distinctio molestias perferendis eaque dolores ipsum nihil delectus laudantium eius fugiat fuga error, voluptatibus consequatur. Hic facere autem minus fugit. Cupiditate.',
        img: img4
    },
    {
        name: 'Atikul islam',
        rate: 5,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum recusandae possimus odit perferendis! Quidem repellendus porro ut, quis consectetur distinctio molestias perferendis eaque dolores ipsum nihil delectus laudantium eius fugiat fuga error, voluptatibus consequatur. Hic facere autem minus fugit. Cupiditate.',
        img: img5
    },
    {
        name: 'Rashidul islam',
        rate: 5,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum recusandae possimus odit perferendis! Quidem repellendus porro ut, quis consectetur distinctio molestias perferendis eaque dolores ipsum nihil delectus laudantium eius fugiat fuga error, voluptatibus consequatur. Hic facere autem minus fugit. Cupiditate.',
        img: img6
    },
    {
        name: 'Tarikul islam',
        rate: 5,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum recusandae possimus odit perferendis! Quidem repellendus porro ut, quis consectetur distinctio molestias perferendis eaque dolores ipsum nihil delectus laudantium eius fugiat fuga error, voluptatibus consequatur. Hic facere autem minus fugit. Cupiditate.',
        img: img7
    }
]
const Review = () => {
    return (
        <Box sx={{ padding: '50px 10px', borderRadius: '5px', marginY: '15px' }}>
            <h1 className='blood' >
                What peoples Says
            </h1>
            <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={2} virtual autoplay={{
                "delay": 2500
            }}>
                {reviews.map((s, index) => (
                    <SwiperSlide key={s.name} virtualIndex={index}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', margin: '10px 10px 30px', borderRadius: '5px', padding: '10px' }}>
                            <Box>
                                <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={s.img} alt="" />
                            </Box>
                            <Box sx={{ paddingLeft: '7px' }}>
                                <p style={{ textAlign: 'left' }}>
                                    {s.review.slice(0, 130)}
                                </p>
                                <Rating name="read-only" value={s.rate} readOnly />
                                <h4>
                                    {s.name}
                                </h4>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}

export default Review;
