import React from 'react';
import { NavLink } from 'react-router-dom';
import { LOCATIONS_DATA } from '../constants.ts';

const LocationsHubPage: React.FC = () => {
    return (
        <>
            <div className="bg-brand-blue-800">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Our Service Areas</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-brand-blue-100">Providing exceptional commercial cleaning services with a local focus on Fort Worth and Arlington, and serving the wider DFW Metroplex.</p>
                </div>
            </div>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Your Local DFW Cleaning Experts</h2>
                        <p className="mt-4 text-lg text-gray-600">We create hyper-localized content to demonstrate our deep connection to the communities we serve.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        {LOCATIONS_DATA.map((location) => (
                            <div key={location.id} className="group relative rounded-lg shadow-2xl overflow-hidden">
                                <img src={location.imageUrl} alt={`Skyline of ${location.name}`} className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                    <h3 className="text-4xl font-bold">{location.name}</h3>
                                    <p className="mt-2 text-xl text-gray-200">Dedicated cleaning solutions for {location.name} businesses.</p>
                                    <NavLink 
                                        to={`/locations/${location.id}`} 
                                        className="mt-6 inline-block bg-brand-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors w-auto self-start"
                                    >
                                        Explore Our {location.name} Services
                                    </NavLink>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="mt-20 text-center bg-gray-50 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-900">Expanding Our Reach</h3>
                        <p className="mt-4 text-lg text-gray-600">While our initial focus is on Fort Worth and Arlington, we are equipped to serve businesses across the DFW area. Future expansion plans include dedicated services for Dallas, Plano, Irving, and more. Don't see your city? Contact us to see how we can help!</p>
                         <NavLink to="/contact" className="mt-6 inline-block bg-brand-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-blue-700 transition-colors">
                            Inquire About Your Location
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocationsHubPage;