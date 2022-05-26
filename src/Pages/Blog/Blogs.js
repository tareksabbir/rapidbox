import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-8 mx-auto flex flex-col">
                        <div className="lg:w-5/6 mx-auto">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1616781677825-3c8cfc2f79a6?auto=format&q=75&fit=crop&crop=top&w=1200&h=500" />
                            </div>
                            <div className="flex flex-col sm:flex-row mt-10">
                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                        <img alt="content" className="object-cover object-center h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1501441858156-e505fb04bfbc?auto=format&q=75&fit=crop&crop=top&w=600&h=600" />
                                    </div>
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">How will you improve the performance of a React Application?</h2>
                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>

                                    </div>
                                </div>
                                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <p className="leading-relaxed 
                                mb-4">Techniques for improving React performance include keeping component state local when possible. React component memory to avoid needless re-renders, React code splitting using dynamic import(), React windowing or list virtualization, React lazy loading images To properly optimize our React application, we must first identify and resolve a performance issue. We've covered how to measure the performance of a React application and how to improve it for a better user experience in this article.</p>
                                    <Link to='/' className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-8 mx-auto flex flex-col">
                        <div className="lg:w-5/6 mx-auto">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1630168567476-cb79a02d3f9d?auto=format&q=75&fit=crop&crop=top&w=1200&h=500" />
                            </div>
                            <div className="flex flex-col sm:flex-row mt-10">
                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                        <img alt="content" className="object-cover object-center h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1514136649217-b627b4b9cfb2?auto=format&q=75&fit=crop&crop=top&w=600&h=600" />
                                    </div>
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">What are the different ways to manage a state in a React application?</h2>
                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>

                                    </div>
                                </div>
                                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <p className="leading-relaxed mb-4">A state is embedded into every React component. This state is an object that holds the values of a component's property values. Because each state update re-renders all relevant components, state is able to maintain data from distinct components in sync. Setting component states with React is as simple as calling setState() and adding "local state" to a class. In React, there are various alternative ways to manage states, including using:

                                        Apollo Link State React Context API Hooks
                                        However, we'll concentrate on the setState() method.</p>
                                    <Link to='/' className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-8 mx-auto flex flex-col">
                        <div className="lg:w-5/6 mx-auto">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1542972587-84201daf1ed5?auto=format&q=75&fit=crop&crop=top&w=1200&h=500" />
                            </div>
                            <div className="flex flex-col sm:flex-row mt-10">
                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                        <img alt="content" className="object-cover object-center h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&q=75&fit=crop&crop=top&w=600&h=600" />
                                    </div>
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">How does prototypical inheritance work?</h2>
                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>

                                    </div>
                                </div>
                                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <p className="leading-relaxed mb-4">Every object, along with its methods and properties, has a secret internal property called [[Prototype]]. Prototypal inheritance is a javascript feature that allows you to add methods and properties to objects. It's a method that allows one object to inherit the properties and methods of another. We use Object.getPrototypeOf and Object.setPrototypeOf to get and set the [[Prototype]] of an object, respectively. It is now set using __proto__ in current programming languages.</p>
                                    <Link to='/' className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-8 mx-auto flex flex-col">
                        <div className="lg:w-5/6 mx-auto">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?auto=format&q=75&fit=crop&crop=top&w=1200&h=500" />
                            </div>
                            <div className="flex flex-col sm:flex-row mt-10">
                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                        <img alt="content" className="object-cover object-center h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1501441858156-e505fb04bfbc?auto=format&q=75&fit=crop&crop=top&w=600&h=600" />
                                    </div>
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">What is a unit test? Why should write unit tests?</h2>
                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>

                                    </div>
                                </div>
                                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <p className="leading-relaxed  mb-4">Unit tests are automated tests designed and executed by software engineers to confirm that a piece of an application (referred to as a "unit") matches its design and operates as intended. A unit in procedural programming can be a whole module, but it's more likely to be a single function or process.
                                        Unit tests provide the advantage of isolating a function, class, or method and just testing that section of code. Individual components of higher quality contribute to overall system robustness. As a result, the code is trustworthy. The nature of the debugging process is likewise altered by unit tests.</p>
                                    <Link to='/' className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-8 mx-auto flex flex-col">
                        <div className="lg:w-5/6 mx-auto">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&q=75&fit=crop&crop=top&w=1200&h=500" />
                            </div>
                            <div className="flex flex-col sm:flex-row mt-10">
                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                        <img alt="content" className="object-cover object-center h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1501441858156-e505fb04bfbc?auto=format&q=75&fit=crop&crop=top&w=600&h=600" />
                                    </div>
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <h2 className="font-medium title-font mt-4 text-gray-900 "> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>

                                    </div>
                                </div>
                                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <p className="leading-relaxed 
                                text-lg mb-4">Because of the following reasons, one should never update the state directly:

                                        If you alter it directly, executing setState() thereafter may just overwrite your changes.
                                        This.state is not changed instantly when you directly update the state. Instead, it generates a pending state transition, which will only yield the current value if accessed after using this function.
                                        You'll lose control of the state in all of your components.</p>
                                    <Link to='/' className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Blog;