import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const handler: Handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Request body is required' }),
    };
  }

  try {
    const { name, email, type, otherType, query } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !type || !query || (type === 'other' && !otherType)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'All fields are required' }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    // Send notifications to both email addresses
    const notificationEmails = ['joseph@platteneye.co.uk', 'daniel@platteneye.co.uk'];
    
    await Promise.all(notificationEmails.map(notificationEmail => 
      transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: notificationEmail,
        subject: `New Consultation Request from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Type: ${type === 'other' ? otherType : type}
          Query: ${query}
        `,
        html: `
          <h2>New Consultation Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Type:</strong> ${type === 'other' ? otherType : type}</p>
          <p><strong>Query:</strong></p>
          <p>${query.replace(/\n/g, '<br>')}</p>
        `,
      })
    ));

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Consultation Request Received - Platteneye Capital',
      text: `
        Dear ${name},

        Thank you for your consultation request. We have received your inquiry and our team will get back to you within 24 hours.

        Best regards,
        Platteneye Capital Team
      `,
      html: `
        <h2>Thank you for your consultation request</h2>
        <p>Dear ${name},</p>
        <p>We have received your inquiry and our team will get back to you within 24 hours.</p>
        <br>
        <p>Best regards,<br>Platteneye Capital Team</p>
      `,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true,
        message: 'Consultation request submitted successfully' 
      }),
    };
  } catch (error) {
    console.error('Submission error:', error);
    
    // Handle JSON parse errors specifically
    if (error instanceof SyntaxError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid request format' }),
      };
    }

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to submit consultation request. Please try again later.' 
      }),
    };
  }
};