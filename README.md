# Abstract Software Website

A professional website for Abstract Software startup featuring modern design, responsive layout, and contact form functionality.

## Features

- Modern, responsive design with Tailwind CSS
- Hero section with call-to-action
- About, Services, Testimonials, and Contact sections
- Professional footer with social links and logo
- Privacy Policy and Terms of Service pages
- Contact form with backend email functionality

## Setup Instructions

### Prerequisites

1. **Install Node.js** (version 16 or higher):
   - Download from: https://nodejs.org/
   - Or use NVM: https://github.com/nvm-sh/nvm (Linux/Mac) or https://github.com/coreybutler/nvm-windows (Windows)

2. **Verify installation**:
   ```bash
   node --version
   npm --version
   ```

### Backend Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure email settings**:
   - Open `.env` file
   - Update the email credentials:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     EMAIL_TO=your-email@gmail.com
     ```
   - For Gmail, you'll need to generate an App Password:
     - Go to Google Account settings
     - Enable 2-factor authentication
     - Generate an App Password for this application

3. **Start the server**:
   ```bash
   npm start
   ```
   Or for development:
   ```bash
   npm run dev
   ```

4. **Access the website**:
   - Open http://localhost:3000 in your browser

### File Structure

```
├── index.html          # Main website page
├── privacy-policy.html # Privacy policy page
├── terms.html          # Terms of service page
├── style.css           # Custom styles
├── script.js           # Client-side JavaScript
├── server.js           # Node.js/Express backend server
├── package.json        # Node.js dependencies
├── .env               # Environment variables (email config)
└── images/            # Logo and other images
```

## Development

- The frontend uses vanilla HTML, CSS (Tailwind), and JavaScript
- The backend uses Node.js with Express and Nodemailer for email handling
- Contact form submissions are sent via email

## Deployment

For production deployment, consider:
- Using a service like Heroku, Vercel, or Netlify
- Setting up proper environment variables
- Using a production email service (SendGrid, Mailgun, etc.)