import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const reviewHandle = event => {

        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const date = event.target.date.value;
        const stars = event.target.stars.value;
        const massage = event.target.massage.value;
        const review = { name, email, stars, massage, date }
        console.log(review)

        fetch('https://salty-ravine-28731.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire(
                    'Thank You For Your Review!',
                    'Your review has been posted!',
                    'success'
                )
                navigate('/review');
                event.target.reset();
            })
    }

    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-16">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto lg:ml-52">

                    <div className="mb-5 md:mb-5">
                        <h2 className="text-gray-800 text-xl lg:text-2xl font-bold  mb-4 md:mb-6">Add Your Review Here</h2>
                    </div>
                    <form onSubmit={reviewHandle} className="max-w-screen-md grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="inline-block text-gray-800 text-sm  mb-2">Your Name*</label>
                            <input type="text" name="name" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required defaultValue={user?.displayName} />
                        </div>
                        <div>
                            <label className="inline-block text-gray-800 text-sm  mb-2">Email Id*</label>
                            <input type="text" name="email" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required defaultValue={user?.email} />
                        </div>



                        <div>
                            <label className="inline-block text-gray-800 text-sm  mb-2">Stars*</label>
                            <input type="text" name="stars" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required placeholder='Rate 1 to 5' />
                        </div>
                        <div>
                            <label className="inline-block text-gray-800 text-sm  mb-2">Date*</label>
                            <input type="date" name="date" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="inline-block text-gray-800 text-sm  mb-2">review*</label>
                            <textarea type="massage" name="massage" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2 h-20" required />
                        </div>

                        <div className="sm:col-span-2 flex justify-between items-center">
                            <button className="inline-block bg-primary hover:bg-gray-500  focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</button>

                            <span className="text-gray-500 text-sm">*Required</span>
                        </div>


                        <p className="text-gray-400 text-xs">By signing up to our newsletter you agree to our <a href="/" className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</a>.</p>
                    </form>



                </div>
            </div>
        </div>
    );
};

export default AddReview;