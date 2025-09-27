const fs = require("fs");
const path = require("path");

function processNormalIcons(dir) {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"));

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, "utf-8");

    // Add props: size, color
    content = content.replace(
      /const (\w+) =.*\(/,
      `const $1 = ({ size = 32, color = 'currentColor', ...props }: SVGProps<SVGSVGElement> & { size?: number; color?: string }) => (`
    );

    // Fix <svg> tag
    content = content.replace(/<svg([^>]*)>/, (match, attrs) => {
      attrs = attrs
        .replace(/\s*width={?["']?.+?["']?}?/g, "")
        .replace(/\s*height={?["']?.+?["']?}?/g, "")
        .replace(/\s*stroke={?["']?.+?["']?}?/g, "")
        .replace(/\s*fill={?["']?.+?["']?}?/g, "")
        .replace(/\s*\.\.\.props/g, "");

      if (!/viewBox=/.test(attrs)) {
        attrs += ' viewBox="0 0 32 32"';
      }

      return `<svg${attrs} width={size} height={size} stroke={color} fill="none" {...props}>`;
    });

    // Replace all stroke colors with stroke={color}
    content = content.replace(/stroke=["'](#[0-9a-fA-F]+|currentColor)["']/g, "stroke={color}");

    // Force fill to none
    content = content.replace(/fill=["'](#[0-9a-fA-F]+|currentColor|none)["']/g, 'fill="none"');

    fs.writeFileSync(filePath, content, "utf-8");
  });

  console.log(`✅ Processed normal icons in ${dir}`);
}

function processFilledIcons(dir) {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"));

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, "utf-8");

    // Add props: size, color
    content = content.replace(
      /const (\w+) =.*\(/,
      `const $1 = ({ size = 32, color = 'currentColor', ...props }: SVGProps<SVGSVGElement> & { size?: number; color?: string }) => (`
    );

    // Fix <svg> tag
    content = content.replace(/<svg([^>]*)>/, (match, attrs) => {
      attrs = attrs
        .replace(/\s*width={?["']?.+?["']?}?/g, "")
        .replace(/\s*height={?["']?.+?["']?}?/g, "")
        .replace(/\s*stroke={?["']?.+?["']?}?/g, "")
        .replace(/\s*fill={?["']?.+?["']?}?/g, "")
        .replace(/\s*\.\.\.props/g, "");

      if (!/viewBox=/.test(attrs)) {
        attrs += ' viewBox="0 0 32 32"';
      }

      return `<svg${attrs} width={size} height={size} fill={color} {...props}>`;
    });

    // Replace all fills with fill={color}
    content = content.replace(/fill=["'](#[0-9a-fA-F]+|currentColor|none)["']/g, "fill={color}");

    // Leave strokes untouched

    fs.writeFileSync(filePath, content, "utf-8");
  });

  console.log(`✅ Processed filled icons in ${dir}`);
}

const iconsDir = path.join(__dirname, "src/icons");
const iconsFilledDir = path.join(__dirname, "src/iconsfilled");

processNormalIcons(iconsDir);
processFilledIcons(iconsFilledDir);
