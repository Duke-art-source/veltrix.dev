# Veltrix - Custom Web Development & Digital Solutions

A modern, responsive portfolio website for a web development agency based in Nairobi, Kenya.

## Features

- 🎨 Modern, responsive design with dark mode support
- 📱 Mobile-first approach (works perfectly on phones, tablets, and desktops)
- ⚡ Fast performance with optimized assets
- 🌐 Built with Tailwind CSS v4 and Vanilla JavaScript
- 💼 Showcase projects and services
- 📧 Contact form integration (Formspree ready)
- 🔄 Smooth animations and transitions

## Tech Stack

- **Frontend**: HTML5, CSS3, Tailwind CSS v4
- **JavaScript**: Vanilla JS (no frameworks)
- **Icons**: FontAwesome 6.4
- **Backend**: Node.js + Express (optional)
- **Database**: MongoDB support (optional)

## Project Structure

```
my porti/
├── index.html          # Main HTML file
├── style.css           # Custom styles
├── script.js           # Client-side JavaScript
├── server.js           # Node.js server
├── db.js               # Database connection
├── package.json        # Dependencies
├── node_modules/       # Dependencies folder
├── images/             # Images folder
└── .gitignore          # Git ignore file
```

## Quick Start

### Option 1: Static Version (No Backend)
1. Open `index.html` directly in your browser
2. All features work without a server

### Option 2: With Node.js Server
```bash
npm install
npm start
# Visit http://localhost:3000
```

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies (if using backend):
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

## Features Included

- **Home**: Hero section with call-to-action
- **Services**: Showcase 5 core services
- **Projects**: Portfolio grid with 8 projects (expandable)
- **About**: Company stats and information
- **Contact**: Contact form with Formspree integration

## Customization

### Update Contact Information
Edit the following in `index.html`:
- Phone: `+254 768 923 768`
- Email: `info@veltrix.co.ke`
- Location: `Nairobi, Kenya`
- Social media links

### Update Services & Projects
Modify the service cards and project cards directly in `index.html`

### Setup Contact Form
1. Go to [Formspree.io](https://formspree.io)
2. Create a new form
3. Replace `your-form-id` in the contact form action with your actual ID

## Deployment

### GitHub Pages (Free)
1. Push to GitHub
2. Go to Settings → Pages
3. Select main branch as source
4. Your site will be live at `https://YOUR-USERNAME.github.io/my-portfolio`

### Netlify (Recommended)
1. Connect your GitHub repo
2. Set build command: `npm run build` (if applicable)
3. Deploy instantly

### Vercel
1. Import your GitHub repo
2. Click Deploy
3. Custom domain support available

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2026 Veltrix Solutions Kenya. All Rights Reserved.

## Contact

- **Email**: info@veltrix.co.ke
- **Phone**: +254 768 923 768
- **Location**: Nairobi, Kenya
- **Website**: https://veltrix.co.ke

---

**Made with ❤️ in Nairobi**
