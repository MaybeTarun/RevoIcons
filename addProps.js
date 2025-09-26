const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'src/icons');
const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(iconsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Add props: size, strokeColor, fillColor
  content = content.replace(
    /const (\w+) = \((props: SVGProps<SVGSVGElement>)\)/,
    `const $1 = ({ size = 32, strokeColor = 'black', fillColor = 'none', ...props }: SVGProps<SVGSVGElement> & { size?: number; strokeColor?: string; fillColor?: string })`
  );

  // Replace the <svg ...> tag
  content = content.replace(
    /<svg([^>]*)>/,
    (match, attrs) => {
      // Remove any existing width, height, stroke, fill
      attrs = attrs
        .replace(/\s*width={?["']?\w+["']?}?/g, '')
        .replace(/\s*height={?["']?\w+["']?}?/g, '')
        .replace(/\s*stroke={?["']?\w+["']?}?/g, '')
        .replace(/\s*fill={?["']?\w+["']?}?/g, '');
      // Add new props
      return `<svg${attrs} width={size} height={size} stroke={strokeColor} fill={fillColor} {...props}>`;
    }
  );

  fs.writeFileSync(filePath, content, 'utf-8');
});

console.log('✅ Updated all icons with size, strokeColor, fillColor props');
