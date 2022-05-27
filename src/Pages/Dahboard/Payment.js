import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L3iclIElm13F3SKhFfJlnYUv0ScTtr6VT75Qicns5ZZrCdWmC7HwsLzwAB1HvgLZTBvv15G9xr9AD8R4RZe0xxT00wrwXBvJQ');

const Payment = () => {
    const { id } = useParams();
    const url = `https://salty-ravine-28731.herokuapp.com/order/${id}`
    const { data: order, isLoading } = useQuery(['ordersPay', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='lg:p-20 bg-gray-600  mx-auto mt-10'>

            <div className='mx-auto bg-slate-50 rounded-lg shadow-2xl lg:p-20'>

                <div>
                    <h1 className='text-2xl font-semibold'>Product : {order.name}</h1>
                    <h1 className='text-lg mt-3'>Product : #{order.orderId}</h1>
                    <h1 className='mt-5'>Buyer : {order.buyerName}</h1>
                    <h2 className='mt-5 font-semibold mb-10'>Total Price : ${order.bill}</h2>

                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>

            </div>

        </div>
    );
};

export default Payment;