const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "src/icons");
const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith(".tsx"));

files.forEach((file) => {
  const filePath = path.join(iconsDir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // Add props: size, strokeColor, fillColor
  content = content.replace(
    /const (\w+) =.*\(/,
    `const $1 = ({ size = 32, strokeColor = 'black', fillColor = 'none', ...props }: SVGProps<SVGSVGElement> & { size?: number; strokeColor?: string; fillColor?: string }) => (`
  );

  // Fix <svg> tag
  content = content.replace(/<svg([^>]*)>/, (match, attrs) => {
    attrs = attrs
      .replace(/\s*width={?["']?.+?["']?}?/g, "")
      .replace(/\s*height={?["']?.+?["']?}?/g, "")
      .replace(/\s*stroke={?["']?.+?["']?}?/g, "")
      .replace(/\s*fill={?["']?.+?["']?}?/g, "")
      .replace(/\s*\.\.\.props/g, ""); // remove duplicates

    // Ensure viewBox is present
    if (!/viewBox=/.test(attrs)) {
      attrs += ' viewBox="0 0 32 32"';
    }

    return `<svg${attrs} width={size} height={size} stroke={strokeColor} fill={fillColor} {...props}>`;
  });

  // Replace hardcoded white fill with fillColor
  content = content.replace(/fill=["']#fff["']/g, "fill={fillColor}");

  // Replace hardcoded black stroke with strokeColor
  content = content.replace(/stroke=["']#000["']/g, "stroke={strokeColor}");

  // Ensure clipPath rects are transparent
  content = content.replace(
    /<path fill={fillColor} d="M0 0h32v32H0z" \/>/g,
    `<rect width="32" height="32" fill="none" />`
  );

  fs.writeFileSync(filePath, content, "utf-8");
});

console.log("✅ All icons updated with size, strokeColor, fillColor, and fixed viewBox");
