# RevoIcons

A simple icon library for HTML - Use icons as custom HTML elements with JSON-based metadata and search functionality.

## Installation

### Via npm
```bash
npm install revoicons
```

### Via CDN
```html
<script src="https://unpkg.com/revoicons@1.0.0/index.js"></script>
```

## Usage

### HTML Custom Elements
Simply use the icons as HTML custom elements:

```html
<revo-heart></revo-heart>
<revo-star></revo-star>
```

### JavaScript API
```javascript
// Search icons by keywords
const heartIcons = RevoIcons.searchIcons('love');
console.log(heartIcons); // Returns array of matching icons

// Get all icons
const allIcons = RevoIcons.getAllIcons();
console.log(allIcons); // Returns array of all icons with metadata

// Get specific icon
const heartIcon = RevoIcons.getIcon('heart');
console.log(heartIcon); // Returns icon object with title, keywords, svg

// Access icon metadata
console.log(RevoIcons.iconMetadata); // Object with all icon metadata
```

## Attributes

- `size` - Sets both width and height (default: 24)
- `width` - Sets width specifically
- `height` - Sets height specifically  
- `color` - Sets the fill color (default: currentColor)

## Examples

```html
<!-- Basic usage -->
<revo-heart></revo-heart>
<revo-star></revo-star>

<!-- Different sizes -->
<revo-heart size="16"></revo-heart>
<revo-heart size="32"></revo-heart>
<revo-heart size="48"></revo-heart>

<!-- Different colors -->
<revo-star color="red"></revo-star>
<revo-star color="blue"></revo-star>
<revo-star color="#ff6b35"></revo-star>

<!-- Custom dimensions -->
<revo-heart width="20" height="30"></revo-heart>
```

## Icon Structure

Each icon is defined in a JSON file with the following structure:

```json
{
  "slug": "heart",
  "title": "Heart",
  "svg": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\"><path d=\"...\"/></svg>",
  "keywords": ["heart", "love", "favorite", "like", "emotion", "romance", "valentine", "affection"]
}
```

## Available Icons

- `revo-heart` - Heart icon (keywords: heart, love, favorite, like, emotion, romance, valentine, affection)
- `revo-star` - Star icon (keywords: star, rating, favorite, quality, excellent, outstanding, review, score, grade)

## Search Functionality

The library includes powerful search functionality that searches through:
- Icon titles
- Icon slugs
- Keywords

```javascript
// Search examples
RevoIcons.searchIcons('love');     // Finds heart icon
RevoIcons.searchIcons('rating');   // Finds star icon
RevoIcons.searchIcons('favorite'); // Finds both heart and star icons
```

## Browser Support

This library uses Web Components (Custom Elements) and requires modern browsers that support:
- Custom Elements v1
- Shadow DOM

## License

ISC