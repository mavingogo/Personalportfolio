# Mavin Gogo - Portfolio Website

> A high-performance, single-page portfolio showcasing expertise as a Full-Stack Developer & Data Scientist

![Portfolio Banner](https://via.placeholder.com/1200x400/030712/a855f7?text=Mavin+Gogo+Portfolio)

## 🎨 Design Aesthetic

- **Background**: Deep, immersive dark theme using `#030712` (Tailwind `bg-slate-950`)
- **Primary Accents**: Vibrant purple-to-indigo gradient (`from-purple-500 to-indigo-500`)
- **Glassmorphism**: Sticky navigation with `backdrop-blur-md` and semi-transparent backgrounds
- **Modern UI**: Bento-grid layouts, floating labels, and smooth animations

## ✨ Features

### 1. Hero Section
- High-impact text introduction
- Background video container with dark overlay
- Gradient text effects
- Smooth scroll indicators
- Responsive CTA buttons with Motion animations

### 2. Skills Bento-Grid
- Categorized skills by:
  - **Frontend**: React, TypeScript, Next.js, Tailwind CSS
  - **Backend (Django/Python)**: Django REST, Flask, PostgreSQL
  - **Data Science**: Machine Learning, Pandas, Data Visualization
- Animated progress bars triggered on scroll
- Hover effects with purple borders
- Icon-enhanced skill cards

### 3. Project Showcase
- **Featured Project**: EduForAll (educational accessibility platform)
- Additional projects with real-world applications
- Each card includes:
  - "View Code" (GitHub) link
  - "Live Demo" link
  - Tech stack badges
  - Hover scaling effects
- Staggered fade-in animations

### 4. Experience Timeline
- Vertical timeline showing educational and professional journey
- **Multimedia University** - BSc Information Technology (2021-Present)
- **eMobilis Technology Training Institute** - Software Development (2022-2023)
- Alternating left/right layout on desktop
- Responsive mobile view

### 5. Contact Form
- Full form validation with error messages
- Floating label inputs with smooth transitions
- Success/error state handling
- Contact information cards
- Social media links
- Gradient submit button

## 🚀 Interactive Logic

### Motion (Framer Motion) Animations
- **Staggered Fade-In**: Elements appear sequentially as user scrolls
- **Scroll-Triggered Animations**: Using IntersectionObserver API
- **Hover Effects**: Scale transformations and color transitions
- **Page Load Animations**: Hero section elements animate on mount

### Smooth Scroll Behavior
- Native CSS `scroll-behavior: smooth`
- JavaScript smooth scroll for navigation links
- Automatic mobile menu closing on navigation

### Form Validation
- Real-time validation on input
- Email regex pattern matching
- Minimum length requirements
- Visual error feedback
- Success notification system

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **UI Components**: Shadcn UI
- **Build Tool**: Vite

## 📂 Project Structure

```
portfolio/
├── App.tsx                 # Main app component
├── components/
│   ├── Hero.tsx           # Hero section with video background
│   ├── Skills.tsx         # Bento-grid skills showcase
│   ├── Projects.tsx       # Project cards with animations
│   ├── Experience.tsx     # Timeline component
│   ├── Contact.tsx        # Contact form with validation
│   ├── Navbar.tsx         # Glassmorphic navigation
│   ├── Footer.tsx         # Footer with social links
│   └── ui/                # Shadcn UI components
├── styles/
│   └── globals.css        # Global styles & animations
├── TAILWIND_CONFIG_GUIDE.md
└── PORTFOLIO_README.md
```

## 🎯 Key Components

### Navbar
- Glassmorphic sticky header
- Smooth scroll navigation
- Mobile hamburger menu
- Scroll-based transparency

### Hero Section
```tsx
- Background video container
- Dark overlay (bg-slate-950/90)
- Gradient name text
- Motion-animated elements
- Dual CTA buttons
```

### Skills Bento-Grid
```tsx
- 3 main categories
- Animated progress bars (0-100%)
- Scroll-triggered animations
- Icon integration
- Responsive grid layout
```

### Projects
```tsx
- Featured project highlighting
- GitHub & Live Demo links
- Tech stack badges
- Hover scale effects
- Staggered animations (delay: index * 0.15)
```

### Contact Form
```tsx
- Floating label inputs
- Form validation:
  - Name: min 2 chars
  - Email: regex validation
  - Subject: min 3 chars
  - Message: min 10 chars
- Success/error states
- Gradient submit button
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Dark | `#030712` | Background |
| Purple | `#a855f7` | Primary gradient start |
| Indigo | `#6366f1` | Primary gradient end |
| Slate 900 | `rgb(15 23 42 / 0.5)` | Card backgrounds |
| Slate 800 | `rgb(30 41 59 / 0.5)` | Borders |
| White | `#ffffff` | Primary text |
| Slate 300 | `rgb(203 213 225)` | Secondary text |
| Slate 400 | `rgb(148 163 184)` | Muted text |

## 📱 Responsive Design

- **Mobile First**: Base styles for mobile devices
- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- **Mobile Menu**: Hamburger navigation
- **Flexible Grids**: 1-column mobile, 2+ columns desktop
- **Touch-Friendly**: Larger tap targets on mobile

## ⚡ Performance Optimizations

- **Code Splitting**: Component-based architecture
- **Lazy Loading**: IntersectionObserver for animations
- **Optimized Images**: Placeholder for background video
- **Minimal Dependencies**: Only essential libraries
- **CSS Animations**: Hardware-accelerated transforms

## 🔧 Customization Guide

### Update Personal Information

1. **Name**: Search for "Mavin Gogo" and replace
2. **Email**: Update in Contact component
3. **Social Links**: Modify in Footer and Contact components
4. **Projects**: Edit projects array in Projects.tsx
5. **Experience**: Update experiences array in Experience.tsx
6. **Skills**: Modify skillCategories in Skills.tsx

### Change Color Scheme

See `TAILWIND_CONFIG_GUIDE.md` for detailed color customization instructions.

### Add Background Video

In `Hero.tsx`, replace the video source:
```tsx
<video autoPlay loop muted playsInline>
  <source src="/path/to/your-video.mp4" type="video/mp4" />
</video>
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Platforms
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `dist` folder
- **GitHub Pages**: Configure in repository settings

## 📊 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android 10+)

## 📝 License

© 2026 Mavin Gogo. All rights reserved.

## 🤝 Contact

- **Email**: mavingogo@gmail.com
- **Phone**: +254 746 781 552
- **GitHub**: [github.com/mavingogo](https://github.com/mavingogo)
- **LinkedIn**: [linkedin.com/in/mavingogo](https://linkedin.com/in/mavingogo)
- **Location**: Nairobi, Kenya

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**