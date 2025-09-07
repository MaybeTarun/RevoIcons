/**
 * RevoIcons - A simple icon library for HTML
 * Usage: <revo-heart></revo-heart> or <revo-star></revo-star>
 */

// Icon data structure
let icons = {};
let iconMetadata = {};

// Load icons from JSON files (for Node.js environments)
function loadIconsFromJSON() {
  if (typeof require !== 'undefined') {
    try {
      const fs = require('fs');
      const path = require('path');
      const iconsDir = path.join(__dirname, 'icons');
      
      if (fs.existsSync(iconsDir)) {
        const files = fs.readdirSync(iconsDir).filter(file => file.endsWith('.json'));
        
        files.forEach(file => {
          const iconData = JSON.parse(fs.readFileSync(path.join(iconsDir, file), 'utf8'));
          icons[iconData.slug] = iconData.svg;
          iconMetadata[iconData.slug] = {
            title: iconData.title,
            keywords: iconData.keywords
          };
        });
      }
    } catch (error) {
      console.warn('Could not load icons from JSON files:', error.message);
    }
  }
}

// Fallback icons (for browser environments or if JSON loading fails)
const fallbackIcons = {
  heart: `<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>`,
  
  star: `<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>`
};

// Initialize icons
loadIconsFromJSON();

// Use fallback if no icons loaded
if (Object.keys(icons).length === 0) {
  icons = fallbackIcons;
  iconMetadata = {
    heart: { title: "Heart", keywords: ["heart", "love", "favorite", "like", "emotion"] },
    star: { title: "Star", keywords: ["star", "rating", "favorite", "quality", "excellent"] }
  };
}

// Custom element class for icons (browser only)
let RevoIcon = null;

if (typeof HTMLElement !== 'undefined') {
  RevoIcon = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      const iconName = this.tagName.toLowerCase().replace('revo-', '');
      const iconSvg = icons[iconName];
      
      if (iconSvg) {
        // Get attributes
        const size = this.getAttribute('size') || '24';
        const color = this.getAttribute('color') || 'currentColor';
        const width = this.getAttribute('width') || size;
        const height = this.getAttribute('height') || size;
        
        // Create the SVG with attributes
        const svg = iconSvg
          .replace('width="24"', `width="${width}"`)
          .replace('height="24"', `height="${height}"`)
          .replace('fill="currentColor"', `fill="${color}"`);
        
        // Add styles
        const styles = `
          <style>
            :host {
              display: inline-block;
              line-height: 0;
            }
            svg {
              display: block;
              width: ${width}px;
              height: ${height}px;
            }
          </style>
        `;
        
        this.shadowRoot.innerHTML = styles + svg;
      } else {
        console.warn(`Icon '${iconName}' not found in RevoIcons`);
      }
    }
  };

  // Register all icon custom elements (browser only)
  if (typeof customElements !== 'undefined') {
    Object.keys(icons).forEach(iconName => {
      const tagName = `revo-${iconName}`;
      customElements.define(tagName, RevoIcon);
    });
  }
}

// Search functionality
function searchIcons(query) {
  const searchTerm = query.toLowerCase();
  const results = [];
  
  Object.keys(iconMetadata).forEach(slug => {
    const metadata = iconMetadata[slug];
    const searchableText = [
      metadata.title,
      slug,
      ...metadata.keywords
    ].join(' ').toLowerCase();
    
    if (searchableText.includes(searchTerm)) {
      results.push({
        slug,
        title: metadata.title,
        keywords: metadata.keywords,
        svg: icons[slug]
      });
    }
  });
  
  return results;
}

// Get all icons with metadata
function getAllIcons() {
  return Object.keys(iconMetadata).map(slug => ({
    slug,
    title: iconMetadata[slug].title,
    keywords: iconMetadata[slug].keywords,
    svg: icons[slug]
  }));
}

// Get icon by slug
function getIcon(slug) {
  if (icons[slug]) {
    return {
      slug,
      title: iconMetadata[slug]?.title || slug,
      keywords: iconMetadata[slug]?.keywords || [],
      svg: icons[slug]
    };
  }
  return null;
}

// React component factory
function createRevoIcon(slug) {
  return function RevoIconComponent({ size = 24, color = 'currentColor', width, height, ...props }) {
    const icon = icons[slug];
    if (!icon) return null;
    
    const finalWidth = width || size;
    const finalHeight = height || size;
    
    const svg = icon
      .replace('width="24"', `width="${finalWidth}"`)
      .replace('height="24"', `height="${finalHeight}"`)
      .replace('fill="currentColor"', `fill="${color}"`);
    
    return { __html: svg };
  };
}

// Create React components for each icon
const ReactComponents = {};
Object.keys(icons).forEach(slug => {
  const ComponentName = `Revo${slug.charAt(0).toUpperCase() + slug.slice(1)}`;
  ReactComponents[ComponentName] = createRevoIcon(slug);
});

// Export for module usage (if using ES6 modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    icons, 
    RevoIcon, 
    searchIcons, 
    getAllIcons, 
    getIcon,
    iconMetadata,
    ...ReactComponents
  };
}

// Also make icons available globally for direct script inclusion
if (typeof window !== 'undefined') {
  window.RevoIcons = { 
    icons, 
    RevoIcon, 
    searchIcons, 
    getAllIcons, 
    getIcon,
    iconMetadata 
  };
}
