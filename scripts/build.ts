
import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const SVGS_DIR = path.join(__dirname, '../SVGs/Logos');
const ICONS_DIR = path.join(__dirname, '../src/icons');
const INDEX_FILE = path.join(__dirname, '../src/index.ts');

const VARIANTS = ['Regular', 'Fill', 'Duotone', 'OGs'] as const;

if (fs.existsSync(ICONS_DIR)) {
  fs.rmSync(ICONS_DIR, { recursive: true, force: true });
}
fs.mkdirSync(ICONS_DIR, { recursive: true });

function getIconNames() {
  const regularDir = path.join(SVGS_DIR, 'Regular');
  if (!fs.existsSync(regularDir)) return [];

  return fs.readdirSync(regularDir)
    .filter(file => file.endsWith('.svg'))
    .map(file => {
      // Remove "Regular.svg" suffix to get base name
      return file.replace('Regular.svg', '');
    });
}

function getSvgContent(iconName: string, variant: typeof VARIANTS[number]) {
  const variantFolder = variant;
  let suffix: string = variant;
  if (variant === 'OGs') suffix = 'OG';
  if (variant === 'Fill') suffix = 'Filled';

  const filePath = path.join(SVGS_DIR, variantFolder, `${iconName}${suffix}.svg`);

  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: Missing ${variant} variant for ${iconName}`);
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(content, { xmlMode: true });
  const $svg = $('svg');

  // Transform elements based on variant
  if (variant !== 'OGs') {
    $svg.find('*').each((_, el) => {
      const $el = $(el);
      if ($el.attr('fill') && $el.attr('fill') !== 'none') {
        $el.attr('fill', 'currentColor');
      }
      if ($el.attr('stroke') && $el.attr('stroke') !== 'none') {
        $el.attr('stroke', 'currentColor');
      }
    });
  }

  // Extract inner HTML
  const innerHtml = $svg.html() || '';
  return innerHtml;
}

function processContent(html: string) {
  // Reactify attributes
  return html
    .replace(/class=/g, 'className=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
    .replace(/stop-color=/g, 'stopColor=')
    .replace(/stop-opacity=/g, 'stopOpacity=')
    .replace(/clip-path=/g, 'clipPath=')
    .replace(/fill-opacity=/g, 'fillOpacity=')
    .replace(/stroke-opacity=/g, 'strokeOpacity=')
    .replace(/style="[^"]*"/g, '');
}

function generateComponent(iconName: string) {
  const regularContent = processContent(getSvgContent(iconName, 'Regular') || '');
  const fillContent = processContent(getSvgContent(iconName, 'Fill') || '');
  const duotoneContent = processContent(getSvgContent(iconName, 'Duotone') || '');
  const ogContent = processContent(getSvgContent(iconName, 'OGs') || '');

  if (!regularContent) {
    console.warn(`Skipping ${iconName} due to missing content`);
    return;
  }

  const componentContent = `import React, { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  variant?: 'regular' | 'fill' | 'duotone' | 'og';
}

const Regular = ({ size, color, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={color} {...props}>
    ${regularContent}
  </svg>
);

const Fill = ({ size, color, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={color} {...props}>
    ${fillContent}
  </svg>
);

const Duotone = ({ size, color, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={color} {...props}>
    ${duotoneContent}
  </svg>
);

const OG = ({ size, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    ${ogContent}
  </svg>
);

export const ${iconName} = ({ size = 48, color = '#333333', variant = 'regular', ...props }: IconProps) => {
  switch (variant) {
    case 'fill': return <Fill size={size} color={color} {...props} />;
    case 'duotone': return <Duotone size={size} color={color} {...props} />;
    case 'og': return <OG size={size} {...props} />;
    case 'regular':
    default: return <Regular size={size} color={color} {...props} />;
  }
};
`;

  fs.writeFileSync(path.join(ICONS_DIR, `${iconName}.tsx`), componentContent);
}

function main() {
  const icons = getIconNames();
  console.log(`Found ${icons.length} icons.`);

  const indexExports: string[] = [];

  icons.forEach(icon => {
    try {
      generateComponent(icon);
      indexExports.push(`export * from './icons/${icon}';`);
    } catch (e) {
      console.error(`Failed to process ${icon}:`, e);
    }
  });

  fs.writeFileSync(INDEX_FILE, indexExports.join('\n'));
  console.log('Build complete.');
}

main();
