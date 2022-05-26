import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/icons/tool-box (1).png'
import auth from '../../firebase.init';

const Navbar = ({ children }) => {
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);

    }
    return (
        <>
            <div className="drawer drawer-end ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">

                    <div className="w-full navbar px-5 lg:px-10 lg:mt-3 mt-2 ">
                        <img src={logo} className="h-8 w-8" alt="" />
                        <div className="flex-1 mx-2 text-2xl lg:text-2xl font-semibold">Rapidbox</div>
                        <div className="flex-none lg:hidden">
                            <label for="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal gap-x-2">

                                <li><NavLink to='/' className=' rounded-lg'>Home</NavLink></li>
                                <li><NavLink to='/product' className=' rounded-lg'>Product</NavLink></li>
                                <li><NavLink to='/review' className=' rounded-lg'>Reviews</NavLink></li>
                                <li><NavLink to='/blog' className=' rounded-lg'>Blogs</NavLink></li>
                                <li><NavLink to='/portpholio' className=' rounded-lg'>Portpholio</NavLink></li>
                                {
                                    user && <li><NavLink to="/dashboard" className=' rounded-lg'>Dashboard</NavLink></li>
                                }
                                {
                                    user ?
                                        <li><NavLink onClick={handleLogout} to='/login' className=' rounded-lg'>Logout</NavLink></li>
                                        :
                                        <li><NavLink to='/login' className=' rounded-lg'>Login</NavLink></li>
                                }

                                <li><Link to='/contact' tabIndex="0" className="btn btn-secondary btn-outline m-1 rounded-lg">Contact Us</Link></li>

                            </ul>
                        </div>
                    </div>
                    {children}
                </div>

                <div className="drawer-side">
                    <label for="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">

                        <li><NavLink to='/' className=' rounded-lg'>Home</NavLink></li>
                        <li><NavLink to='/product' className=' rounded-lg'>Product</NavLink></li>
                        <li><NavLink to='/blog' className=' rounded-lg'>Blogs</NavLink></li>
                        <li><NavLink to='/portpholio' className=' rounded-lg'>Portpholio</NavLink></li>

                        {
                            user ?
                                <li><NavLink onClick={handleLogout} to='/login' className=' rounded-lg'>Logout</NavLink></li>
                                :
                                <li><NavLink to='/login' className=' rounded-lg'>Login</NavLink></li>
                        }
                        <li><Link to='/contact' tabIndex="0" className="btn btn-primary btn-outline m-1 rounded-lg">Contact Us</Link></li>


                    </ul>

                </div>
            </div >


        </>
    );
};

export default Navbar;