import { Box } from '@mui/system';
import React from 'react';
import BloodGroups from '../BloodGroups/BloodGroups';
import DonateBenefits from '../DonateBenefits/DonateBenefits';
import DonationProcess from '../DonationProcess/DonationProcess';
import Footer from '../Footer/Footer';
import MainNavBar from '../MainNavBar/MainNavBar';
import News from '../News/News';
import RecentDonors from '../RecentDonors/RecentDonors';
import Review from '../Review/Review';
import Testimonial from '../Testimonial/Testimonial';
import { TopBanner } from '../TopBanner/TopBanner';
import TopBar from '../TopBar/TopBar';
import Volunteers from '../Volunteers/Volunteers';

const Home = () => {
    return (
        <div>
            <Box sx={{ paddingX: { xs: '10px', md: '150px' } }}>
                <MainNavBar></MainNavBar>
                <TopBanner></TopBanner>
                <DonationProcess></DonationProcess>
                <BloodGroups />
                <RecentDonors />
                <DonateBenefits />
                <Volunteers />
            </Box>
            <Testimonial />
            <Box sx={{ paddingX: { xs: '10px', md: '150px' } }}>
                <Review />
                <News/>
            </Box>
        </div>
    );
};

export default Home;