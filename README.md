# RevoIcons

A simple React icon library - Use icons as React components

## Installation

\`\`\`bash
npm install revoicons
\`\`\`

## Usage

### Named Imports (Recommended)

\`\`\`jsx
import { Icon1, Icon2 } from 'revoicons';

function App() {
  return (
    <div>
      <Icon1 size={32} color="red" />
      <Icon2 size={24} color="blue" />
    </div>
  );
}
\`\`\`

### Default Import

\`\`\`jsx
import RevoIcons from 'revoicons';

function App() {
  return (
    <div>
      <RevoIcons.Icon1 size={32} />
      <RevoIcons.Icon2 size={24} />
    </div>
  );
}
\`\`\`

## Props

All icons accept the following props:

- `size`: Number or string (default: 24) - Sets both width and height
- `color`: String (default: 'currentColor') - Sets the stroke color
- All standard SVG props are also supported

## Available Icons

- `Icon1` - Heart icon
- `Icon2` - Star icon

## License

MIT © Tarun Gupta
