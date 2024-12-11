import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false,
  },
  debug: true, // Enable debug logging
  logger: true // Enable built-in logger
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    console.log('Received request body:', req.body);

    const { name, email, type, otherType, query } = req.body;

    // Validate required fields
    if (!name || !email || !type || !query || (type === 'other' && !otherType)) {
      console.log('Validation failed:', { name, email, type, otherType, query });
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format:', email);
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Verify SMTP configuration
    console.log('SMTP Configuration:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER ? '(set)' : '(not set)',
      pass: process.env.SMTP_PASS ? '(set)' : '(not set)',
    });

    // Test SMTP connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (error) {
      console.error('SMTP verification failed:', error);
      return res.status(500).json({ error: 'Failed to connect to email server' });
    }

    // Send notifications to both email addresses
    const notificationEmails = ['joseph@platteneye.co.uk', 'daniel@platteneye.co.uk'];
    
    try {
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

      console.log('Notification emails sent successfully');
    } catch (error) {
      console.error('Failed to send notification emails:', error);
      return res.status(500).json({ error: 'Failed to send notification emails' });
    }

    // Send confirmation email to user
    try {
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

      console.log('Confirmation email sent successfully');
    } catch (error) {
      console.error('Failed to send confirmation email:', error);
      return res.status(500).json({ error: 'Failed to send confirmation email' });
    }

    return res.status(200).json({ 
      success: true,
      message: 'Consultation request submitted successfully' 
    });
  } catch (error) {
    console.error('Submission error:', error);
    return res.status(500).json({ 
      error: 'Failed to submit consultation request. Please try again later.',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}