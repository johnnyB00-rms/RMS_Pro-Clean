import React from 'react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
  imageUrl: string;
  pageContent: {
    introduction: string;
    processTitle: string;
    processDescription: string;
    checklist: { category: string; items: string[] }[];
    industries: string[];
    faqs: { question: string; answer: string }[];
  };
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export interface LocationInfo {
  id: string;
  name: string;
  imageUrl: string;
  pageContent: {
    title: string;
    introduction: string;
    sections: {
      title: string;
      content: string;
      imageUrl: string;
    }[];
  };
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  squareFootage: number;
  frequency: string;
  services: string[];
  schedule: string;
  additionalNotes: string;
}

export interface QuoteCalculation {
  basePrice: number;
  frequencyDiscount: number;
  serviceMultiplier: number;
  totalWeeklyPrice: number;
  totalMonthlyPrice: number;
}