import React, { useEffect, useState } from 'react';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://salty-ravine-28731.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    return (
        <div>
            <div className="overflow-x-auto">
                <div className="pl-4 lg:px-10 2xl:px-20 flex flex-row lg:py-5 items-end space-x-4">
                    <h1 className="text-2xl font-semibold leading-9 text-gray-800">Manage All Orders</h1>
                </div>
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Buyer Name</th>
                            <th>Product</th>
                            <th>Total Bill</th>
                            <th>Status</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.buyerName}</td>
                                <td>{order.name}</td>
                                <td>${order.bill}</td>
                                <td>
                                    {(!order.paid) && <button className="btn btn-xs text-white">Unpaid Order</button>}
                                    {(order.paid) && <button className="btn btn-xs btn-primary text-white ">Pending</button>}</td>
                                <td>

                                    {(order.bill && order.paid) && <button className="btn btn-xs bg-green-800 text-white ">Ship Now</button>}
                                </td>

                            </tr>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrder;