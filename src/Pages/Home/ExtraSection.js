import React from 'react';
import { Link } from 'react-router-dom';
import credit from '../../Assets/icons/credit-card.png'
import delivery from '../../Assets/icons/fast-delivery.png'
import desk from '../../Assets/icons/help-desk.png'

const ExtraSection = () => {
    return (
        <div>
            <section className="text-gray-600 body-font bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Why you should buy product from us</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-secondary text-primary mb-5 flex-shrink-0">
                                <img src={desk} className="h-6 w-6" alt="" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Friendly Service</h2>
                                <p className="leading-relaxed text-base">Have a query or just want to place
                                    an order? We are at your Service.</p>
                                <a href='/' className="mt-3 text-primary inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-secondary text-primary mb-5 flex-shrink-0">
                                <img src={delivery} className="h-6 mt-4 w-6" alt="" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Nationwide Delivery</h2>
                                <p className="leading-relaxed text-base">Over 20,000 pincodes Serviceable
                                    across Bangladesh through FedEX.</p>
                                <a href='/' className="mt-3 text-primary inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-secondary text-primary mb-5 flex-shrink-0">
                                <img src={credit} className="h-6 w-6" alt="" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">100% Secure Payment</h2>
                                <p className="leading-relaxed text-base">Partnered with Bangladeshi's most secure payment solutions.

                                </p>
                                <a href='/' className="mt-3 text-primary inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-5 lg:mt-14'>
                        <Link to="/product" className="inline-block bg-primary hover:bg-secondary hover:text-white active:bg-primary focus-visible:ring ring-indigo-300 text-black text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">See All Product</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtraSection;