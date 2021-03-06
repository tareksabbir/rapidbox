import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12 mt-2">
                <div className="max-w-screen-2xl  mx-auto">


                    <section className="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-secondary overflow-hidden  relative py-16 md:py-20 xl:py-48">

                        <img src="https://images.unsplash.com/photo-1501360575895-3f3f2639fd74?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="" className="w-full h-full object-cover object-center absolute inset-0" />

                        <div className="bg-secondary mix-blend-multiply absolute inset-0"></div>

                        <div className="sm:max-w-xl flex flex-col items-center relative p-4">
                            <p className="text-primary text-lg sm:text-xl text-center mb-4 md:mb-8">Tools that come in handy</p>
                            <h1 className="text-white text-4xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Fom hand tools sets to other essentials ,We have got your covered</h1>

                            <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                                <a href="/" className="inline-block bg-primary hover:bg-secondary hover:text-white active:bg-primary focus-visible:ring ring-indigo-300 text-black text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Start now</a>

                                <a href="/" className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Take tour</a>
                            </div>
                        </div>

                    </section>
                </div>
            </div>

        </div>
    );
};

export default Banner;