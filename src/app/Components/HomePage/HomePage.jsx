"use client"; 
import React from 'react';
import Banner from './Banner';
import WelcomeSection from './WelcomeSection';
import ChefSpecial from './ChefSpecial';
import ClientsReview from './ClientsReview';
import OurServices from './OurServices';
import AwardSection from './AwardSection';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <WelcomeSection/>
            <ChefSpecial/>
            <ClientsReview/>
            <OurServices/>
            <AwardSection/>
        </div>
    );
};

export default HomePage;