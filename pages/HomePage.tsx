import React from 'react';
import { NavLink } from 'react-router-dom';
import { SERVICES_DATA, TESTIMONIALS_DATA, LOCATIONS_DATA } from '../constants.ts';
import { CheckCircleIcon } from '../components/Icons.tsx';
import InstantQuoteCalculator from '../components/InstantQuoteCalculator.tsx';

const HeroSection = () => (
    <section className="relative bg-black">
        <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop" alt="Luxury office interior" className="w-full h-full object-cover opacity-20 mix-blend-luminosity"/>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-28 px-4 sm:py-36 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark drop-shadow">Elevate Your Space</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200">
                Premium commercial cleaning for brands that demand excellence. Discretion. Precision. Brilliance.
            </p>
            <div className="mt-12 flex justify-center gap-4">
                <NavLink to="/contact" className="btn-shine inline-flex items-center justify-center bg-brand-gold text-black font-semibold py-4 px-8 rounded-full text-lg shadow-lux hover:shadow-xl transition-all">
                    Request Private Quote
                </NavLink>
                <a href="#quote-calculator" className="inline-flex items-center justify-center border border-brand-gold text-brand-gold font-semibold py-4 px-8 rounded-full text-lg hover:bg-brand-gold hover:text-black transition-all">
                    Instant Estimate
                </a>
            </div>
            <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-brand-gold"></span>
                    Trusted by executive offices
                </div>
                <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-brand-gold"></span>
                    Five-star discretion
                </div>
                <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-brand-gold"></span>
                    White-glove standards
                </div>
            </div>
        </div>
    </section>
);

const TrustBar = () => (
    <div className="bg-black border-t border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
                <div className="p-2 font-semibold text-brand-gold">✓ Family-Owned & Operated</div>
                <div className="p-2 font-semibold text-brand-gold">✓ Fully Insured & Bonded</div>
                <div className="p-2 font-semibold text-brand-gold">✓ Serving DFW Since 2023</div>
            </div>
        </div>
    </div>
);

const PromiseSection = () => (
    <div className="bg-black py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-white">Our Promise to You</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Addressing Your Core Concerns
                </p>
                <p className="mt-6 text-lg leading-8 text-white">
                    We built our business to solve the common frustrations with commercial cleaning. With us, you get reliability, professionalism, and transparency.
                </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                    <div className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-white">
                            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold">
                               <CheckCircleIcon className="h-6 w-6 text-white" />
                            </div>
                            On-Time Service
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-200">We respect your schedule. Our teams arrive on time and complete their work efficiently, ensuring minimal disruption to your operations.</dd>
                    </div>
                     <div className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-white">
                            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold">
                               <CheckCircleIcon className="h-6 w-6 text-white" />
                            </div>
                            Consistent Quality
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-200">Our High-Standard Guarantee means you get the same meticulous clean, every time. We use detailed checklists to ensure nothing is missed.</dd>
                    </div>
                     <div className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-white">
                            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold">
                               <CheckCircleIcon className="h-6 w-6 text-white" />
                            </div>
                            Transparent Pricing
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-200">No surprises, no hidden fees. We provide clear, upfront pricing so you know exactly what to expect. Trust and transparency are core to our business.</dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
);

const CoreServicesSection = () => (
    <div className="bg-black py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Core Services</h2>
                <p className="mt-4 text-lg text-gray-200">Comprehensive cleaning solutions tailored to your business needs.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {SERVICES_DATA.slice(0, 3).map(service => (
                    <div key={service.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src={service.imageUrl} alt={service.title} />
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <div className="flex items-center">
                                    <service.icon className="h-8 w-8 text-brand-gold" />
                                    <h3 className="ml-3 text-xl font-semibold text-white">{service.title}</h3>
                                </div>
                                <p className="mt-3 text-base text-gray-300">{service.shortDescription}</p>
                            </div>
                            <div className="mt-6">
                                <NavLink to={`/services/${service.id}`} className="font-semibold text-brand-gold hover:text-brand-gold-light">
                                    Learn More &rarr;
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                 <NavLink to="/services" className="text-lg font-semibold text-brand-gold hover:text-brand-gold-light">
                    View All Services &rarr;
                 </NavLink>
            </div>
        </div>
    </div>
);


const ServiceAreasSection = () => (
    <div className="bg-black py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Proudly Serving Our Local Communities</h2>
                <p className="mt-4 text-lg text-gray-200">Deeply rooted in the DFW area, we have a special focus on Fort Worth and Arlington.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
                {LOCATIONS_DATA.map(location => (
                    <div key={location.id} className="group relative rounded-lg shadow-xl overflow-hidden">
                        <img src={location.imageUrl} alt={`Skyline of ${location.name}`} className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <h3 className="text-3xl font-bold text-white">{location.name}</h3>
                            <p className="mt-2 text-lg text-gray-200">Specialized cleaning for businesses in {location.name}.</p>
                            <NavLink to={`/locations/${location.id}`} className="mt-4 inline-block bg-white text-brand-blue-800 font-bold py-2 px-4 rounded hover:bg-gray-200 transition-colors w-auto self-start">
                                Our {location.name} Services
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => (
    <section className="bg-brand-blue-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Clients Are Saying</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    We're proud to build lasting relationships based on trust and exceptional service.
                </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {TESTIMONIALS_DATA.map((testimonial, index) => (
                    <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 bg-white p-8">
                            <p className="text-gray-600">"{testimonial.quote}"</p>
                        </div>
                        <div className="bg-gray-50 p-6">
                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                            <div className="text-gray-500">{testimonial.company}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


const FinalCTASection = () => (
    <div className="bg-black border-t border-brand-gold/10">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Ready for White-Glove Clean?
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark">Discreet. Impeccable. On your schedule.</span>
        </h2>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <NavLink to="/contact" className="btn-shine rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-black shadow-lux hover:shadow-xl">Request Private Quote</NavLink>
          <a href="#quote-calculator" className="rounded-full border border-brand-gold px-6 py-3 text-sm font-semibold text-brand-gold hover:bg-brand-gold hover:text-black">Instant Estimate</a>
        </div>
      </div>
    </div>
);


const HomePage: React.FC = () => {
    return (
        <div className="bg-black">
            <HeroSection />
            <TrustBar />
            <PromiseSection />
            <InstantQuoteCalculator />
            <CoreServicesSection />
            <ServiceAreasSection />
            <TestimonialsSection />
            <FinalCTASection />
        </div>
    );
};

export default HomePage;