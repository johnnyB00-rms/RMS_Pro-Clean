# EmailJS Setup Guide for RMS Professional Cleaning Services

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended) or your preferred email provider
4. Connect your Gmail account (cgunner@rmsproclean.com)
5. Note the Service ID (e.g., "service_rms_cleaning")

## Step 3: Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Quote Request from {{from_name}}

**Body:**
```
New Quote Request Received

Customer Information:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Company: {{company}}

Service Details:
- Services Requested: {{services}}
- Square Footage: {{square_footage}}
- Cleaning Frequency: {{frequency}}
- Preferred Schedule: {{schedule}}

Pricing Estimate:
- Weekly: {{estimated_weekly}}
- Monthly: {{estimated_monthly}}

Message:
{{message}}

Submitted: {{submission_date}}

---
Respond promptly to convert this lead!
```

4. Save template and note the Template ID (e.g., "template_quote_request")

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Copy your Public Key

## Step 5: Update Configuration
Update the values in `services/emailService.ts`:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

## Step 6: Test Email Functionality
1. Deploy your website
2. Submit a test quote request
3. Check cgunner@rmsproclean.com for the email

## Calendly Setup (for Appointment Booking)

## Step 1: Create Calendly Account
1. Go to https://calendly.com/
2. Sign up with cgunner@rmsproclean.com
3. Choose the free plan

## Step 2: Create Event Type
1. Create a new event type called "Property Survey"
2. Set duration to 30-60 minutes
3. Set availability (evenings/weekends as mentioned)
4. Add location options (client's property, video call, etc.)

## Step 3: Customize Booking Page
1. Add description: "Free consultation and property assessment for commercial cleaning services"
2. Add questions:
   - Property type (office, medical, retail, etc.)
   - Square footage (approximate)
   - Current cleaning situation
   - Specific concerns or requirements

## Step 4: Update Component
Update the Calendly URL in `components/AppointmentBooking.tsx`:
```typescript
const calendlyUrl = "https://calendly.com/your-username/property-survey";
```

## Google Ads Integration
For the Google Ads confirmation page you're setting up, you can use:
- Contact form submission: `/contact` (after form submission)
- Quote calculator submission: `/contact` (after quote submission)
- Appointment booking: The Calendly confirmation page URL

This setup will ensure your brother gets immediate email notifications for all leads and can easily schedule property surveys with potential clients.