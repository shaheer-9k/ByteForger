/**
 * SEO Helper Functions
 * Manages page-specific SEO meta tags and structured data
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export function updatePageSEO(config: SEOConfig) {
  // Update title
  document.title = config.title;
  
  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', config.description);
  
  // Update or create meta keywords
  if (config.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', config.keywords);
  }
  
  // Update canonical
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', config.canonical || window.location.href);
  
  // Update Open Graph
  updateOpenGraphTag('og:title', config.title);
  updateOpenGraphTag('og:description', config.description);
  if (config.ogImage) {
    updateOpenGraphTag('og:image', config.ogImage);
  }
  if (config.ogType) {
    updateOpenGraphTag('og:type', config.ogType);
  }
  
  // Update Twitter Card
  updateOpenGraphTag('twitter:title', config.title);
  updateOpenGraphTag('twitter:description', config.description);
  if (config.ogImage) {
    updateOpenGraphTag('twitter:image', config.ogImage);
  }
}

function updateOpenGraphTag(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

// Page-specific SEO configurations
export const pageConfigs = {
  home: {
    title: 'ByteForger | Enterprise Software Solutions & Digital Transformation',
    description: 'Transform your business with enterprise-grade software solutions. We deliver high-impact technology consulting, full-stack development, and cloud architecture.',
    keywords: 'software development, cloud solutions, full-stack development, digital transformation, enterprise software, technology consulting',
    ogType: 'website',
  },
  services: {
    title: 'Our Services | ByteForger - Software Development & Cloud Architecture',
    description: 'Comprehensive digital solutions including full-stack development, cloud infrastructure, AI integration, mobile apps, and software testing. Enterprise-grade quality.',
    keywords: 'web development, cloud solutions, mobile development, AI integration, software testing, DevOps, data analytics',
    ogType: 'website',
  },
  about: {
    title: 'About ByteForger | Enterprise Software Development Team',
    description: 'Learn about ByteForger Solutions - a remote-first software engineering firm delivering high-impact technology solutions for startups and enterprises.',
    keywords: 'about byteforger, software company, technology consulting, software development team',
    ogType: 'website',
  },
  contact: {
    title: 'Contact ByteForger | Get in Touch for Your Next Project',
    description: 'Ready to transform your ideas into reality? Contact ByteForger today. We respond within 24 hours. Expert software development and consultation services.',
    keywords: 'contact byteforger, software development inquiry, project consultation, technology services',
    ogType: 'website',
  },
};
