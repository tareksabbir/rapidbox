import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
// import auth from '../../firebase.init';


const Dashboard = () => {
    // const [user] = useAuthState(auth);

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='lg:hidden flex justify-between lg:justify-center lg:items-center lg:text-center  lg:text-lg py-3 px-10 text-black  bg-primary'>Welcome To Your Dashboard !!
                        <label for="my-drawer-2" className="text-sm drawer-button flex justify-center lg:hidden bg-black text-white px-3 py-1 rounded-lg font-semibold">Menu</label></h2>
                    <Outlet></Outlet>



                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-52 text-base-content bg-black">
                        <li><Link to='/dashboard' className=' text-white hover:bg-gray-400 lg:mt-5 '>My Profile</Link></li>
                        <li><NavLink to='/dashboard/myOrder' className=' text-white hover:bg-gray-400 lg:mt-5 '>My Orders</NavLink></li>
                        <li><NavLink to='/dashboard/reviews' className=' text-white hover:bg-gray-400 lg:mt-5 '>Add Review</NavLink></li>

                        <li><NavLink to='/dashboard/manage_all_orders' className=' text-white hover:bg-gray-400 lg:mt-5  '>Manage All Orders</NavLink></li>
                        <li><NavLink to='/dashboard/add_product' className=' text-white hover:bg-gray-400 lg:mt-5 '>Add Product</NavLink></li>
                        <li><NavLink to='/dashboard/make_admin' className=' text-white hover:bg-gray-400 lg:mt-5 '>Make Admin</NavLink></li>
                        <li><NavLink to='/dashboard/manage_products' className=' text-white hover:bg-gray-400 lg:mt-5'>Manage Products</NavLink></li>




                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;