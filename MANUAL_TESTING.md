# Primr Events Landing Page - Manual Testing Instructions

## Prerequisites
- Node.js version 18.18.0 or higher (current: 18.17.1 needs update)
- npm or yarn package manager

## Node.js Version Issue Resolution
Your current Node.js version (18.17.1) is slightly below the required minimum (18.18.0). Here are solutions:

### Option 1: Update Node.js (Recommended)
```bash
# Using nvm (if installed)
nvm install 20
nvm use 20

# Or download from nodejs.org
# Visit: https://nodejs.org/en/download/
```

### Option 2: Use Node.js 18.18.0 with nvm
```bash
# IMPORTANT: Run this in every new terminal session
nvm use 18.18.0

# Then run your npm commands
npm run dev
```

### Option 3: Force Run with Current Version
```bash
# Try running with --force flag
npm run dev --force

# Or set environment variable to skip version check
NODE_NO_WARNINGS=1 npm run dev
```

### Option 4: Use Yarn (Alternative)
```bash
# If you have yarn installed
yarn dev
```

## Testing the Landing Page

### 1. Development Server
```bash
# IMPORTANT: Always run this first in new terminal sessions
nvm use 18.18.0

# Then start the development server
cd /Users/shaesmith/Documents/Primr/primr-landing
npm run dev
```
Visit: http://localhost:3000

✅ **STATUS: WORKING** - Server runs successfully on Node.js 18.18.0

### 2. Production Build
```bash
# IMPORTANT: Set Node.js version first
nvm use 18.18.0

# Then build and start
npm run build
npm start
```

### 3. Linting
```bash
# IMPORTANT: Set Node.js version first
nvm use 18.18.0

# Then run linting
npm run lint
```

✅ **STATUS: WORKING** - No ESLint warnings or errors

## Manual Testing Checklist

### Visual Design Testing
- [ ] Hero section displays properly with compelling headline
- [ ] Primr branding colors are applied correctly (#ce1620, #0160a0, #f4c000)
- [ ] Background color is #F1EFEE
- [ ] All images from Unsplash load correctly
- [ ] Typography uses Inter font family
- [ ] All sections have proper spacing and alignment

### Responsive Design Testing
- [ ] Test on mobile devices (320px width minimum)
- [ ] Test on tablet devices (768px width)
- [ ] Test on desktop devices (1024px+ width)
- [ ] Navigation menu works on mobile (hamburger menu)
- [ ] All text remains readable at different screen sizes
- [ ] Images scale properly across devices

### Functionality Testing
- [ ] Header navigation smooth scrolls to sections
- [ ] "Join the Waitlist" buttons scroll to waitlist form
- [ ] Waitlist form validates required fields
- [ ] Form shows appropriate error messages
- [ ] Form submission works (currently placeholder)
- [ ] Success state displays after form submission
- [ ] External links open in new tabs (events.primr.co, demo.primr.co)

### Content Testing
- [ ] All copy is professional and compelling
- [ ] Keywords are naturally integrated ("AI event management", etc.)
- [ ] Pain points resonate with target audience
- [ ] Solution clearly addresses pain points
- [ ] Features are clearly explained
- [ ] Call-to-actions are prominent and urgent

### SEO Testing
- [ ] Title tag: "Primr Events - AI-Powered Event Management Platform" (53 chars)
- [ ] Meta description appears correctly (124 chars)
- [ ] All images have descriptive alt text
- [ ] Proper heading hierarchy (H1, H2, H3)
- [ ] No broken links

### Performance Testing
- [ ] Page loads quickly (< 3 seconds)
- [ ] Images are optimized and load efficiently
- [ ] No console errors in browser developer tools
- [ ] Smooth scrolling animations work properly
- [ ] No layout shift during page load

### Accessibility Testing
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Color contrast meets WCAG standards
- [ ] Screen readers can navigate properly
- [ ] All forms have proper labels

## Browser Compatibility
Test in the following browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Expected User Flow
1. User lands on hero section and reads compelling headline
2. User scrolls through pain points and relates to challenges
3. User sees solution and understands value proposition
4. User reviews features and benefits
5. User feels urgency and fills out waitlist form
6. User receives confirmation and feels excited about early access

## Performance Metrics to Monitor
- Page load time: < 3 seconds
- Largest Contentful Paint (LCP): < 2.5 seconds
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
- Waitlist conversion rate: Target 15-25%

## Common Issues to Watch For
- Images not loading due to CORS or configuration issues
- Form validation not working properly
- Mobile menu not toggling correctly
- Smooth scroll not working in all browsers
- Color contrast issues in certain sections
- Typography not loading correctly

## Additional Notes
- The waitlist form currently uses a placeholder backend (console.log)
- External links point to actual Primr Events platform
- All images are from Unsplash with proper attribution
- Contact email is shae@primr.co
- Privacy policy and terms of service links are placeholders (/privacy, /terms)
