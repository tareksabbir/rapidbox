import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const [email, setEmail] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/user/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setEmail(data))
    })


    const profileUpdate = event => {
        event.preventDefault();
        const displayName = event.target.displayName.value;
        const gender = event.target.gender.value;
        const education = event.target.education.value;
        const email = event.target.email.value;
        const photoURL = event.target.photoURL.value;
        const company = event.target.company.value;
        const about = event.target.about.value;
        const address = event.target.address.value;


        const profile = { displayName, gender, education, photoURL, about, company, email, address }
        console.log(profile);
        const url = `http://localhost:5000/user/${email}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire(
                    'Congratulation!',
                    'Your profile has been updated!',
                    'success'
                )

                event.target.reset();
            })
    }

    return (
        <>
            <section className="text-black body-font">
                <div className="container px-5  mx-auto flex flex-col">
                    <div className="lg:w-5/6 w-full mt-10 mx-auto bg-gray-100 p-14">
                        <div className="flex flex-col sm:flex-row shadow-2xl ">
                            <div className="sm:w-3/4 text-center sm:pr-8 sm:py-8">
                                <div className="w-35 h-35 rounded-full inline-flex items-center justify-center bg-slate-50">
                                    <img src={user.photoURL ? user.photoURL : email.photoURL} alt="" className="w-28 h-28 rounded-full" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 ">{email.displayName ? email.displayName : user.displayName}</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed  font-medium mb-2">Email : <span className="text-sm font-normal mb-4">{user?.email}</span></p>
                                <p className="leading-relaxed   mb-2 font-medium">Gender : <span className="text-sm font-normal mb-4">{email.gender}</span></p>
                                <p className="leading-relaxed  font-medium mb-2">About Me : <span className="text-sm font-normal mb-4">{email.about}</span></p>
                                <p className="leading-relaxed  font-medium mb-2">Education : <span className="text-sm font-normal mb-4">{email.education}</span></p>
                                <p className="leading-relaxed  font-medium mb-2">Company Name : <span className="text-sm font-normal mb-4">{email.company}</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div>
                <div className="bg-white py-6 sm:py-8 lg:py-6 lg:mb-10 lg:mt-5">
                    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">

                        <form onSubmit={profileUpdate} className="max-w-screen-md grid sm:grid-cols-2 gap-4  mx-auto">
                            <div>
                                <label className="inline-block text-gray-800 text-sm sm:text-sm mb-2">User Name*</label>
                                <input type="text" name="displayName" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required defaultValue={user?.displayName} />
                            </div>
                            <div>
                                <label className="inline-block text-gray-800 text-sm sm:text-sm mb-2"> Admin Email*</label>
                                <input type="text" name="email" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required defaultValue={user?.email} />
                            </div>
                            <div>
                                <label className="inline-block text-gray-800 text-sm sm:text-sm mb-2">Gender*</label>
                                <input type="text" name="gender" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                            </div>


                            <div>
                                <label className="inline-block text-gray-800 text-sm sm:text-sm mb-2">Education*</label>
                                <input type="text" name="education" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                            </div>
                            <div>
                                <label className="inline-block text-gray-800 text-sm sm:text-sm mb-2">Company Name*</label>
                                <input type="text" name="company" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                            </div>

                            <div >
                                <label className="inline-block text-gray-800 text-sm sm:text-sm mb-2">Current Address*</label>
                                <input type="text" name="address" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                            </div>


                            <div className="sm:col-span-2">
                                <label className="inline-block text-gray-800 text-sm sm:text-sm mb-2">About Me*</label>
                                <input type="text" name="about" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                            </div>

                            <div className="sm:col-span-2">
                                <label className="inline-block text-gray-800 text-sm sm:text-sm mb-2">Photo URL*</label>
                                <input type="text" name="photoURL" className="w-full h-10 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required></input>
                            </div>

                            <div className="sm:col-span-2 flex justify-between items-center">
                                <button className="inline-block bg-black hover:bg-gray-500  focus-visible:ring ring-indigo-300 text-white text-sm md:text-sm font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Update Profile</button>

                                <span className="text-gray-500 text-sm">*Required</span>
                            </div>


                            <p className="text-gray-400 text-xs">By signing up to our newsletter you agree to our <a href="/" className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</a>.</p>
                        </form>

                    </div>
                </div>
            </div>

        </>
    );
};

export default MyProfile;