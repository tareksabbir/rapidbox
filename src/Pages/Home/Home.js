import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import Company from './Company';
import ExtraSection from './ExtraSection';
import Products from './Products';
import Starts from './Starts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Starts></Starts>
            <Products></Products>
            <Company></Company>
            <ExtraSection></ExtraSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;