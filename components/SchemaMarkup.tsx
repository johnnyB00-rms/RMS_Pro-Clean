import React, { useEffect } from 'react';
import { COMPANY_DETAILS, SERVICES_DATA } from '../constants.ts';

const SchemaMarkup: React.FC = () => {
  useEffect(() => {
    const scriptId = 'json-ld-schema';
    // Remove existing script to prevent duplicates on re-render
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": COMPANY_DETAILS.name,
      "image": COMPANY_DETAILS.logoUrl,
      "url": COMPANY_DETAILS.url,
      "telephone": COMPANY_DETAILS.phone,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": COMPANY_DETAILS.address.street,
        "addressLocality": COMPANY_DETAILS.address.locality,
        "addressRegion": COMPANY_DETAILS.address.region,
        "postalCode": COMPANY_DETAILS.address.postalCode,
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": COMPANY_DETAILS.geo.latitude,
        "longitude": COMPANY_DETAILS.geo.longitude
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "17:00"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Fort Worth"
        },
        {
          "@type": "City",
          "name": "Arlington"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Commercial Cleaning Services",
        "itemListElement": SERVICES_DATA.map(service => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.title
            }
        }))
      }
    };

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      // Clean up script on component unmount
      const scriptElement = document.getElementById(scriptId);
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []);

  return null;
};

export default SchemaMarkup;