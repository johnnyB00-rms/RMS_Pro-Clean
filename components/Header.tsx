import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { COMPANY_DETAILS } from '../constants.ts';

const NavLinks = () => (
    <>
        <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-blue-700 text-white' : 'text-white hover:bg-brand-blue-700'}`}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-blue-700 text-white' : 'text-white hover:bg-brand-blue-700'}`}>About Us</NavLink>
        <NavLink to="/services" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-blue-700 text-white' : 'text-white hover:bg-brand-blue-700'}`}>Services</NavLink>
        <NavLink to="/locations" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-blue-700 text-white' : 'text-white hover:bg-brand-blue-700'}`}>Service Areas</NavLink>
        <NavLink to="/faq" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-blue-700 text-white' : 'text-white hover:bg-brand-blue-700'}`}>FAQ</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-blue-700 text-white' : 'text-white hover:bg-brand-blue-700'}`}>Contact</NavLink>
    </>
);

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black/90 backdrop-blur border-b border-brand-gold/20 shadow-lux sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-white text-2xl font-bold">{COMPANY_DETAILS.name}</NavLink>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <NavLinks />
                            <NavLink to="/contact" className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-brand-green-500 hover:bg-opacity-90 transition-colors">
                                Get a Free Quote
                            </NavLink>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-blue-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLinks />
                        <NavLink to="/contact" className="block mt-2 w-full text-center px-4 py-2 rounded-md text-base font-medium text-white bg-brand-green-500 hover:bg-opacity-90 transition-colors">
                            Get a Free Quote
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};