// import { signOut } from 'firebase/auth';
import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import logo from "../../Assets/icons/flash.ico"
// import auth from '../../firebase.init';


const Navbar = ({ children }) => {
    // const [user] = useAuthState(auth);

    // const handleLogout = () => {
    //     signOut(auth);
    //     localStorage.removeItem('accessToken');
    // }
    return (
        <>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    <div className="w-full navbar text-white px-5 lg:px-10 bg-secondary mt-0 lg:py-5">
                        <img src={logo} className="h-10 w-10" alt="" />
                        <div className="flex-1 mx-2 text-xl lg:text-3xl font-bold text-primary">Induscity</div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal gap-x-2">

                                <li><NavLink to="/" className=' rounded-lg'>Home</NavLink></li>
                                <li><NavLink to="/Product" className=' rounded-lg'>Products</NavLink></li>
                                <li><NavLink to="/dashboard" className=' rounded-lg'>Dashboard</NavLink></li>
                                <li><NavLink to="/about" className=' rounded-lg'>About</NavLink></li>
                                <li><NavLink to="/review" className=' rounded-lg'>Reviews</NavLink></li>
                                <li><NavLink to="/blog" className=' rounded-lg'>Blog</NavLink></li>
                                <li><NavLink to="/portpholio" className=' rounded-lg'>Portpholio</NavLink></li>
                                <li><NavLink to="/login" className=' rounded-lg'>Login</NavLink></li>
                                <li><NavLink to="/contact" className=' rounded-lg btn btn-primary btn-outline'>Contact Us</NavLink></li>

                                {/* {
                                    user && <li><NavLink to="/dashboard" className=' rounded-lg'>Dashboard</NavLink></li>
                                }

                                {
                                    user ?
                                        <li><NavLink onClick={handleLogout} to='/login' className=' rounded-lg'>Logout</NavLink></li>
                                        :
                                        <li><NavLink to='/login' className=' rounded-lg'>Login</NavLink></li>
                                } */}






                            </ul>
                        </div>
                    </div>
                    {children}
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">

                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/review">Reviews</NavLink></li>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                        <li><NavLink to="/portpholio">Portpholio</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>

                        {/* {
                            user ?
                                <li><NavLink onClick={handleLogout} to='/login'>Logout</NavLink></li>
                                :
                                <li><NavLink to='/login'>Login</NavLink></li>
                        } */}


                    </ul>

                </div>
            </div>



        </>


    );
};

export default Navbar;