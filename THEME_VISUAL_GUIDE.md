# Jashom Visual Theme Guide

## 🎨 Brand Color Palette

### Primary Colors

```
┌─────────────────────────────────────────┐
│  Primary Brand Color                    │
│  #0EA5E9 (Sky Blue)                     │
│  RGB: 14, 165, 233                      │
│  Use: Buttons, CTAs, Headings, Links    │
│  ████████████████████████████████       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Secondary Accent                       │
│  #06B6D4 (Cyan)                         │
│  RGB: 6, 182, 212                       │
│  Use: Gradients, Hover States           │
│  ████████████████████████████████       │
└─────────────────────────────────────────┘
```

### Background Colors

```
┌─────────────────────────────────────────┐
│  Primary Background                     │
│  #0B0F14 (Deep Navy)                    │
│  Use: Main page background              │
│  ████████████████████████████████       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Secondary Background                   │
│  #111827 (Gray-900)                     │
│  Use: Sections, alternating backgrounds │
│  ████████████████████████████████       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Card Background                        │
│  rgba(255, 255, 255, 0.05)              │
│  Use: Cards, glassmorphism effects      │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░       │
└─────────────────────────────────────────┘
```

### Text Colors

```
┌─────────────────────────────────────────┐
│  Primary Text                           │
│  #FAFAFA (Near White)                   │
│  Use: Headings, important text          │
│  ████████████████████████████████       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Secondary Text                         │
│  #9CA3AF (Gray-400)                     │
│  Use: Body text, descriptions           │
│  ████████████████████████████████       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Muted Text                             │
│  #6B7280 (Gray-500)                     │
│  Use: Captions, metadata                │
│  ████████████████████████████████       │
└─────────────────────────────────────────┘
```

## 🔄 Before & After

### ❌ Before (Inconsistent)
```tsx
// Multiple cyan variations used
#00E5FF  // Contact page
#0EA5E9  // Home page
#00F5FF  // Some buttons
#00C2FF  // Other elements

// Result: Inconsistent brand appearance
```

### ✅ After (Consistent)
```tsx
// Single primary color everywhere
#0EA5E9  // All pages, all elements

// Result: Professional, cohesive brand
```

## 📐 Component Examples

### Button (Primary CTA)
```tsx
<button
  style={{
    background: '#0EA5E9',
    color: '#FFFFFF',
    padding: '12px 24px',
    borderRadius: '8px',
    boxShadow: '0 4px 14px rgba(14, 165, 233, 0.4)'
  }}
>
  Get Started
</button>
```

### Card with Glassmorphism
```tsx
<div
  style={{
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '24px'
  }}
>
  Card Content
</div>
```

### Heading with Accent
```tsx
<h2 style={{ color: '#FAFAFA' }}>
  Welcome to <span style={{ color: '#0EA5E9' }}>Jashom</span>
</h2>
```

### Input with Focus Glow
```tsx
<input
  style={{
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#FAFAFA',
    padding: '12px 16px',
    borderRadius: '8px'
  }}
  onFocus={(e) => {
    e.target.style.borderColor = 'rgba(14, 165, 233, 0.5)';
    e.target.style.boxShadow = '0 0 20px rgba(14, 165, 233, 0.4)';
  }}
/>
```

## 🎯 Usage Rules

### DO ✅
- Use `#0EA5E9` for all primary actions
- Use `#0B0F14` for main backgrounds
- Use `#FAFAFA` for primary text
- Use consistent rgba values for glows
- Import from `colors.ts` for new components

### DON'T ❌
- Don't use `#00E5FF` or other cyan variants
- Don't use pure black `#000000` for backgrounds
- Don't use pure white `#FFFFFF` for text
- Don't hardcode colors without checking colors.ts
- Don't mix different opacity values randomly

## 🌟 Special Effects

### Glow Effect (Primary)
```css
box-shadow: 0 0 20px rgba(14, 165, 233, 0.6);
```

### Glow Effect (Subtle)
```css
box-shadow: 0 0 15px rgba(14, 165, 233, 0.3);
```

### Card Shadow
```css
box-shadow: 0 8px 32px rgba(14, 165, 233, 0.15);
```

### Gradient (Primary)
```css
background: linear-gradient(135deg, #0EA5E9, #06B6D4);
```

### Border Glow
```css
border: 1px solid rgba(14, 165, 233, 0.3);
box-shadow: 0 0 20px rgba(14, 165, 233, 0.2);
```

## 📱 Responsive Considerations

All colors work consistently across:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1919px)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (320px - 767px)

## 🔮 Future Enhancements

### Dark/Light Mode Support
```tsx
// Future implementation
const theme = {
  dark: {
    primary: '#0EA5E9',
    background: '#0B0F14',
    text: '#FAFAFA'
  },
  light: {
    primary: '#0284C7',
    background: '#FFFFFF',
    text: '#1F2937'
  }
};
```

---

**Remember:** Consistency is key to a professional brand identity!
