import React, { useState, useEffect } from 'react';
import { SERVICES_DATA } from '../constants.ts';
import type { QuoteFormData, QuoteCalculation } from '../types.ts';

// Add custom CSS for the slider
const sliderStyles = `
  .slider::-webkit-slider-thumb {
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #D4AF37; /* gold */
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.35);
  }

  .slider::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #D4AF37; /* gold */
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 4px rgba(0,0,0,0.35);
  }

  .slider::-webkit-slider-track {
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(to right, #D4AF37 0%, #D4AF37 var(--progress, 20%), #374151 var(--progress, 20%), #374151 100%);
  }
`;

const InstantQuoteCalculator: React.FC = () => {
    const [formData, setFormData] = useState<QuoteFormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        squareFootage: 2000,
        frequency: '3', // 3 times per week default
        services: ['general-office-cleaning'], // Default service
        schedule: 'morning',
        additionalNotes: ''
    });

    const [quote, setQuote] = useState<QuoteCalculation | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Calculate quote whenever form data changes
    useEffect(() => {
        const calculatedQuote = calculateQuote();
        setQuote(calculatedQuote);
    }, [formData.squareFootage, formData.frequency, formData.services]);

    const calculateQuote = (): QuoteCalculation => {
        // Base pricing per square foot (weekly)
        const baseRatePerSqFt = 0.12; // $0.12 per sq ft per week
        
        // Frequency discounts
        const frequencyDiscounts: { [key: string]: number } = {
            '1': 1.0,    // 1x per week - no discount
            '2': 0.95,   // 2x per week - 5% discount
            '3': 0.90,   // 3x per week - 10% discount
            '4': 0.85,   // 4x per week - 15% discount
            '5': 0.80,   // 5x per week - 20% discount
            'daily': 0.75 // Daily - 25% discount
        };

        // Service multipliers
        const serviceMultipliers: { [key: string]: number } = {
            'general-office-cleaning': 1.0,
            'restroom-sanitation': 0.3,
            'floor-care': 0.4,
            'carpet-cleaning': 0.25,
            'window-washing': 0.2,
            'post-construction-cleanup': 1.5
        };

        const basePrice = formData.squareFootage * baseRatePerSqFt;
        const frequencyDiscount = frequencyDiscounts[formData.frequency] || 1.0;
        
        // Calculate service multiplier
        let totalServiceMultiplier = 0;
        formData.services.forEach(serviceId => {
            totalServiceMultiplier += serviceMultipliers[serviceId] || 0;
        });
        
        // Ensure minimum multiplier
        totalServiceMultiplier = Math.max(totalServiceMultiplier, 1.0);

        const totalWeeklyPrice = Math.round(basePrice * frequencyDiscount * totalServiceMultiplier);
        const totalMonthlyPrice = Math.round(totalWeeklyPrice * 4.33); // Average weeks per month

        return {
            basePrice: Math.round(basePrice),
            frequencyDiscount,
            serviceMultiplier: totalServiceMultiplier,
            totalWeeklyPrice,
            totalMonthlyPrice
        };
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'squareFootage' ? parseInt(value) || 0 : value
        }));
    };

    const handleServiceChange = (serviceId: string, checked: boolean) => {
        setFormData(prev => ({
            ...prev,
            services: checked 
                ? [...prev.services, serviceId]
                : prev.services.filter(id => id !== serviceId)
        }));
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            squareFootage: parseInt(e.target.value)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Here you would typically send to your backend API
            // For now, we'll simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            console.log('Quote submitted:', { ...formData, quote });
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting quote:', error);
            alert('There was an error submitting your quote. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <section className="py-16 bg-black" id="quote-calculator">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl p-8 bg-black/50 border border-brand-gold/20 backdrop-blur shadow-lux text-center">
                        <div className="mb-6">
                            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Quote Submitted Successfully!</h3>
                            <p className="mt-4 text-lg text-gray-300">
                                Thank you for your interest in RMS Professional Cleaning Services. Our team will review your requirements and contact you within 24 hours with a detailed proposal.
                            </p>
                        </div>
                        
                        {quote && (
                            <div className="bg-black/40 border border-brand-gold/20 rounded-lg p-6 mb-6">
                                <h4 className="text-lg font-semibold text-brand-blue-800 mb-2">Your Estimated Pricing</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-brand-blue-900">${quote.totalWeeklyPrice}</p>
                                        <p className="text-sm text-brand-blue-700">per week</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-brand-blue-900">${quote.totalMonthlyPrice}</p>
                                        <p className="text-sm text-brand-blue-700">per month</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        <button 
                            onClick={() => {
                                setSubmitted(false);
                                setFormData({
                                    name: '',
                                    email: '',
                                    phone: '',
                                    company: '',
                                    squareFootage: 2000,
                                    frequency: '3',
                                    services: ['general-office-cleaning'],
                                    schedule: 'morning',
                                    additionalNotes: ''
                                });
                            }}
                            className="bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            Calculate Another Quote
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <style>{sliderStyles}</style>
            <section className="py-16 bg-black" id="quote-calculator">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Get Your Instant Quote
                    </h2>
                    <div className="h-1 w-20 bg-brand-gold mx-auto mb-6"></div>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Tell us about your property and cleaning needs, and we'll provide an instant estimate for your commercial cleaning services.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white">
                    {/* Form Section */}
                    <div className="rounded-2xl p-8 bg-black/50 border border-brand-gold/20 backdrop-blur shadow-lux">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Contact Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-brand-gold/30 bg-black/30 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        required
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-brand-gold/30 bg-black/30 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                                        placeholder="ABC Company"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-brand-gold/30 bg-black/30 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-brand-gold/30 bg-black/30 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                                        placeholder="(817) 555-0100"
                                    />
                                </div>
                            </div>

                            {/* Square Footage Slider */}
                            <div>
                                <label htmlFor="squareFootage" className="block text-sm font-medium text-white mb-2">
                                    Square Footage: {formData.squareFootage.toLocaleString()} sq ft
                                </label>
                                <input
                                    type="range"
                                    id="squareFootage"
                                    name="squareFootage"
                                    min="500"
                                    max="10000"
                                    step="100"
                                    value={formData.squareFootage}
                                    onChange={handleSliderChange}
                                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-1">
                                    <span>500 sq ft</span>
                                    <span>10,000 sq ft</span>
                                </div>
                            </div>

                            {/* Cleaning Frequency */}
                            <div>
                                <label htmlFor="frequency" className="block text-sm font-medium text-white mb-2">
                                    Cleaning Frequency *
                                </label>
                                <select
                                    id="frequency"
                                    name="frequency"
                                    required
                                    value={formData.frequency}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-brand-gold/30 bg-black/30 text-white rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                                >
                                    <option value="1">1x per week</option>
                                    <option value="2">2x per week</option>
                                    <option value="3">3x per week</option>
                                    <option value="4">4x per week</option>
                                    <option value="5">5x per week</option>
                                    <option value="daily">Daily (Monday-Friday)</option>
                                </select>
                            </div>

                            {/* Services Selection */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-3">
                                    Services Needed * (Select all that apply)
                                </label>
                                <div className="grid grid-cols-1 gap-3">
                                    {SERVICES_DATA.map((service) => (
                                        <label key={service.id} className="flex items-center p-3 border border-brand-gold/20 rounded-lg bg-black/40 hover:bg-black/50 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.services.includes(service.id)}
                                                onChange={(e) => handleServiceChange(service.id, e.target.checked)}
                                                className="h-4 w-4 text-brand-gold focus:ring-brand-gold border-brand-gold/40 bg-black rounded"
                                            />
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-white">{service.title}</p>
                                                <p className="text-xs text-gray-300">{service.shortDescription}</p>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Preferred Schedule */}
                            <div>
                                <label htmlFor="schedule" className="block text-sm font-medium text-white mb-2">
                                    Preferred Schedule
                                </label>
                                <select
                                    id="schedule"
                                    name="schedule"
                                    value={formData.schedule}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-brand-gold/30 bg-black/30 text-white rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                                >
                                    <option value="morning">Morning (7am-11am)</option>
                                    <option value="afternoon">Afternoon (12pm-4pm)</option>
                                    <option value="evening">Evening (5pm-9pm)</option>
                                    <option value="flexible">Flexible</option>
                                </select>
                            </div>

                            {/* Additional Notes */}
                            <div>
                                <label htmlFor="additionalNotes" className="block text-sm font-medium text-white mb-2">
                                    Additional Notes
                                </label>
                                <textarea
                                    id="additionalNotes"
                                    name="additionalNotes"
                                    rows={3}
                                    value={formData.additionalNotes}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-brand-gold/30 bg-black/30 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                                    placeholder="Any specific requirements or questions?"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting || formData.services.length === 0}
                                className="w-full btn-shine bg-brand-gold hover:bg-brand-gold-dark disabled:bg-gray-500 text-black font-bold py-4 px-6 rounded-full transition-colors text-lg shadow-lux"
                            >
                                {isSubmitting ? 'Submitting...' : 'Get My Quote'}
                            </button>
                        </form>
                    </div>

                    {/* Quote Display Section */}
                    <div className="rounded-2xl p-8 bg-black/50 border border-brand-gold/20 backdrop-blur shadow-lux">
                        {quote && (
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Estimated Quote</h3>
                                <div className="bg-gradient-to-r from-brand-green-500 to-brand-green-600 rounded-xl p-6 text-white mb-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-3xl font-bold">${quote.totalWeeklyPrice}</p>
                                            <p className="text-sm opacity-90">per week</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold">${quote.totalMonthlyPrice}</p>
                                            <p className="text-sm opacity-90">per month</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">
                                    * This is a preliminary estimate. Final pricing may vary based on specific requirements and site evaluation.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default InstantQuoteCalculator;
