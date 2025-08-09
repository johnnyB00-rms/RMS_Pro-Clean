import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center py-20 px-4 sm:px-6 lg:px-8">
            <h1 className="text-6xl font-extrabold text-brand-blue-600">404</h1>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Page Not Found</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-md">
                Sorry, we couldn't find the page you're looking for. It might have been moved or removed.
            </p>
            <div className="mt-8">
                <NavLink
                    to="/"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-blue-600 hover:bg-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-500"
                >
                    Go back home
                </NavLink>
            </div>
        </div>
    );
};

export default NotFoundPage;