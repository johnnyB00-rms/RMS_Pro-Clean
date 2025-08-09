import React, { useEffect } from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import { SERVICES_DATA } from '../constants.ts';
import { CheckCircleIcon } from '../components/Icons.tsx';

const ServiceDetailPage: React.FC = () => {
    const { serviceId } = useParams<{ serviceId: string }>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);
    
    const service = SERVICES_DATA.find(s => s.id === serviceId);

    if (!service) {
        return <Navigate to="/404" />;
    }

    const { title, pageContent } = service;

    return (
        <div className="bg-white">
            <div className="relative h-96">
                <img src={service.imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-brand-blue-900 bg-opacity-60"></div>
                <div className="relative max-w-7xl mx-auto h-full flex items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white">{title}</h1>
                </div>
            </div>

            <div className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    <div className="lg:col-span-2">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-3xl font-bold text-gray-900">A Higher Standard of {title}</h2>
                            <p>{pageContent.introduction}</p>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mt-12">{pageContent.processTitle}</h3>
                            <p>{pageContent.processDescription}</p>

                            <h3 className="text-2xl font-bold text-gray-900 mt-12">Detailed {title} Checklist</h3>
                            <p>To ensure transparency and consistent quality, we follow a detailed checklist for every job. Here's what's included:</p>
                            
                            <div className="space-y-8 mt-6">
                                {pageContent.checklist.map((category, idx) => (
                                    <div key={idx} className="bg-gray-50 rounded-lg p-6">
                                        <h4 className="text-xl font-semibold text-gray-800">{category.category}</h4>
                                        <ul className="mt-4 space-y-2">
                                            {category.items.map((item, itemIdx) => (
                                                <li key={itemIdx} className="flex items-start">
                                                    <CheckCircleIcon className="h-6 w-6 text-brand-green-500 flex-shrink-0 mt-1 mr-3"/>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mt-12">Industries We Serve</h3>
                            <p>Our {title} services are ideal for a variety of DFW businesses, including:</p>
                             <ul className="mt-4 space-y-2">
                                {pageContent.industries.map((industry, i) => (
                                    <li key={i} className="flex items-center">
                                       <CheckCircleIcon className="h-5 w-5 text-brand-blue-500 mr-3"/>
                                        <span>{industry}</span>
                                    </li>
                                ))}
                            </ul>

                             <h3 className="text-2xl font-bold text-gray-900 mt-12">Frequently Asked Questions</h3>
                             <div className="space-y-6 mt-6">
                                {pageContent.faqs.map((faq, i) => (
                                    <div key={i}>
                                        <p className="font-semibold text-gray-800">{faq.question}</p>
                                        <p className="mt-1">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 space-y-8">
                             <div className="bg-brand-blue-50 p-8 rounded-lg">
                                <h3 className="text-2xl font-bold text-gray-900">Get a Free Quote</h3>
                                <p className="mt-4 text-gray-600">Ready to see the difference our {title} service can make? Contact us today for a free, no-obligation estimate tailored to your facility.</p>
                                <NavLink to="/contact" className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-green-500 hover:bg-opacity-90">
                                    Request My Quote
                                </NavLink>
                            </div>
                            <div className="bg-gray-100 p-8 rounded-lg">
                                <h3 className="text-xl font-bold text-gray-900">Other Services</h3>
                                <ul className="mt-4 space-y-3">
                                    {SERVICES_DATA.filter(s => s.id !== serviceId).map(s => (
                                        <li key={s.id}>
                                            <NavLink to={`/services/${s.id}`} className="text-brand-blue-600 hover:underline hover:text-brand-blue-800">
                                                {s.title}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;