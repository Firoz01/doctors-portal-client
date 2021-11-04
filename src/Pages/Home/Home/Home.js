import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Exceptional from '../Exceptional/Exceptional';
import Services from '../Services/Services';

const Home = () => {
    return (
      <div>
        <Navigation></Navigation>
        <Banner />
        <Services></Services>
        <Exceptional></Exceptional>
        <AppointmentBanner></AppointmentBanner>
      </div>
    );
};

export default Home;