import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://salty-ravine-28731.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const toolDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this product?');
        if (proceed) {
            console.log(id);
            const url = `https://salty-ravine-28731.herokuapp.com/tools/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Item Deleted!',
                            'Your Item Deleted Successfully!',
                            'success'
                        )
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }

    }

    return (
        <div className=" py-12">
            {/* Desktop Responsive Start */}
            <div className="hidden sm:flex flex-col justify-start items-start">
                <div className="pl-4 lg:px-10 2xl:px-20 flex flex-row justify-center items-end space-x-4">
                    <h1 className="text-2xl font-semibold leading-9 text-gray-800">All Products</h1>

                </div>
                <table className="w-full mt-8 whitespace-nowrap">
                    <thead aria-label="table heading" className="w-full h-14 text-left py-2 bg-gray-50 border-gray-200 border-b ">
                        <tr>
                            <th className="text-sm font-medium leading-4 text-gray-600 2xl:pl-20 pl-4 lg:pl-10">YOUR PRODUCT</th>
                            <th className="text-sm font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">DESCRIPTION</th>
                            <th className="text-sm font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">PRICE</th>
                            <th className="text-sm font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">MORE OPTIONS</th>
                            <th className="text-sm font-medium leading-4 text-gray-600 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10" />
                        </tr>
                    </thead>
                    <tbody className="w-full text-left">
                        {
                            [...products].reverse().map(product => <tr className="border-gray-200 border-b  ">
                                <th>
                                    <img className=" pl-4 lg:pl-10 2xl:pl-20 w-52" src={product.img} alt="shoe" />
                                </th>
                                <th className="mt-10 text-sm font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                    <p className=" text-sm leading-4 text-gray-800">{product.name}</p>
                                </th>
                                <th className="my-10  pl-6 lg:pl-20 2xl:pl-52">
                                    <p className>${product.price}/ pice</p>
                                </th>
                                <th className="my-10 text-sm font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                    <a href={`/purchase/${product._id}`} className="hover:underline text-sm font-medium leading-none  text-gray-800 focus:outline-none focus:underline">
                                        View details
                                    </a>
                                </th>
                                <th className="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                                    <button onClick={() => toolDelete(product._id)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-sm leading-none text-red-600 hover:text-red-800">
                                        <p>Remove Item</p>
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {/* Desktop Responsive End */}
            {/* Mobile Responsive Start */}
            <div className=" flex justify-center items-center px-10">
                <div className="sm:hidden flex flex-col justify-start items-start ">
                    <div className="px-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
                        <p className="text-2xl font-semibold leading-9 text-gray-800">All Products</p>
                        <p className="text-sm leading-4 text-gray-600 pb-1">(12 Items)</p>
                    </div>
                    {
                        products.map(product => <div className="border-gray-200 border-b pb-10">
                            <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                                <div>
                                    <img src={product.img} alt="shoe" />
                                </div>
                            </div>
                            <div className="px-4 mt-6 flex justify-between w-full  jusitfy-center items-center">
                                <div>
                                    <p className="w-36 text-sm leading-6 text-gray-800">Jet black sportsmen shoes</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold leading-4 text-gray-800">$90</p>
                                </div>
                            </div>
                            <div className="px-4 mt-6 flex justify-between w-full  jusitfy-center items-center">
                                <div>
                                    <a href={`/purchase/${product._id}`} className="hover:underline text-sm font-medium leading-none focus:outline-none focus:underline  text-gray-800">
                                        {" "}
                                        View details
                                    </a>
                                </div>
                                <div>
                                    <button onClick={() => toolDelete(product._id)} className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-sm leading-none text-red-600 hover:text-red-800">
                                        <p>Remove Item</p>
                                    </button>
                                </div>
                            </div>
                        </div>)
                    }


                </div>
            </div>
            {/* Mobile Responsive End */}
        </div>
    );
}
export default ManageProducts