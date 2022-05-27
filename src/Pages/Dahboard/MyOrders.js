import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`https://salty-ravine-28731.herokuapp.com/order/buyer?buyerEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])
    const orderDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this user?');
        if (proceed) {
            console.log(id);
            const url = `https://salty-ravine-28731.herokuapp.com/order/${id}`
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
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }

    }


    return (
        <div>
            <div className="overflow-x-auto">
                <div className="pl-4 lg:px-10 2xl:px-20 flex flex-row lg:py-5 items-end space-x-4">
                    <h1 className="text-2xl font-semibold leading-9 text-gray-800">My Orders</h1>
                </div>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Transaction Id</th>
                            <th>Total Bill</th>

                            <th>Payment</th>
                            <th>Cancel Order</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>
                                    {(order.bill && order.paid) && <span className='text-black'>{order.transactionId}</span>}
                                </td>
                                <td>$ {order.bill}</td>

                                <td>
                                    {(order.bill && !order.paid) && <Link to={`/dashboard/payment/${order._id}`} className="btn btn-xs text-white">Pay</Link>}
                                    {(order.bill && order.paid) && <span className='text-black'>Paid</span>}
                                </td>
                                <td>
                                    {(order.bill && !order.paid) && <button onClick={() => orderDelete(order._id)} className="btn btn-xs text-white">Cancel</button>}
                                    {(order.bill && order.paid) && <span className='text-black'>Can Not</span>}
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;