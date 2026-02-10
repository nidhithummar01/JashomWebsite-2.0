# Image Optimization Guide

## Current Issues & Solutions

### 1. Double Extension Problem (.jpg.jpg)
**Issue**: All images in `public/images/` have double `.jpg.jpg` extensions
**Impact**: Incorrect MIME types, potential loading failures
**Priority**: 🔴 CRITICAL

**Files Affected:**
```
public/images/cuda-cost.jpg.jpg
public/images/cuda-cta-bg.jpg.jpg
public/images/cuda-experience.jpg.jpg
public/images/cuda-nda.jpg.jpg
public/images/cuda-onboarding.jpg.jpg
public/images/cuda-quality-code.jpg.jpg
public/images/cuda-verified.jpg.jpg
public/images/industry-services.jpg.jpg (replaced with industry-services.png)
public/images/service-hero-bg.jpg.jpg
```

**Solution:**
```bash
# Windows PowerShell
cd public/images
Get-ChildItem -Filter "*.jpg.jpg" | Rename-Item -NewName { $_.Name -replace '\.jpg\.jpg$', '.jpg' }
```

### 2. Convert to WebP Format
**Why**: WebP provides 25-35% better compression than JPEG
**Impact**: 30-50% faster page loads
**Priority**: 🔴 HIGH

**Tools:**
- Online: https://squoosh.app/
- CLI: `cwebp` (Google's WebP converter)
- Batch: Use Sharp (Node.js library)

**Recommended Script:**
```javascript
// install: npm install sharp
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images';
const outputDir = './public/images/webp';

fs.mkdirSync(outputDir, { recursive: true });

fs.readdirSync(inputDir).forEach(file => {
  if (file.endsWith('.jpg') || file.endsWith('.png')) {
    sharp(path.join(inputDir, file))
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, file.replace(/\.(jpg|png)$/, '.webp')))
      .then(() => console.log(`Converted: ${file}`))
      .catch(err => console.error(`Error: ${file}`, err));
  }
});
```

### 3. Implement Lazy Loading
**Why**: Load images only when they enter viewport
**Impact**: 40-60% faster initial page load
**Priority**: 🟡 MEDIUM

**Implementation:**
```typescript
// Create LazyImage component
import { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export function LazyImage({ src, alt, className, style }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isInView ? src : undefined}
      alt={alt}
      className={className}
      style={style}
      onLoad={() => setIsLoaded(true)}
      loading="lazy"
    />
  );
}
```

**Usage:**
```typescript
// Replace:
<img src="/images/cuda-cost.jpg" alt="Cost Effective" />

// With:
<LazyImage src="/images/cuda-cost.webp" alt="Cost Effective" />
```

### 4. Responsive Images
**Why**: Serve appropriate image sizes for different devices
**Impact**: 50-70% bandwidth savings on mobile
**Priority**: 🟡 MEDIUM

**Implementation:**
```typescript
<picture>
  <source
    media="(max-width: 640px)"
    srcSet="/images/hero-mobile.webp"
    type="image/webp"
  />
  <source
    media="(max-width: 1024px)"
    srcSet="/images/hero-tablet.webp"
    type="image/webp"
  />
  <source
    srcSet="/images/hero-desktop.webp"
    type="image/webp"
  />
  <img
    src="/images/hero-desktop.jpg"
    alt="Hero"
    loading="lazy"
  />
</picture>
```

### 5. Add Width & Height Attributes
**Why**: Prevents Cumulative Layout Shift (CLS)
**Impact**: Better Core Web Vitals scores
**Priority**: 🟢 LOW

**Implementation:**
```typescript
<img
  src="/images/cuda-cost.webp"
  alt="Cost Effective"
  width="400"
  height="300"
  loading="lazy"
/>
```

## Implementation Checklist

### Phase 1: Critical Fixes (Do First)
- [ ] Rename all .jpg.jpg files to .jpg
- [ ] Convert all images to WebP format
- [ ] Update all image references in components
- [ ] Test all pages for broken images

### Phase 2: Performance Enhancements
- [ ] Create LazyImage component
- [ ] Replace all `<img>` tags with `<LazyImage>`
- [ ] Add loading="lazy" attribute
- [ ] Implement responsive images for hero sections

### Phase 3: Optimization
- [ ] Add width/height to all images
- [ ] Compress images further (target: <100KB each)
- [ ] Consider CDN for image delivery
- [ ] Set up image optimization in CI/CD

## Expected Results

### Before Optimization:
- Total image size: ~5-8 MB
- Initial page load: 3-5 seconds
- Lighthouse Performance: 60-70

### After Optimization:
- Total image size: ~2-3 MB (60% reduction)
- Initial page load: 1-2 seconds (50% faster)
- Lighthouse Performance: 85-95

## Files to Update

### Components with Images:
1. `src/components/HireCudaDeveloperPage.tsx`
   - cuda-quality-code.jpg.jpg → cuda-quality-code.webp
   - cuda-nda.jpg.jpg → cuda-nda.webp
   - cuda-verified.jpg.jpg → cuda-verified.webp
   - cuda-cost.jpg.jpg → cuda-cost.webp
   - cuda-experience.jpg.jpg → cuda-experience.webp
   - cuda-onboarding.jpg.jpg → cuda-onboarding.webp
   - cuda-cta-bg.jpg.jpg → cuda-cta-bg.webp

2. `src/components/GPUOptimizationServicePage.tsx`
   - service-hero-bg.jpg.jpg → service-hero-bg.webp
   - industry-services.jpg ✅ (updated with new image)

3. `src/components/HomePage.tsx`
   - /videos/bg.mp4 (already optimized)
   - Partner logos (already optimized)

4. `src/components/Footer.tsx`
   - jashom-logo-header-70px.png (consider WebP)

## Automation Script

Create `scripts/optimize-images.js`:
```javascript
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
  const imagesDir = './public/images';
  const files = await fs.readdir(imagesDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);
      
      console.log(`✓ Optimized: ${file} → ${path.basename(outputPath)}`);
    }
  }
}

optimizeImages().catch(console.error);
```

Run with:
```bash
npm install sharp
node scripts/optimize-images.js
```

## Performance Monitoring

After implementation, monitor:
- Lighthouse scores (target: 90+)
- Core Web Vitals (LCP < 2.5s, CLS < 0.1)
- Total page weight (target: < 2 MB)
- Image load times (target: < 500ms)

## Additional Resources

- [WebP Converter](https://squoosh.app/)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [Lazy Loading Guide](https://web.dev/lazy-loading-images/)
- [Responsive Images](https://web.dev/responsive-images/)
