import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <>
            <div className="bg-brand-blue-800">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">About DFW ProClean Solutions</h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-brand-blue-100">Your Local, Trusted Cleaning Partner.</p>
                </div>
            </div>

            <div className="py-16 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        <p className="text-base text-center font-semibold text-brand-blue-600 tracking-wide uppercase">Our Story</p>
                        <h2 className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            A Commitment to DFW Businesses
                        </h2>
                    </div>
                    <div className="mt-8 prose prose-indigo prose-lg text-gray-500 mx-auto">
                        <p>
                            DFW ProClean Solutions was founded on a simple but powerful idea: that businesses in the Dallas-Fort Worth area deserve a commercial cleaning service that is reliable, professional, and transparent. We saw a gap between the impersonal service of large national franchises and the inconsistent quality of smaller operators. We knew we could do better.
                        </p>
                        <p>
                            As a <strong className="text-gray-900">family-owned and operated business</strong>, our roots are firmly planted in the local community. We're not just a service provider; we're your neighbors. This local authenticity is at the core of everything we do. When you partner with us, you're not dealing with a call center or a middleman. You're dealing directly with a team that is invested in your satisfaction and in the community we share.
                        </p>
                        <h3 className="text-gray-900">Our Digital Value Proposition: Reliability, Professionalism, Transparency</h3>
                        <p>
                            We've heard the common complaints about other cleaning services: missed appointments, poor communication, confusing bills, and inconsistent work. We've built our entire business model to be the antidote to these problems.
                        </p>
                        <ul>
                            <li><strong>Reliability:</strong> We show up on time, every time. Our "High-Standard Guarantee" ensures you receive the same meticulous level of cleaning during every single visit.</li>
                            <li><strong>Professionalism:</strong> Our team is fully trained, insured, and bonded. We treat your facility with the utmost respect and work discreetly and efficiently.</li>
                            <li><strong>Transparency:</strong> From our detailed checklists to our upfront pricing, we believe in clear communication. With us, there are no hidden fees or surprises.</li>
                        </ul>
                        <p>
                            Our goal is to build long-term partnerships with our clients based on trust and exceptional results. We are proud to serve Fort Worth, Arlington, and the surrounding DFW communities, and we look forward to showing you the DFW ProClean Solutions difference.
                        </p>
                    </div>
                </div>
            </div>
             <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to experience the difference?</span>
                        <span className="block text-brand-blue-600">Let's discuss your cleaning needs today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a href="/#/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-blue-600 hover:bg-brand-blue-700">
                                Get a Free Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;