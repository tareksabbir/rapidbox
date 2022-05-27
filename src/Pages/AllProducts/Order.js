import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const Order = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState({})

    useEffect(() => {
        const url = `https://salty-ravine-28731.herokuapp.com/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    useEffect(() => {
        const url = `https://salty-ravine-28731.herokuapp.com/user/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setEmail(data))
    });

    const orderPrice = parseFloat(product.minimumOrder) * parseFloat(product.price)
    const [newprice, setNewPrice] = useState('')
    const minimum = parseInt(product.minimumOrder);
    const max = parseInt(product.available);
    const [shipping, setShipping] = useState('')

    const handelShipping = (event) => {
        setShipping(event.target.value);
    }

    const [billingAddress, setBillingAddress] = useState('')
    const handelBilling = (event) => {
        setBillingAddress(event.target.value);
    }

    const countPrice = (event) => {
        const pice = event.target.value;
        if (pice < minimum || pice > max) {
            Swal.fire(
                'Sorry We cant take this!',
                'you cant order less then minimum order or more dan available stock!',
                'error'
            )
        } else if (pice > minimum || pice < max || pice === minimum) {
            const orderPrice = parseFloat(pice) * parseFloat(product.price);
            setNewPrice(orderPrice)

        }
    }


    const placeOrder = () => {
        const orderId = product._id;
        const name = product.name;
        const bill = newprice ? newprice : orderPrice;
        const buyerEmail = user.email;
        const buyerName = email.displayName;
        const shippingAddress = shipping ? shipping : email.address;
        const billaddress = billingAddress ? billingAddress : email.address;

        const orderInfo = { name, orderId, bill, buyerEmail, buyerName, shippingAddress, billaddress }
        console.log(orderInfo)

        fetch('https://salty-ravine-28731.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderInfo),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire(
                    'Thank You For Your Order!',
                    'Please make sure your payment now!',
                    'success'
                )
            })
    }

    return (
        <>
            <div className='lg:px-20 px-8'>

                <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                    <div className="flex justify-start item-start space-y-2 flex-col ">
                        <h1 className="text-xl lg:text-2xl font-semibold leading-7 lg:leading-9  text-gray-800">Order #{product._id}</h1>

                    </div>
                    <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                                <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                    <div className="pb-4 md:pb-8 w-full md:w-40">
                                        <img className="w-full hidden  md:block" src={product.img} alt="dress" />
                                        <img className="w-full md:hidden " src={product.img} alt="dress" />
                                    </div>
                                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{product.name}</h3>
                                            <div className="flex justify-start items-start flex-col space-y-2">
                                                <p className="text-sm leading-none text-gray-800">
                                                    <span className="text-gray-400">Minimum Quantity : </span> {product.minimumOrder}
                                                </p>
                                                <p className="text-sm leading-none text-gray-800">
                                                    <span className="text-gray-400">Available Quantity : </span> {product.available}
                                                </p>
                                                <p className=" leading-none  text-red-800 ">
                                                    Please Order First then Payment
                                                </p>

                                            </div>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-start w-full">
                                            <p className="text-base xl:text-lg leading-6">
                                                ${product.price}
                                            </p>

                                            <input onBlur={countPrice} type="text" placeholder="Type here" defaultValue={product.minimumOrder} className="input input-bordered input-sm w-full max-w-xs" />

                                            <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">${newprice ? newprice : orderPrice}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full ">

                                </div>
                            </div>
                            <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                                <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                                    <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                        <div className="flex justify-between  w-full">
                                            <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                            <p className="text-base leading-4 text-gray-600">${newprice ? newprice : orderPrice}</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base leading-4 text-gray-800">
                                                Discount
                                            </p>
                                            <p className="text-base leading-4 text-gray-600">$0.00</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base leading-4 text-gray-800">Shipping</p>
                                            <p className="text-base leading-4 text-gray-600">$0.00</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                        <p className="text-base font-semibold leading-4 text-gray-600">${newprice ? newprice : orderPrice}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Shipping</h3>
                                    <div className="flex justify-between items-start w-full">
                                        <div className="flex justify-center items-center space-x-4">
                                            <div className="w-8 h-8">
                                                <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                            </div>
                                            <div className="flex flex-col justify-start items-center">
                                                <p className="text-lg leading-6 font-semibold text-gray-800">
                                                    DPD Delivery
                                                    <br />
                                                    <span className="font-normal">Delivery with 20-40 Days</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div onClick={placeOrder} className="w-full flex justify-center items-center">
                                        <button className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">Place Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
                            <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                                <div className="flex flex-col justify-start items-start flex-shrink-0">
                                    <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                        <img src={email.photoURL} className="h-14 w-14" alt="avatar" />
                                        <div className=" flex justify-start items-start flex-col space-y-2">
                                            <p className="text-base font-semibold leading-4 text-left text-gray-800">{email.displayName ? email.displayName : user.displayName}</p>
                                            <p className="text-sm leading-5 text-gray-600">Previous Orders</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p className="cursor-pointer text-sm leading-5 text-gray-800">{user.email}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                                    <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                                        <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                                            <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                            <input onBlur={handelShipping} type="text" className="input input-bordered input-sm w-full max-w-xs" defaultValue={email.address} />

                                        </div>
                                        <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                                            <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>

                                            <input onBlur={handelBilling} type="text" className="input input-bordered input-sm w-full max-w-xs" defaultValue={email.address} />
                                        </div>
                                    </div>
                                    <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                        <button className="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">Make Payment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </>
    );
};

export default Order;