import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogPage: React.FC = () => {
    return (
        <>
            <div className="bg-brand-blue-800">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Our Blog</h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-brand-blue-100">Insights, tips, and news on commercial cleaning and facility maintenance.</p>
                </div>
            </div>

            <div className="max-w-xl mx-auto text-center py-24 px-4">
                <h2 className="text-3xl font-bold text-gray-800">Coming Soon!</h2>
                <p className="mt-4 text-lg text-gray-600">
                    We are currently developing valuable content to help DFW businesses maintain a clean and healthy environment.
                    Our blog will be a resource for "Problem/Question-Aware" topics, providing answers and solutions to your most pressing cleaning challenges.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                    Check back soon for articles on topics like "How to Keep Office Bathrooms Clean" and "Choosing the Right Commercial Cleaning Service".
                </p>
                <div className="mt-8">
                    <NavLink
                        to="/contact"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-blue-600 hover:bg-brand-blue-700"
                    >
                        Contact Us with Your Questions
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default BlogPage;