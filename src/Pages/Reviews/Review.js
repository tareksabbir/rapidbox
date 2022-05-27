import React, { useEffect, useState } from 'react';

import Footer from '../Footer/Footer';


const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://salty-ravine-28731.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

                        <div>
                            <div className="border rounded-lg p-4">
                                <h2 className="text-gray-800 text-lg lg:text-xl font-bold mb-3">Customer Reviews</h2>

                                <div className="flex items-center gap-2 mb-0.5">

                                    <div className="flex gap-0.5 -ml-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>

                                    <span className="text-sm font-semibold">4/5</span>
                                </div>

                                <span className="block text-gray-500 text-sm">Bases on 33k+ reviews</span>

                                <div className="flex flex-col border-t border-b gap-2 py-5 my-5">

                                    <div className="flex items-center gap-3">
                                        <span className="w-10 text-gray-600 text-sm text-right whitespace-nowrap">5 Star</span>

                                        <div className="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded">
                                            <span className="w-3/4 h-full bg-yellow-400 rounded"></span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="w-10 text-gray-600 text-sm text-right whitespace-nowrap">4 Star</span>

                                        <div className="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded">
                                            <span className="w-1/2 h-full bg-yellow-400 rounded"></span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="w-10 text-gray-600 text-sm text-right whitespace-nowrap">3 Star</span>

                                        <div className="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded">
                                            <span className="w-1/6 h-full bg-yellow-400 rounded"></span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="w-10 text-gray-600 text-sm text-right whitespace-nowrap">2 Star</span>

                                        <div className="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded">
                                            <span className="w-1/4 h-full bg-yellow-400 rounded"></span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="w-10 text-gray-600 text-sm text-right whitespace-nowrap">1 Star</span>

                                        <div className="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded">
                                            <span className="w-1/12 h-full bg-yellow-400 rounded"></span>
                                        </div>
                                    </div>

                                </div>

                                <a href="/dashboard/reviews" className="block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3">Write a review</a>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="border-b pb-4 md:pb-6">
                                <h2 className="text-gray-800 text-lg lg:text-xl font-bold">Top Reviews</h2>
                            </div>

                            <div className="divide-y">

                                {
                                    [...reviews].reverse().map(review => <div
                                        className="flex flex-col gap-3 py-4 md:py-8">
                                        <div>
                                            <span className="block text-sm font-bold">{review.name}</span>
                                            <span className="block text-gray-500 text-sm">Date : {review.date} </span>
                                        </div>


                                        <div className="flex gap-0.5 -ml-1 items-center">
                                            <span>{review.stars}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-600">{review.massage}</p>
                                    </div>)
                                }


                            </div>

                            <div className="border-t pt-6">
                                <a href="/" className="flex items-center text-indigo-400 hover:text-indigo-500 active:text-indigo-600 font-semibold transition duration-100 gap-0.5">Read all reviews</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Review;