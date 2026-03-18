# Tailwind CSS Configuration Guide

## Important Note: Tailwind v4 Architecture

This project uses **Tailwind CSS v4**, which has moved away from the traditional `tailwind.config.js` file approach. Instead, customization is done through **CSS custom properties** in the `styles/globals.css` file.

## Custom Color Palette

### Purple-to-Indigo Gradient System

The portfolio uses a custom purple-to-indigo gradient color scheme:

#### Primary Colors
- **Purple**: `rgb(168 85 247)` - `#a855f7` - Tailwind's `purple-500`
- **Indigo**: `rgb(99 102 241)` - `#6366f1` - Tailwind's `indigo-500`

#### Background Colors
- **Deep Dark**: `#030712` - `bg-slate-950`
- **Card Background**: `rgb(15 23 42 / 0.5)` - `bg-slate-900/50`
- **Border**: `rgb(30 41 59 / 0.5)` - `border-slate-800/50`

#### Text Colors
- **Primary Text**: `rgb(255 255 255)` - `text-white`
- **Secondary Text**: `rgb(203 213 225)` - `text-slate-300`
- **Muted Text**: `rgb(148 163 184)` - `text-slate-400`

## Gradient Classes Used

### Background Gradients
```css
bg-gradient-to-r from-purple-500 to-indigo-500  /* Main gradient */
bg-gradient-to-br from-purple-500 to-indigo-500 /* Diagonal gradient */
bg-gradient-to-b from-purple-500 to-indigo-500  /* Top to bottom */
```

### Text Gradients
```css
bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent
```

### Hover Effects
```css
hover:from-purple-600 hover:to-indigo-600  /* Darker on hover */
```

## Custom CSS Variables in globals.css

The main customizations are in `/styles/globals.css`:

```css
/* Custom animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
```

## Glassmorphism Effects

### Navbar Glassmorphism
```css
bg-slate-900/70 backdrop-blur-md
```

### Card Glassmorphism
```css
bg-slate-900/50 border border-slate-800/50
```

## Shadow Effects

### Purple Glow Shadows
```css
shadow-lg shadow-purple-500/30       /* Normal glow */
hover:shadow-purple-500/50           /* Hover glow */
shadow-2xl shadow-purple-500/20      /* Larger glow */
```

## Interactive Transitions

### Standard Transition
```css
transition-all duration-300
```

### Hover Scale
```css
hover:scale-105      /* 5% scale up */
hover:scale-110      /* 10% scale up */
hover:scale-[1.02]   /* 2% scale up */
```

### Border Transitions
```css
hover:border-purple-500 transition-all duration-300
```

## Motion (Framer Motion) Integration

### Staggered Fade-In Pattern
```typescript
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: index * 0.15 }}
```

### Scroll-Triggered Animations
Uses IntersectionObserver to trigger animations when sections come into view.

## If You Need a Traditional tailwind.config.js

If you absolutely need to create a `tailwind.config.js` for documentation purposes, here's an equivalent configuration:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.tsx',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom purple-indigo gradient palette
        'gradient-start': '#a855f7', // purple-500
        'gradient-end': '#6366f1',   // indigo-500
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
```

**Note**: This config is for reference only. The actual project doesn't use this file.

## Key Design Patterns

1. **Deep Dark Background**: All sections use `bg-slate-950` (#030712)
2. **Glassmorphic Cards**: `bg-slate-900/50 border border-slate-800/50`
3. **Purple-Indigo Accents**: All CTAs and highlights use the gradient
4. **Backdrop Blur**: Navigation uses `backdrop-blur-md`
5. **Smooth Animations**: All interactive elements have transition states
6. **Responsive Design**: Mobile-first approach with breakpoints

## Usage Examples

### Button with Gradient
```tsx
<Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600">
  Click Me
</Button>
```

### Card with Hover Effect
```tsx
<div className="bg-slate-900/50 border border-slate-800/50 hover:border-purple-500 transition-all duration-300 hover:scale-105">
  Card Content
</div>
```

### Text with Gradient
```tsx
<h1 className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
  Gradient Text
</h1>
```
