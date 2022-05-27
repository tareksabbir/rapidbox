import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://salty-ravine-28731.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const displayContent = (text) => {
        return text.length < 50 ? text : text.slice(0, 50) + "...";
    };

    return (
        <>

            <section className="text-gray-600 body-font bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 px-5">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Some of our latest products</h1>
                            <div className="h-1 w-20 bg-primary rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">We wish to become the most preferred or go-to destination for all Industrial equipment within Bangladesh. Our repertoire of products includes the widest choice of tools catering to all sectors and trades.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            [...products].reverse().slice(0, 12).map(product => <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-white p-6 rounded-lg shadow-xl">
                                    <img className="h-52 rounded mx-auto object-cover object-center mb-6" src={product.img} alt="content" />
                                    <h3 className="tracking-widest text-primary text-xs font-semibold title-font">BEST SELLING</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-1">{product.name}</h2>
                                    <p className="leading-relaxed text-base"><span className='font-semibold text-black text-sm'>Minimum Order: </span>{product.minimumOrder} pice</p>
                                    <p className="leading-relaxed text-sm">{displayContent(product.description)}</p>

                                    <div className='flex justify-between items-center mt-3'>
                                        <h2 className='text-secondary text-xl font-semibold'>$ {product.price}<span className='text-sm'>/per pice</span></h2>
                                        <Link to={`/purchase/${product._id}`} className='bg-primary text-black font-semibold text-sm rounded-lg px-4 py-1'>Order</Link>

                                    </div>
                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </section>
        </>

    );
};

export default Products;