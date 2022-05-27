import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const productHandle = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const minimumOrder = event.target.minimumOrder.value;
        const available = event.target.available.value;
        const email = event.target.email.value;
        const admin = event.target.admin.value;
        const img = event.target.img.value;
        const description = event.target.description.value;

        const product = { name, price, img, description, email, admin, minimumOrder, available }
        console.log(product);

        fetch('https://salty-ravine-28731.herokuapp.com/tools', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire(
                    'Congratulation!',
                    'New product has been added!',
                    'success'
                )
                navigate('/product');
                event.target.reset();
            })
    }
    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-6 lg:mb-10 lg:mt-5 lg:ml-52">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">

                    <div className="mb-10 md:mb-10">
                        <h2 className="text-gray-800 text-xl lg:text-2xl font-bold  mb-4 md:mb-4 lg:mb6">Add New Product Here</h2>
                    </div>

                    <form onSubmit={productHandle} className="max-w-screen-md grid sm:grid-cols-2 gap-4 ">
                        <div>
                            <label className="inline-block text-gray-800 text-sm  mb-2">Admin Name*</label>
                            <input type="text" name="admin" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required defaultValue={user?.displayName} />
                        </div>
                        <div>
                            <label className="inline-block text-gray-800 text-sm  mb-2"> Admin Email*</label>
                            <input type="text" name="email" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required defaultValue={user?.email} />
                        </div>
                        <div>
                            <label className="inline-block text-gray-800 text-sm  mb-2">Product name*</label>
                            <input type="text" name="name" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>


                        <div>
                            <label className="inline-block text-gray-800 text-sm  mb-2">Product Price*</label>
                            <input type="text" name="price" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>
                        <div>
                            <label className="inline-block text-gray-800 text-sm  mb-2">Minimum Order*</label>
                            <input type="text" name="minimumOrder" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>

                        <div >
                            <label className="inline-block text-gray-800 text-sm  mb-2">Available Quantity*</label>
                            <input type="text" name="available" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>


                        <div className="sm:col-span-2">
                            <label className="inline-block text-gray-800 text-sm  mb-2">Description*</label>
                            <input type="text" name="description" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="inline-block text-gray-800 text-sm  mb-2">Photo URL*</label>
                            <input type="text" name="img" className="w-full h-10 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required></input>
                        </div>

                        <div className="sm:col-span-2 flex justify-between items-center">
                            <button className="inline-block bg-black hover:bg-gray-500  focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</button>

                            <span className="text-gray-500 text-sm">*Required</span>
                        </div>


                        <p className="text-gray-400 text-xs">By signing up to our newsletter you agree to our <a href="/" className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</a>.</p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;