import React from 'react';
import { Link } from 'react-router-dom';


const Error = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-20">
            <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                <div className="grid sm:grid-cols-2 gap-8">

                    <div className="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
                        <p className="text-primary text-sm md:text-base font-semibold uppercase mb-4">Error 404</p>
                        <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">Page not found</h1>

                        <p className="text-gray-500 md:text-lg text-center sm:text-left mb-8">The page you’re looking for doesn’t exist.</p>

                        <Link to='/' className="inline-block bg-primary hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-800 active:text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Go home</Link>
                    </div>

                    <div className="h-80 md:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg relative">
                        <img src="https://images.unsplash.com/photo-1626790680787-de5e9a07bcf2?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="" class="w-full h-full object-cover object-center absolute inset-0" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;