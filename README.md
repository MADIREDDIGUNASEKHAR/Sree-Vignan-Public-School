# Sree Vignan Public School Website

A modern, bright, student-friendly school website built with Next.js, Tailwind CSS, and TypeScript.

## Features

✅ **Modern Design** - Bright, welcoming, and trustworthy interface
✅ **Mobile Responsive** - Perfect on all devices
✅ **5 Pages** - Home, About, Academics, Gallery, Contact
✅ **SEO Optimized** - School schema markup included
✅ **Contact Form** - For inquiries and admissions
✅ **WhatsApp Integration** - Floating button on all pages
✅ **Performance Optimized** - Fast loading and optimized images

## Tech Stack

- **Next.js 15+** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**

## Project Structure

```
src/
├── app/                    # Pages
│   ├── page.tsx           # Home
│   ├── about/page.tsx     # About
│   ├── academics/page.tsx # Academics
│   ├── gallery/page.tsx   # Gallery
│   ├── contact/page.tsx   # Contact
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── WhatsAppButton.tsx
│   └── ContactForm.tsx
├── lib/
│   ├── constants.ts       # School info & content
│   └── seo.ts            # SEO schemas
└── globals.css           # Global styles
```

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

## Customization

### Update School Information
Edit `src/lib/constants.ts`:
- School name
- Phone number
- Email
- Address
- WhatsApp number
- Doctor/Principal name (if needed)
- Programs and facilities

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'primary-blue': '#1565C0',
  'accent-yellow': '#FBC02D',
  'sky-blue': '#E3F2FD',
  'light-gray': '#F5F5F5',
}
```

### Add Images
1. Place in `/public` folder
2. Replace placeholders in pages
3. Update image paths

## Deployment

### Vercel (Easiest - FREE)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Push code to GitHub
2. Connect to Netlify
3. Deploy

### Other Platforms
```bash
npm run build
npm start
```

## Pages Overview

- **Home** - Hero, programs, facilities, testimonials, location
- **About** - School history, mission, vision, values
- **Academics** - Curriculum, teaching methodology, exams
- **Gallery** - Grid of school images
- **Contact** - Contact form, address, map

## Features

### Components
- Header with mobile menu
- Footer with links and contact
- Reusable Button component
- Contact Form
- WhatsApp floating button

### SEO
- School schema markup
- Meta tags on all pages
- Open Graph support
- Local business information

### Mobile
- 100% responsive design
- Mobile-first approach
- Touch-friendly buttons
- Optimized navigation

## Colors

- **Primary Blue:** #1565C0
- **Accent Yellow:** #FBC02D
- **Sky Blue:** #E3F2FD
- **Light Gray:** #F5F5F5

## Files to Edit

1. **src/lib/constants.ts** - All school information
2. **src/app/page.tsx** - Home page content
3. **src/app/about/page.tsx** - About page content
4. **tailwind.config.js** - Colors and styling

## Production Build

```bash
npm run build
npm start
```

## Support

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Deployment: https://vercel.com/docs

## License

Educational use only.
