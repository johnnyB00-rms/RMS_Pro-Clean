import React from 'react';
import { NavLink } from 'react-router-dom';
import { COMPANY_DETAILS, SERVICES_DATA } from '../constants.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-gold">{COMPANY_DETAILS.name}</h3>
            <p className="text-gray-300">
              Your reliable partner for professional commercial cleaning in Fort Worth, Arlington, and the greater DFW area.
            </p>
            <div className="space-y-2 text-brand-blue-200">
              {/* Address is not displayed publicly as per SEO plan for service-area business */}
              <p><strong>Location:</strong> Fort Worth, TX (Serving DFW)</p>
              <p><strong>Phone:</strong> <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-white">{COMPANY_DETAILS.phone}</a></p>
              <p><strong>Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-2">
              {SERVICES_DATA.slice(0, 5).map(service => (
                <li key={service.id}>
                  <NavLink to={`/services/${service.id}`} className="text-base text-brand-blue-200 hover:text-white">{service.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><NavLink to="/about" className="text-base text-brand-blue-200 hover:text-white">About Us</NavLink></li>
              <li><NavLink to="/locations" className="text-base text-brand-blue-200 hover:text-white">Service Areas</NavLink></li>
              <li><NavLink to="/contact" className="text-base text-brand-blue-200 hover:text-white">Get a Quote</NavLink></li>
              <li><NavLink to="/blog" className="text-base text-brand-blue-200 hover:text-white">Blog</NavLink></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get a Free, No-Obligation Quote</h3>
            <p className="text-brand-blue-200">
              Ready for a cleaner, healthier workspace? Contact us today for a custom quote tailored to your needs.
            </p>
            <NavLink to="/contact" className="inline-block bg-brand-green-500 text-white font-bold py-2 px-4 rounded hover:bg-opacity-90 transition-colors">
              Request a Quote
            </NavLink>
          </div>

        </div>
        <div className="mt-8 border-t border-brand-blue-800 pt-8 text-center">
          <p className="text-base text-brand-blue-300">&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};