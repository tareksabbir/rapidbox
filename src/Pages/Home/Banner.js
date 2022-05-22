import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';


const Banner = () => {
    return (
        <>
            <section class="min-h-96 flex justify-center items-center flex-1 overflow-hidden relative py-16 md:py-20 xl:py-48">

                <img src="https://images.unsplash.com/photo-1600348759986-dc35c2ec7743?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="" class="w-full h-full object-cover object-center absolute inset-0" />
                <div class="bg-gray-400 mix-blend-multiply absolute inset-0"></div>

                <div class="sm:max-w-xl flex flex-col items-center relative p-4">
                    <p class="text-primary text-lg sm:text-xl text-center mb-4 md:mb-8">Very proud to introduce</p>
                    <h1 class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">Revolutionary way to build the web</h1>

                    <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                        <a href="/" class="inline-block bg-primary hover:bg-secondary active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-black text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Start now</a>

                        <a href="/" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-800 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Take tour</a>
                    </div>
                </div>

            </section>

        </>
    );
};

export default Banner;