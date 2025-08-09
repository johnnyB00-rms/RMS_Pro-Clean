import React from 'react';
import { NavLink } from 'react-router-dom';
import { SERVICES_DATA } from '../constants.ts';

const ServicesHubPage: React.FC = () => {
    return (
        <>
            <div className="bg-brand-blue-800">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Our Commercial Cleaning Services</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-brand-blue-100">A comprehensive suite of cleaning solutions to keep your facility pristine, productive, and professional. We offer tailored plans for businesses of all sizes in the DFW area.</p>
                </div>
            </div>
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {SERVICES_DATA.map((service) => (
                            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
                                <img className="h-56 w-full object-cover" src={service.imageUrl} alt={service.title} />
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center mb-4">
                                        <div className="flex-shrink-0">
                                            <service.icon className="h-10 w-10 text-brand-blue-600" />
                                        </div>
                                        <h3 className="ml-4 text-2xl font-bold text-gray-900">{service.title}</h3>
                                    </div>
                                    <p className="text-gray-600 flex-grow">{service.shortDescription}</p>
                                    <div className="mt-6">
                                        <NavLink 
                                            to={`/services/${service.id}`} 
                                            className="font-semibold text-brand-blue-600 hover:text-brand-blue-500 transition"
                                        >
                                            View Details & Checklist &rarr;
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesHubPage;