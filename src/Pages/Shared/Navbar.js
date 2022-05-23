import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/icons/tool-box (1).png'

const Navbar = ({ children }) => {
    return (
        <>
            <div class="drawer drawer-end ">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">

                    <div class="w-full navbar px-5 lg:px-10 lg:mt-3 mt-2 ">
                        <img src={logo} className="h-8 w-8" alt="" />
                        <div class="flex-1 mx-2 text-2xl lg:text-2xl font-semibold">ToolsHuB</div>
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal gap-x-2">

                                <li><NavLink to='/' className=' rounded-lg'>Home</NavLink></li>
                                <li><NavLink to='/product' className=' rounded-lg'>Product</NavLink></li>
                                <li><NavLink to='/review' className=' rounded-lg'>Reviews</NavLink></li>
                                <li><NavLink to='/blog' className=' rounded-lg'>Blogs</NavLink></li>
                                <li><NavLink to='/portpholio' className=' rounded-lg'>Portpholio</NavLink></li>
                                <li><NavLink to='/login' className=' rounded-lg'>Login</NavLink></li>
                                <li><Link to='/contact' tabindex="0" class="btn btn-secondary btn-outline m-1 rounded-lg">Contact Us</Link></li>

                            </ul>
                        </div>
                    </div>
                    {children}
                </div>

                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">

                        <li><NavLink to='/' className=' rounded-lg'>Home</NavLink></li>
                        <li><NavLink to='/product' className=' rounded-lg'>Product</NavLink></li>
                        <li><NavLink to='/blog' className=' rounded-lg'>Blogs</NavLink></li>
                        <li><NavLink to='/portpholio' className=' rounded-lg'>Portpholio</NavLink></li>

                        <li><NavLink to='/login' className=' rounded-lg'>Login</NavLink></li>
                        <li><Link to='/contact' tabindex="0" class="btn btn-primary btn-outline m-1 rounded-lg">Contact Us</Link></li>

                    </ul>

                </div>
            </div>


        </>
    );
};

export default Navbar;