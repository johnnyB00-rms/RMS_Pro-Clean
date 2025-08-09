import React, { useEffect } from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import { LOCATIONS_DATA, SERVICES_DATA } from '../constants.ts';
import { CheckCircleIcon } from '../components/Icons.tsx';

const LocationDetailPage: React.FC = () => {
    const { locationId } = useParams<{ locationId: string }>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [locationId]);

    const location = LOCATIONS_DATA.find(loc => loc.id === locationId);

    if (!location) {
        return <Navigate to="/404" />;
    }

    const { name, pageContent } = location;

    return (
        <div className="bg-white">
            <div className="relative h-96">
                <img src={location.imageUrl} alt={`Skyline of ${name}`} className="absolute inset-0 w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-brand-blue-900 bg-opacity-60"></div>
                <div className="relative max-w-7xl mx-auto h-full flex items-center justify-center text-center px-4">
                    <div>
                        <p className="text-xl font-semibold text-brand-blue-200">Commercial Cleaning In</p>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2">{name}, TX</h1>
                    </div>
                </div>
            </div>

            <div className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{pageContent.title}</h2>
                        <p className="mt-4 text-xl text-gray-600">{pageContent.introduction}</p>
                    </div>

                    <div className="mt-20 space-y-20">
                        {pageContent.sections.map((section, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="md:w-1/2">
                                    <img src={section.imageUrl} alt={section.title} className="rounded-lg shadow-xl w-full h-auto object-cover"/>
                                </div>
                                <div className="md:w-1/2">
                                    <h3 className="text-2xl font-bold text-brand-blue-700">{section.title}</h3>
                                    <p className="mt-4 text-lg text-gray-600">{section.content}</p>
                                    <p className="mt-4 font-semibold text-gray-800">Popular services for this area include: <NavLink to={`/services/general-office-cleaning`} className="text-brand-blue-600 hover:underline">office cleaning</NavLink>, <NavLink to={`/services/restroom-sanitation`} className="text-brand-blue-600 hover:underline">restroom sanitation</NavLink>, and <NavLink to={`/services/floor-care`} className="text-brand-blue-600 hover:underline">floor care</NavLink>.</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 bg-gray-50 rounded-lg p-12">
                        <h3 className="text-3xl font-bold text-center text-gray-900">Our Services Available in {name}</h3>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {SERVICES_DATA.map(service => (
                                <NavLink to={`/services/${service.id}`} key={service.id} className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                                    <div className="flex items-center">
                                        <service.icon className="h-8 w-8 text-brand-blue-600"/>
                                        <h4 className="ml-4 text-xl font-semibold text-gray-800">{service.title}</h4>
                                    </div>
                                    <p className="mt-3 text-gray-600">{service.shortDescription}</p>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                     <div className="mt-24 bg-brand-blue-700 rounded-lg text-white">
                        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 text-center">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Ready for a Cleaner Business Environment in {name}?
                            </h2>
                            <p className="mt-4 text-lg max-w-2xl mx-auto">Get a free, no-obligation quote tailored to your {name} facility's specific needs.</p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                            <NavLink
                                to="/contact"
                                className="rounded-md bg-brand-green-500 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-500"
                            >
                                Get a Quote for My {name} Business
                            </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationDetailPage;