import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_DETAILS } from '../constants.ts';
import InstantQuoteCalculator from '../components/InstantQuoteCalculator.tsx';

const ContactPage: React.FC = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    // Handle scrolling to quote calculator if hash is present
    useEffect(() => {
        if (location.hash === '#quote-calculator') {
            setTimeout(() => {
                const element = document.getElementById('quote-calculator');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location.hash]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a server or email service
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    return (
        <div className="bg-gray-50">
            <div className="relative bg-brand-blue-800">
                <div className="absolute inset-0">
                    <img className="w-full h-full object-cover" src="https://picsum.photos/seed/contact/1920/1080" alt="Customer service representative" />
                    <div className="absolute inset-0 bg-brand-blue-800 mix-blend-multiply" aria-hidden="true"></div>
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Contact Us</h1>
                    <p className="mt-6 max-w-xl mx-auto text-xl text-indigo-100">Get a free, no-obligation quote or ask us any questions. We're here to help.</p>
                </div>
            </div>
            
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Get Your Free Quote</h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">
                                    Fill out the form and our team will get back to you shortly to discuss your cleaning needs and provide a custom quote.
                                </p>
                            </div>
                            <div className="mt-9">
                                <div className="mt-6 text-gray-500 space-y-6">
                                    <p className="flex">
                                        <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span className="ml-3"><a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-brand-blue-700">{COMPANY_DETAILS.phone}</a></span>
                                    </p>
                                    <p className="flex">
                                        <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="ml-3"><a href="mailto:cgunner@rmsproclean.com" className="hover:text-brand-blue-700">cgunner@rmsproclean.com</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 md:mt-0">
                            {submitted ? (
                                <div className="bg-green-50 p-8 rounded-lg text-center shadow-lg h-full flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-green-800">Thank You!</h3>
                                    <p className="mt-4 text-lg text-green-700">Your request has been sent. Our team will review it and get in touch with you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <div className="mt-1">
                                            <input type="text" name="name" id="name" required autoComplete="name" onChange={handleChange} className="py-3 px-4 block w-full shadow-sm focus:ring-brand-blue-500 focus:border-brand-blue-500 border-gray-300 rounded-md" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                                        <div className="mt-1">
                                            <input type="text" name="company" id="company" autoComplete="organization" onChange={handleChange} className="py-3 px-4 block w-full shadow-sm focus:ring-brand-blue-500 focus:border-brand-blue-500 border-gray-300 rounded-md" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <div className="mt-1">
                                            <input id="email" name="email" type="email" required autoComplete="email" onChange={handleChange} className="py-3 px-4 block w-full shadow-sm focus:ring-brand-blue-500 focus:border-brand-blue-500 border-gray-300 rounded-md" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                        <div className="mt-1">
                                            <input type="text" name="phone" id="phone" autoComplete="tel" onChange={handleChange} className="py-3 px-4 block w-full shadow-sm focus:ring-brand-blue-500 focus:border-brand-blue-500 border-gray-300 rounded-md" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service of Interest</label>
                                        <div className="mt-1">
                                            <select id="service" name="service" onChange={handleChange} className="py-3 px-4 block w-full shadow-sm focus:ring-brand-blue-500 focus:border-brand-blue-500 border-gray-300 rounded-md">
                                                <option>General Office Cleaning</option>
                                                <option>Restroom Sanitation</option>
                                                <option>Floor Care</option>
                                                <option>Carpet Cleaning</option>
                                                <option>Window Washing</option>
                                                <option>Post-Construction Cleanup</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                        <div className="mt-1">
                                            <textarea id="message" name="message" rows={4} required onChange={handleChange} className="py-3 px-4 block w-full shadow-sm focus:ring-brand-blue-500 focus:border-brand-blue-500 border-gray-300 rounded-md"></textarea>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-green-500 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-500">
                                            Submit Request
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ElevenLabs Conversational AI Widget */}
            <div className="bg-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions? Chat with Our AI Assistant</h2>
                    <p className="text-gray-600 mb-6">Get instant answers about our services, pricing, and availability</p>
                    <elevenlabs-convai agent-id="drphXrzOk5gaYjMxRo0N"></elevenlabs-convai>
                </div>
            </div>

            {/* Add the instant quote calculator */}
            <InstantQuoteCalculator />
        </div>
    );
};

export default ContactPage;