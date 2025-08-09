import React from 'react';

interface AppointmentBookingProps {
    className?: string;
}

const AppointmentBooking: React.FC<AppointmentBookingProps> = ({ className = '' }) => {
    // You'll need to replace this with your actual Calendly URL
    const calendlyUrl = "https://calendly.com/rms-professional-cleaning/property-survey";

    const openCalendly = () => {
        // Open Calendly in a new window
        window.open(calendlyUrl, '_blank', 'width=800,height=600');
    };

    return (
        <div className={`bg-brand-blue-50 rounded-lg p-6 ${className}`}>
            <div className="text-center">
                <div className="mb-4">
                    <svg className="mx-auto h-12 w-12 text-brand-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Schedule a Property Survey
                </h3>
                <p className="text-gray-600 mb-4">
                    Book a free, no-obligation consultation where we'll assess your facility and provide a detailed quote.
                </p>
                <button
                    onClick={openCalendly}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-blue-600 hover:bg-brand-blue-700 transition-colors"
                >
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule Appointment
                </button>
                <p className="text-xs text-gray-500 mt-2">
                    Available evenings and weekends • Usually within 24-48 hours
                </p>
            </div>
        </div>
    );
};

export default AppointmentBooking;