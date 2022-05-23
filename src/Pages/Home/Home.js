import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import Company from './Company';
import ExtraSection from './ExtraSection';
import Products from './Products';
import Starts from './Starts';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Starts></Starts>
            <Products></Products>

            <ExtraSection></ExtraSection>
            <Company></Company>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;