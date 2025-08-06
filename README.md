# Primr Events - AI-Powered Event Management Platform

Production event management platform with AI-powered document intelligence.

**🌐 Live Platform:** https://events.primr.co
**📖 Demo Project:** https://demo.primr.co

---

## Features
- **Event Management:** Create, organize, and manage events
- **Document Intelligence:** AI-powered document upload and processing
- **Smart Q&A:** Ask questions about uploaded documents
- **Multi-tenant:** Secure user isolation and event scoping
- **Real-time Chat:** Interactive FAQ system with chat history

---

## Getting Started

### Prerequisites
- Node.js version 18.18.0 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/PrimrCo/primr-landing.git
cd primr-landing

# Install dependencies
npm install

# Set Node.js version (important for development)
nvm use 18.18.0

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

```bash
# Development server
npm run dev

# Development server with Turbopack (requires Node.js 18.18.0+)
npm run dev-turbo

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with Primr branding
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main landing page
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Navigation header with logo
│   │   └── Footer.tsx     # Footer with links and branding
│   ├── sections/          # Landing page sections
│   │   ├── HeroSection.tsx        # Hero with CTA
│   │   ├── PainPointsSection.tsx  # Problem identification
│   │   ├── SolutionSection.tsx    # AI solution showcase
│   │   ├── FeaturesSection.tsx    # Platform features
│   │   └── WaitlistSection.tsx    # Email capture form
│   └── ui/                # Reusable UI components
│       ├── Button.tsx     # Branded button component
│       └── Input.tsx      # Form input component
├── types/
│   └── index.ts          # TypeScript interfaces
public/
├── primr-logo.svg        # Primr Events logo
└── ...                   # Other static assets
```

---

## Branding

### Colors
- **Primary Red:** #ce1620
- **Secondary Blue:** #0160a0
- **Highlight Yellow:** #f4c000
- **Text:** #1a1a1a
- **Background:** #F1EFEE

### Typography
- **Font Family:** Inter (via Google Fonts)
- **Weights:** Regular (400), Semibold (600), Bold (700)

---

## Development

### Node.js Version Management
This project requires Node.js 18.18.0 or higher. If using nvm:

```bash
# In every new terminal session, run:
nvm use 18.18.0

# Then run your npm commands
npm run dev
```

### Code Standards
- **TypeScript:** Strictly typed with interfaces
- **ESLint:** Zero warnings/errors required
- **JSDoc:** All public functions documented
- **Responsive Design:** Mobile-first approach
- **Accessibility:** WCAG compliant

### Testing
See `MANUAL_TESTING.md` for comprehensive testing instructions including:
- Visual design testing
- Responsive design testing
- Functionality testing
- Content testing
- SEO testing
- Performance testing
- Accessibility testing

---

## Deployment

### Vercel (Recommended)
The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will automatically deploy on push to main

### Other Platforms
This is a standard Next.js application and can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- Heroku
- AWS
- Google Cloud
- Digital Ocean

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is proprietary software owned by Primr Co.

---

## Contact

- **Email:** shae@primr.co
- **Website:** https://events.primr.co
- **Demo:** https://demo.primr.co
