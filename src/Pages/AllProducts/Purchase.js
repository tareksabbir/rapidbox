import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://salty-ravine-28731.herokuapp.com/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    return (
        <>
            <div>
                <div className="bg-white py-6 sm:py-8 lg:py-12">
                    <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">

                            <div className="space-y-4">
                                <div className="bg-gray-100 rounded-lg overflow-hidden relative lg:mt-14">
                                    <img src={product.img} loading="lazy" alt="" className="w-full h-full object-cover object-center" />

                                    <span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">sale</span>
                                </div>


                            </div>

                            <div className="md:py-8">

                                <div className="mb-2 md:mb-3">
                                    <span className="inline-block text-gray-500 mb-0.5">Best Selling</span>
                                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">{product.name}</h2>
                                </div>

                                <div className="flex items-center mb-6 md:mb-5">
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

                                    <span className="text-gray-500 text-sm ml-2">4.2</span>

                                    <a href="/" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold transition duration-100 ml-4">view all 47 reviews</a>
                                </div>
                                <div className='mb-3'>
                                    <div className="text-gray-800 text-lg font-semibold mb-3">Description</div>

                                    <p className="text-gray-500">
                                        {product.description}
                                    </p>

                                </div>

                                <div className="mb-4 md:mb-6">
                                    <span className="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">Color</span>

                                    <div className="flex flex-wrap gap-2">
                                        <span className="w-8 h-8 bg-gray-800 border ring-2 ring-offset-1 ring-gray-800 rounded-full transition duration-100"></span>
                                        <button type="button" className="w-8 h-8 bg-gray-500 border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100"></button>
                                        <button type="button" className="w-8 h-8 bg-gray-200 border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100"></button>
                                        <button type="button" className="w-8 h-8 bg-white border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100"></button>
                                    </div>
                                </div>



                                <div className="mb-4">
                                    <p className='font-bold mb-2'>Minimum Order : <span className='font-normal text-gray-500'>{product.minimumOrder} pice</span></p>
                                    <p className='font-bold mb-2'>Available Product : <span className='font-normal text-gray-500'>{product.available} pice</span></p>
                                    <div className="flex items-end gap-2">
                                        <span className="text-gray-800 text-xl md:text-2xl font-bold">${product.price}<span className='text-sm'>/per pice</span></span>
                                        <span className="text-gray-500 text-sm"> (incl. VAT plus shipping)</span>
                                    </div>


                                </div>

                                <div className="flex items-center text-gray-500 gap-2 mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                    </svg>

                                    <span className="text-sm">20-40 day shipping</span>
                                </div>

                                <div className="flex gap-2.5">
                                    <a href={`/order/${product._id}`} className="inline-block flex-1 sm:flex-none bg-primary hover:bg-secondary active:bg-secondary focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Order Now</a>

                                    <a href="/" className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </a>
                                </div>



                            </div>

                        </div>
                    </div>
                </div>

            </div>



        </>
    );
};

export default Purchase;