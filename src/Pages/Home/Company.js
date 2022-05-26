import React from 'react';
import amazon from '../../Assets/img/amazon.png'
import alibaba from '../../Assets/img/ali.png'
import ebay from '../../Assets/img/ebay.png'
import flip from '../../Assets/img/flipcart.png'
import zola from '../../Assets/img/zalando.png'
import big from '../../Assets/img/bigcommerce-logo-square.png'

const Company = () => {
    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-12 lg:px-20">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="flex flex-col lg:flex-row lg:justify-between items-center mb-4 md:mb-8">
                        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-2 lg:mb-0">Trusted by the best</h2>

                        <p className="max-w-md text-gray-400 text-center lg:text-right">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 rounded-lg gap-4 lg:gap-6">

                        <div className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={amazon} className='h-10 grayscale' alt="" />

                        </div>

                        <div className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={alibaba} className='h-20 grayscale' alt="" />
                        </div>

                        <div className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={flip} className='h-10 grayscale' alt="" />
                        </div>

                        <div className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={ebay} className='h-10 grayscale' alt="" />
                        </div>

                        <div className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={zola} className='h-8 grayscale' alt="" />
                        </div>


                        <div className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-4">
                            <img src={big} className='h-14 grayscale' alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;