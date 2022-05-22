import React from 'react';
import tools from '../../Assets/icons/drill.png'
import flag from '../../Assets/icons/flag.png'
import star from '../../Assets/icons/star.png'
import money from '../../Assets/icons/coins.png'


const Starts = () => {
    return (
        <div>
            <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="max-w-screen-lg px-4 md:px-8 mx-auto">

                    <div class="mb-8 md:mb-12">
                        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Our Business By The Numbers</h2>

                        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                    </div>


                    <div class="grid grid-cols-2 md:grid-cols-4 bg-secondary rounded-lg gap-6 md:gap-8 p-6 md:p-8">

                        <div class="flex  items-center">
                            <img src={tools} className="h-11 w-11 mb-2" alt="" />
                            <div class="ml-4">
                                <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">50+</div>
                                <div class="text-primary text-sm sm:text-base">Tools</div>
                            </div>
                        </div>

                        <div class="flex items-center">
                            <img src={flag} className="h-10 w-10 mb-2" alt="" />
                            <div class="ml-4">
                                <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">100+</div>
                                <div class="text-primary text-sm sm:text-base">Countrys</div>
                            </div>
                        </div>


                        <div class="flex items-center">
                            <img src={star} className="h-8 w-8 mb-2" alt="" />
                            <div class="ml-4">
                                <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">33K+</div>
                                <div class="text-primary text-sm sm:text-base">Reviews</div>
                            </div>
                        </div>

                        <div class="flex  items-center">
                            <img src={money} className="h-8 w-8 mb-2" alt="" />
                            <div className='ml-4'>
                                <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">120M+</div>
                                <div class="text-primary text-sm sm:text-base">Annual revenue</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Starts;