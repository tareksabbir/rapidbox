import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { email } = useParams();

    const profileUpdate = event => {
        event.preventDefault();
        const displayName = event.target.displayName.value;
        const gender = event.target.gender.value;
        const education = event.target.education.value;
        const email = event.target.email.value;
        const photoURL = event.target.photoURL.value;
        const company = event.target.company.value;
        const about = event.target.about.value;

        const profile = { displayName, gender, education, photoURL, about, company, email }
        console.log(profile);


        const url = `http://localhost:5000/user/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Product added');
                event.target.reset();
            })
    }

    return (
        <>
            <section class="text-black body-font">
                <div class="container px-5  mx-auto flex flex-col">
                    <div class="lg:w-5/6 w-full mt-10 mx-auto bg-slate-100 p-14">
                        <div class="flex flex-col sm:flex-row shadow-2xl ">
                            <div class="sm:w-3/4 text-center sm:pr-8 sm:py-8">


                                <div class="w-35 h-35 rounded-full inline-flex items-center justify-center bg-slate-50">
                                    <img src={user.photoURL} alt="" class="w-35 h-35 rounded-full" />
                                </div>
                                <div class="flex flex-col items-center text-center justify-center">
                                    <h2 class="font-medium title-font mt-4 text-gray-900 ">{user.displayName}</h2>
                                    <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>

                                    <p class="leading-relaxed  font-medium mb-4">Current Address: <span class="text-sm font-normal mb-4"></span></p>


                                </div>
                            </div>
                            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p class="leading-relaxed  font-medium mb-2">Email : <span class="text-sm font-normal mb-4">{user.email}</span></p>
                                <p class="leading-relaxed   mb-2 font-medium">Gender : <span class="text-sm font-normal mb-4"></span></p>
                                <p class="leading-relaxed  font-medium mb-4">About Me:</p>
                                <p class="leading-relaxed  font-medium mb-4">Education:</p>

                                <p class="leading-relaxed  font-medium mb-4">Company Name</p>




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