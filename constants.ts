import type { Service, Testimonial, LocationInfo } from './types.ts';
import { OfficeIcon, RestroomIcon, FloorIcon, CarpetIcon, WindowIcon, ConstructionIcon } from './components/Icons.tsx';

export const COMPANY_DETAILS = {
  name: "DFW ProClean Solutions",
  phone: "+1-817-555-0100",
  address: {
    street: "123 Commerce St", // For schema, not public display
    locality: "Fort Worth",
    region: "TX",
    postalCode: "76102",
    country: "US"
  },
  geo: {
    latitude: "32.7555", // Fort Worth latitude
    longitude: "-97.3308" // Fort Worth longitude
  },
  url: "https://www.rmsproclean.com", // Company URL
  logoUrl: "https://picsum.photos/seed/logo/200/50",
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'general-office-cleaning',
    title: 'General Office Cleaning',
    shortDescription: 'Core services including trash removal, dusting, and sanitizing to keep your workspace pristine.',
    icon: OfficeIcon,
    imageUrl: 'https://picsum.photos/seed/office/1200/800',
    pageContent: {
      introduction: "A clean and organized office is essential for productivity and employee morale. Our General Office Cleaning service provides a comprehensive solution to maintain a professional and healthy work environment. We handle all the day-to-day cleaning tasks, so you can focus on your business.",
      processTitle: "Our Meticulous Office Cleaning Process",
      processDescription: "We follow a systematic approach to ensure no detail is overlooked. Our trained team works efficiently to deliver consistent, high-quality results every time.",
      checklist: [
        { category: "Common Areas & Workstations", items: ["Empty all trash receptacles and replace liners", "Dust all accessible surfaces, including desks, chairs, and filing cabinets", "Wipe and sanitize high-touch surfaces (doorknobs, light switches, phones)", "Clean glass partitions and interior windows", "Vacuum all carpeted areas", "Sweep and mop hard surface floors"] },
        { category: "Kitchen & Break Rooms", items: ["Wipe down countertops and tables", "Clean exterior of appliances (microwave, refrigerator)", "Clean and sanitize sink", "Restock supplies (paper towels, soap - if provided)", "Mop floor"] },
      ],
      industries: ["Corporate Offices", "Tech Startups", "Law Firms", "Real Estate Agencies"],
      faqs: [
        { question: "How often should we schedule office cleaning?", answer: "Most businesses benefit from daily or 3-times-a-week service, but we can create a custom schedule based on your office traffic and needs." },
        { question: "Do you use eco-friendly cleaning products?", answer: "Yes, we offer green cleaning solutions upon request. Our standard products are professional-grade and effective while prioritizing safety." }
      ]
    }
  },
  {
    id: 'restroom-sanitation',
    title: 'Restroom Sanitation',
    shortDescription: 'Detailed cleaning and disinfection to ensure your restrooms are hygienic and welcoming.',
    icon: RestroomIcon,
    imageUrl: 'https://picsum.photos/seed/restroom/1200/800',
    pageContent: {
      introduction: "Restrooms are a critical reflection of your business's standards. Our Restroom Sanitation service goes beyond a simple wipe-down, focusing on deep cleaning and disinfection to eliminate germs, prevent odors, and maintain a fresh, hygienic facility for your employees and visitors.",
      processTitle: "Our Comprehensive Restroom Cleaning & Disinfection Process",
      processDescription: "We use a multi-point checklist and hospital-grade disinfectants to ensure your restrooms are not just clean, but sanitized.",
      checklist: [
        { category: "Fixtures", items: ["Clean and disinfect toilets and urinals inside and out", "Scour and sanitize sinks and faucets", "Polish chrome fixtures and mirrors"] },
        { category: "Surfaces & Supplies", items: ["Disinfect all high-touch surfaces (dispensers, door handles, flushers)", "Wipe down partitions and walls", "Restock toilet paper, paper towels, and hand soap", "Empty sanitary disposal units and trash receptacles"] },
        { category: "Floors", items: ["Sweep and mop floor with disinfectant cleaner", "Pay special attention to corners and baseboards"] }
      ],
      industries: ["All commercial facilities", "Medical Offices", "Retail Stores", "Restaurants"],
      faqs: [
        { question: "What do you do about persistent odors?", answer: "Our deep cleaning process, combined with effective disinfectants and regular service, eliminates the root cause of odors, rather than just masking them." },
        { question: "Are your disinfectants safe?", answer: "Absolutely. We use EPA-approved, hospital-grade disinfectants that are proven to be effective against a wide range of pathogens while being safe for commercial environments when used correctly by our trained staff." }
      ]
    }
  },
  {
    id: 'floor-care',
    title: 'Advanced Floor Care',
    shortDescription: 'Specialized services like stripping, waxing, and polishing for various floor types.',
    icon: FloorIcon,
    imageUrl: 'https://picsum.photos/seed/floor/1200/800',
    pageContent: {
      introduction: "Your floors are one of the first things clients notice. Our Advanced Floor Care services protect your investment and enhance your facility's appearance. From routine maintenance to restorative stripping and waxing, we have the expertise to make your floors shine.",
      processTitle: "Our Professional Floor Care Method",
      processDescription: "We use state-of-the-art equipment and premium products to deliver durable, high-gloss finishes.",
      checklist: [
        { category: "Vinyl Composite Tile (VCT) Care", items: ["High-speed burnishing to restore shine", "Scrub and recoat to add new layers of finish", "Complete strip and wax to remove old, yellowed wax and apply fresh coats"] },
        { category: "Other Hard Surfaces", items: ["Deep cleaning for tile and grout", "Polishing for concrete and natural stone", "Laminate and hardwood floor maintenance"] },
      ],
      industries: ["Medical Facilities", "Schools and Universities", "Retail Showrooms", "High-Traffic Lobbies"],
      faqs: [
        { question: "How often does my VCT floor need to be stripped and waxed?", answer: "This depends on foot traffic. High-traffic areas may need it annually, while lower-traffic areas can go 18-24 months. Regular burnishing can extend the life of the wax." },
        { question: "Can you remove tough stains from grout?", answer: "Yes, our specialized equipment and cleaning solutions can penetrate deep into grout lines to remove built-up dirt and discoloration that regular mopping leaves behind." }
      ]
    }
  },
  {
    id: 'carpet-cleaning',
    title: 'Carpet Cleaning',
    shortDescription: 'Deep steam cleaning and spot treatment to revitalize your commercial carpets.',
    icon: CarpetIcon,
    imageUrl: 'https://picsum.photos/seed/carpet/1200/800',
    pageContent: {
      introduction: 'Extend the life of your carpets and improve indoor air quality with our professional carpet cleaning service. We remove deep-seated dirt, allergens, and stains, leaving your carpets fresh and clean.',
      processTitle: 'Our Hot Water Extraction Process',
      processDescription: 'We use the industry-recommended hot water extraction method (steam cleaning) for a deep, restorative clean.',
      checklist: [
        { category: 'Standard Process', items: ['Pre-vacuuming to remove loose soil', 'Pre-treatment of spots and stains', 'Application of pre-spray to break down dirt', 'Hot water extraction using commercial-grade equipment', 'Post-grooming to set carpet pile for faster drying'] }
      ],
      industries: ['Corporate Offices', 'Hotels', 'Call Centers', 'Churches'],
      faqs: [
        { question: 'How long will it take for the carpets to dry?', answer: 'Drying time is typically 4-8 hours, depending on humidity and airflow. We can use air movers to speed up the process.' }
      ]
    }
  },
  {
    id: 'window-washing',
    title: 'Window Washing',
    shortDescription: 'Streak-free cleaning for interior and exterior windows, enhancing natural light.',
    icon: WindowIcon,
    imageUrl: 'https://picsum.photos/seed/window/1200/800',
    pageContent: {
      introduction: 'Crystal-clear windows make a powerful statement about your business. Our professional window washing service removes dirt, grime, and streaks, improving your building\'s curb appeal and allowing for maximum natural light.',
      processTitle: 'Our Streak-Free Guarantee',
      processDescription: 'We use professional-grade squeegees and purified water systems to achieve a perfect, streak-free shine every time.',
      checklist: [
        { category: 'Cleaning Process', items: ['Cleaning of all interior and exterior glass', 'Wiping of window sills and frames', 'Cleaning of accessible tracks', 'Removal of cobwebs and debris from window surrounds'] }
      ],
      industries: ['Retail Storefronts', 'Low-Rise Office Buildings', 'Restaurants', 'Car Dealerships'],
      faqs: [
        { question: 'Do you clean high-rise windows?', answer: 'Our services are focused on ground-level and low-rise buildings, typically up to 3 stories. Please contact us to discuss your specific needs.' }
      ]
    }
  },
  {
    id: 'post-construction-cleanup',
    title: 'Post-Construction Cleanup',
    shortDescription: 'Detailed cleanup after construction or renovation to make your new space move-in ready.',
    icon: ConstructionIcon,
    imageUrl: 'https://picsum.photos/seed/construction/1200/800',
    pageContent: {
      introduction: 'Construction projects leave behind a significant amount of dust and debris. Our Post-Construction Cleanup service is a meticulous, multi-phase process designed to transform a chaotic construction site into a pristine, move-in-ready space.',
      processTitle: 'From Debris to Detail-Clean',
      processDescription: 'We handle everything from the initial rough clean to the final touch-ups, ensuring your new space is immaculate.',
      checklist: [
        { category: 'Multi-Phase Cleanup', items: ['Removal of all trash, debris, and materials', 'Extensive dusting of all surfaces, from ceiling fixtures to baseboards', 'Cleaning of all windows, sills, and tracks', 'Sticker and adhesive removal from new installations', 'Deep cleaning and sanitization of kitchens and restrooms', 'Final floor care (vacuuming, mopping, or polishing)'] }
      ],
      industries: ['General Contractors', 'Real Estate Developers', 'Property Managers', 'Business Owners after renovation'],
      faqs: [
        { question: 'When should we schedule post-construction cleaning?', answer: 'The ideal time is after all construction work is complete, including touch-up painting and inspections, and before any furniture is moved in.' }
      ]
    }
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        quote: "DFW ProClean Solutions has been a game-changer for our office. The team is always on time, professional, and their attention to detail is second to none. It's a relief to finally have a cleaning service we can count on.",
        name: "Sarah Johnson",
        company: "Innovate Tech, Fort Worth"
    },
    {
        quote: "The difference is night and day. Their transparent pricing meant no surprises, and the quality of their work is consistently high. Our restrooms have never been cleaner. Highly recommend!",
        name: "Michael Chen",
        company: "Arlington Logistics Group"
    },
    {
        quote: "As a property manager, reliability is everything. DFW ProClean has never missed a cleaning and their communication is excellent. They are a true partner in maintaining our facilities.",
        name: "David Rodriguez",
        company: "Metroplex Properties"
    }
];

export const LOCATIONS_DATA: LocationInfo[] = [
    {
        id: 'fort-worth',
        name: 'Fort Worth',
        imageUrl: 'https://picsum.photos/seed/fortworth/800/600',
        pageContent: {
            title: 'Your Trusted Commercial Cleaning Partner in Fort Worth, TX',
            introduction: 'DFW ProClean Solutions is proud to be a locally-owned business serving the vibrant commercial landscape of Fort Worth. We understand the unique needs of businesses here, from the bustling high-rises of Downtown to the specialized facilities in the Medical District. We offer reliable, high-quality cleaning services tailored to the heart of Cowtown.',
            sections: [
                {
                    title: "Office Cleaning for Downtown Fort Worth's Financial & Legal Hubs",
                    content: "We provide discreet and professional cleaning services for the demanding environments of law offices, financial institutions, and corporate headquarters in Downtown Fort Worth. We understand the importance of maintaining a pristine image and confidentiality. Our services near landmarks like the Tarrant County Courthouse and Sundance Square ensure your workspace reflects your firm's prestige.",
                    imageUrl: 'https://picsum.photos/seed/downtownfw/600/400'
                },
                {
                    title: "Specialized Cleaning for the Near Southside Medical District",
                    content: "Healthcare facilities require a higher standard of cleanliness. We offer specialized cleaning and sanitation services for clinics, labs, and medical offices in the Near Southside. Our team is trained in protocols that help prevent cross-contamination and maintain a safe environment for patients and staff, supporting the vital work done in this district.",
                    imageUrl: 'https://picsum.photos/seed/medicalfw/600/400'
                },
                {
                    title: "Maintaining Pristine Environments for Sundance Square Businesses",
                    content: "Retail stores and restaurants in high-traffic areas like Sundance Square need to look their best at all times. Our flexible scheduling ensures your business is clean and welcoming for every customer, from open to close. We handle everything from floor care to window washing, so you can focus on providing a great customer experience.",
                    imageUrl: 'https://picsum.photos/seed/sundance/600/400'
                }
            ]
        }
    },
    {
        id: 'arlington',
        name: 'Arlington',
        imageUrl: 'https://picsum.photos/seed/arlington/800/600',
        pageContent: {
            title: 'Professional Janitorial Services for Arlington, TX',
            introduction: "As a major economic engine in the DFW metroplex, Arlington is home to world-class corporations, manufacturing leaders, and a thriving entertainment district. DFW ProClean Solutions offers robust and flexible cleaning plans designed to meet the diverse needs of Arlington's businesses.",
            sections: [
                {
                    title: 'Janitorial Services for Businesses in the Arlington Entertainment District',
                    content: 'High-traffic venues around the stadiums and Six Flags require constant attention. We provide comprehensive janitorial services for hotels, restaurants, and retail outlets in the Entertainment District, ensuring your facility can handle the crowds and always look its best.',
                    imageUrl: 'https://picsum.photos/seed/entertainmentarl/600/400'
                },
                {
                    title: "Supporting Arlington's Corporate Offices and Commercial Hubs",
                    content: "From offices near the I-20 business corridor to commercial centers like The Parks Mall, we offer customized cleaning plans that support Arlington's corporate community. We work with major employers like General Motors and Texas Health Resources to provide clean and healthy work environments for their teams.",
                    imageUrl: 'https://picsum.photos/seed/corporatearl/600/400'
                },
                {
                    title: "Flexible Cleaning Schedules for Arlington's Manufacturing and Logistics Sector",
                    content: "We understand the 24/7 nature of manufacturing and logistics. Our teams can work around your production schedules to provide cleaning services for warehouses, distribution centers, and manufacturing plants without disrupting your operations. We focus on safety and efficiency.",
                    imageUrl: 'https://picsum.photos/seed/industrialarl/600/400'
                }
            ]
        }
    }
];