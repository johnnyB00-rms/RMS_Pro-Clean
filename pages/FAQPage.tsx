import React from 'react';

const FAQPage: React.FC = () => {
    const faqs = [
        {
            question: "Why should I choose RMS Professional Cleaning Services over larger cleaning companies?",
            answer: "Unlike big national chains or middleman companies, we're a local Fort Worth business owner who personally oversees every job. You're dealing directly with the decision-maker, not a call center. This means faster response times, better communication, and competitive pricing since there's no middleman markup. We've been the trusted subcontractor that larger companies rely on - now you can work with us directly and get better service at a better price."
        },
        {
            question: "What makes RMS Professional Cleaning Services different from other local cleaners?",
            answer: "We specialize in after-hours commercial cleaning, which is our sweet spot. While other companies treat evening and weekend work as an inconvenience, it's what we do best. We understand the unique challenges of cleaning office buildings, medical facilities, and commercial spaces when they're closed. Plus, we're already established with years of experience - we're not learning on your dime."
        },
        {
            question: "How do I know you'll show up consistently?",
            answer: "Reliability is our biggest strength. We've built our reputation by being the company that larger firms call when they need someone dependable. We understand that missed cleanings can shut down your business operations. That's why we have backup systems in place and maintain direct communication with our clients. No more wondering if your building will be clean when you arrive Monday morning."
        },
        {
            question: "Can you handle after-hours and weekend cleaning?",
            answer: "Absolutely - this is actually our specialty. We understand that most businesses need cleaning done when employees aren't around. We're fully bonded and insured for after-hours access, and we have experience with key management, security systems, and building protocols. Many of our clients specifically choose us because we excel at off-hours cleaning that doesn't disrupt their operations."
        },
        {
            question: "What happens if there's a problem with the cleaning?",
            answer: "You call me directly, not a customer service department. As the owner, I personally handle any issues immediately. If something isn't right, we'll return to fix it at no charge. This direct accountability is something you can't get with larger companies where you're just an account number."
        },
        {
            question: "How do your prices compare to bigger cleaning companies?",
            answer: "Our prices are typically 15-25% lower than national chains because we don't have their overhead costs or middleman markups. We can offer competitive rates starting at $0.12 per square foot per week, with additional discounts for frequent service. You get better service at a better price because you're working directly with the cleaning professional, not paying for corporate profits."
        },
        {
            question: "Are you licensed, bonded, and insured?",
            answer: "Yes, we carry comprehensive liability insurance and are fully bonded. All our team members are background-checked and trained. We can provide certificates of insurance to your property management company or building owner. Unlike some smaller operators, we maintain all proper licensing and insurance because we've been doing this professionally for years."
        },
        {
            question: "What areas do you service in the DFW metroplex?",
            answer: "We primarily serve Fort Worth, Arlington, and the surrounding DFW communities. Being locally based means we can respond quickly to any issues and provide consistent service. We know the area, understand local business needs, and can be on-site within 30 minutes if there's ever an emergency or special request."
        },
        {
            question: "How quickly can you start cleaning my facility?",
            answer: "Usually within 48-72 hours. Since we're local and don't have to go through corporate approval processes, we can move fast. We'll do a walkthrough, provide a quote the same day, and start service as soon as you're ready. No waiting weeks for corporate scheduling or approval chains."
        },
        {
            question: "What if my previous cleaning company left me hanging?",
            answer: "This happens more often than you'd think, especially with companies that use subcontractors or have poor communication systems. We've actually taken over many accounts where the previous company suddenly stopped showing up or lost their contract without telling the client. We can start emergency cleaning services immediately and get you back on track."
        },
        {
            question: "Do you provide your own cleaning supplies and equipment?",
            answer: "Yes, we bring all necessary supplies and professional-grade equipment. We use commercial-quality products that are more effective than consumer-grade supplies. For restroom services, we can also handle supply restocking like toilet paper, soap, and paper towels. Everything is included in our service - no hidden costs or supply charges."
        },
        {
            question: "Can you work around our business hours and special events?",
            answer: "Absolutely. Flexibility is one of our biggest advantages as a local business. Need us to come earlier or later? No problem. Have a special event that requires extra cleaning? We can handle it. Need to skip a cleaning because of a company meeting? Just let us know. We work around your schedule, not the other way around."
        },
        {
            question: "What types of commercial facilities do you clean?",
            answer: "We clean office buildings, medical facilities, retail spaces, warehouses, and post-construction sites. Our specialty is understanding the unique needs of each type of facility. Medical offices need different protocols than regular offices. Retail spaces have different challenges than warehouses. We adapt our approach based on your specific industry requirements."
        },
        {
            question: "How do you handle key management and building security?",
            answer: "We have extensive experience with building access, alarm systems, and security protocols. We can work with your existing key management system, security codes, or electronic access cards. All our team members are bonded and background-checked. We understand the responsibility that comes with after-hours building access."
        },
        {
            question: "What happens if you can't clean due to weather or emergencies?",
            answer: "We communicate proactively. If weather or an emergency prevents us from cleaning, you'll know in advance, not when you show up to work. We also have contingency plans to make up missed cleanings. As a local business, we're invested in maintaining our reputation in the community - we can't afford to leave clients hanging."
        },
        {
            question: "Can you provide references from other local businesses?",
            answer: "Yes, we have references from businesses throughout Fort Worth and Arlington. Many of our clients specifically chose us after having problems with larger companies or middleman services. We're proud of our local reputation and happy to connect you with current clients who can speak to our reliability and service quality."
        },
        {
            question: "How do you ensure quality control?",
            answer: "As the owner, I personally oversee quality control. We use detailed checklists for each facility and conduct regular inspections. If there's ever an issue, you're talking directly to the person who can fix it immediately. No waiting for corporate quality assurance departments or regional managers to get involved."
        },
        {
            question: "What's your policy on employee turnover?",
            answer: "We maintain a stable team because we pay fair wages and treat our employees well. High turnover is a major problem with larger cleaning companies - you never know who's going to show up. Our team members are trained, reliable, and familiar with your facility's specific needs. Consistency in personnel means consistency in service quality."
        }
    ];

    return (
        <div className="bg-gray-50">
            <div className="relative bg-brand-blue-800">
                <div className="absolute inset-0">
                    <img className="w-full h-full object-cover" src="https://picsum.photos/seed/faq/1920/1080" alt="Professional cleaning team" />
                    <div className="absolute inset-0 bg-brand-blue-800 mix-blend-multiply" aria-hidden="true"></div>
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Frequently Asked Questions</h1>
                    <p className="mt-6 max-w-xl mx-auto text-xl text-indigo-100">Get answers to common questions about our commercial cleaning services.</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                {faq.question}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-brand-blue-50 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
                    <p className="text-gray-600 mb-6">
                        Can't find what you're looking for? Contact us directly for personalized answers about your commercial cleaning needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+1-817-555-0100" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-green-500 hover:bg-opacity-90">
                            Call (817) 555-0100
                        </a>
                        <a href="mailto:cgunner@rmsproclean.com" className="inline-flex items-center justify-center px-6 py-3 border border-brand-blue-600 rounded-md shadow-sm text-base font-medium text-brand-blue-600 bg-white hover:bg-gray-50">
                            Email Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;