import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_794lcu7'; // You'll need to set this up
const EMAILJS_TEMPLATE_ID = 'template_4ivpxfc'; // You'll need to set this up
const EMAILJS_PUBLIC_KEY = 'qFfYvj6YmO0gHbVfq'; // You'll need to set this up

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message?: string;
  squareFootage?: number;
  frequency?: string;
  services?: string[];
  schedule?: string;
  additionalNotes?: string;
  estimatedWeeklyPrice?: number;
  estimatedMonthlyPrice?: number;
}

export const sendQuoteEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Format the services array for email
    const servicesText = data.services ? data.services.join(', ') : data.service || 'Not specified';
    
    // Prepare email template parameters
    const templateParams = {
      to_email: 'cgunner@rmsproclean.com',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      company: data.company || 'Not provided',
      services: servicesText,
      square_footage: data.squareFootage || 'Not specified',
      frequency: data.frequency || 'Not specified',
      schedule: data.schedule || 'Not specified',
      message: data.message || data.additionalNotes || 'No additional notes',
      estimated_weekly: data.estimatedWeeklyPrice ? `$${data.estimatedWeeklyPrice}` : 'Not calculated',
      estimated_monthly: data.estimatedMonthlyPrice ? `$${data.estimatedMonthlyPrice}` : 'Not calculated',
      submission_date: new Date().toLocaleString(),
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// For development/testing - you can remove this later
export const sendTestEmail = async (): Promise<boolean> => {
  const testData: EmailData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '(409) 728-5083',
    company: 'Test Company',
    services: ['general-office-cleaning', 'restroom-sanitation'],
    squareFootage: 2000,
    frequency: '3',
    schedule: 'morning',
    message: 'This is a test quote request',
    estimatedWeeklyPrice: 280,
    estimatedMonthlyPrice: 1213
  };

  return sendQuoteEmail(testData);
};