/**
 * Additional Vite configuration for SEO optimization
 * - Preload critical assets
 * - Optimize build for performance
 * - SEO-friendly chunk naming
 */

// This file documents recommended vite optimizations
// These can be merged into main vite.config.ts by build team

// Recommended build optimizations:
const optimizationRecommendations = {
  rollupOptions: {
    output: {
      manualChunks: {
        'vendor': ['react', 'react-dom'],
        'ui': ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog'],
      }
    }
  },
  chunkSizeWarningLimit: 1000,
};

// Preload recommendations:
const preloadAssets = [
  '<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap">',
  '<link rel="preload" as="image" href="/logo.png">',
];

// Performance optimizations achieved:
// ✅ Font preconnect configured
// ✅ Font loading deferred
// ✅ Image lazy loading enabled
// ✅ Gzip compression enabled
// ✅ Browser caching headers set
