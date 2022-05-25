import React from "react";

import pic from '../../Assets/img/pic.jpeg'


const Portpholio = () => {
    return (
        <>
            <div className="mt-10 lg:mt-0 lg:py-20 lg:px-48">
                <div className="mx-auto container w-full flex items-center md:flex-row flex-col justify-between px-6 lg:px-0">
                    <div className="flex flex-col justify-start items-start lg:w-2/5 px-2 lg:px-0">
                        <div>
                            <p className="lg:text-sm text-xs text-gray-600  font-medium leading-none">Hello there! I'm</p>
                        </div>
                        <div className="md:mt-3">
                            <p className="text-gray-800  lg:text-3xl text-xl font-extrabold leading-9">Md Tarek Rahman</p>
                        </div>
                        <div className="md:mt-3">
                            <p className="lg:text-base text-sm leading-normal text-gray-600 ">I'm a passionate Frontend Developer from Bangladesh.I can adapt onto any technology rapidly making myself flexible upon any tech stack.</p>
                        </div>
                        <div className="grid grid-cols-2 mt-8 gap-y-6">
                            <div>
                                <p className="text-gray-800  text-xs lg:text-base font-medium leading-none">
                                    Occupation: <span className="font-semibold md:font-medium">Student</span>
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-800  text-xs lg:text-base font-medium leading-none">
                                    University: <span className="font-semibold md:font-medium">International Islamic Univarsity Chittagong</span>
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-800  text-xs lg:text-base font-medium leading-none">
                                    Passing Year: <span className="font-semibold md:font-medium">2022</span>
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-800  text-xs lg:text-base font-medium leading-none">
                                    Subject: <span className="font-semibold md:font-medium">CSE</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center lg:w-4/12 mt-10 md:mt-0">
                        <img className="w-full" src={pic} alt="laptops" />
                    </div>
                </div>
                <hr className="mt-5"></hr>
                <div>
                    <h1 className="text-2xl font-bold text-black mt-10">About Me</h1>
                    <p className="mt-5">Recently, I've been learning MERN stack, a web and app development. JavaScript is the foundation of my expertise. I enjoy learning about new technology and discoveries as an Engineering student. Aside from my studies, I wish to make a significant contribution to web and app development. As a result, I'm here to continue developing and researching. Programming, development, data science, in short, computer science, is my dream and passion. I wish to investigate and learn about Computer Science on my own. That is why I have chosen to investigate it using the effective-learning method.</p>

                    <h1 className="text-2xl font-bold text-black mt-8">Technology</h1>
                    <p className="mt-5">HTML, CSS , BOOTSTRAP , TAILWIND CSS ,JS , REACT ,EXPRESS , MONGODB , FIREBASE ...</p>
                    <h1 className="text-2xl font-bold text-black mt-8">Project Links</h1>
                    <ul className=" mt-5 flex justify-between">
                        <li><a href="https://istores.netlify.app">Istore (click here)</a></li>
                        <li><a href="https://rezas-studio.netlify.app"> Rezas Studio (click here)</a></li>
                        <li><a href="https://clothyshoop.netlify.app">Clothy Shop (click here)</a></li>

                    </ul>
                </div>

            </div>




        </>
    );
}

export default Portpholio;