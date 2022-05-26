import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order/buyer?buyerEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])
    return (
        <div>
            <div class="overflow-x-auto">
                <div className="pl-4 lg:px-10 2xl:px-20 flex flex-row lg:py-5 items-end space-x-4">
                    <h1 className="text-2xl font-semibold leading-9 text-gray-800">My Orders</h1>
                </div>
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Order Id</th>
                            <th>Total Bill</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.orderId}</td>
                                <td>$ {order.bill}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;