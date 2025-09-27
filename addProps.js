// addProps.js
const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "src", "icons");
if (!fs.existsSync(iconsDir)) {
  console.error("Directory not found:", iconsDir);
  process.exit(1);
}

const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith(".tsx"));

files.forEach((file) => {
  const filePath = path.join(iconsDir, file);
  let content = fs.readFileSync(filePath, "utf8");

  // Create a one-time backup if it doesn't exist
  const bakPath = filePath + ".bak";
  if (!fs.existsSync(bakPath)) {
    fs.writeFileSync(bakPath, content, "utf8");
  }

  // Ensure we have the SVGProps import (add only if missing)
  if (!/import\s+type\s+\{\s*SVGProps\s*\}\s+from\s+['"]react['"]/.test(content)) {
    // place after first React import if present, otherwise add at top
    if (/import\s+\*\s+as\s+React\s+from\s+['"]react['"]/.test(content)) {
      content = content.replace(
        /import\s+\*\s+as\s+React\s+from\s+['"]react['"];?/,
        (m) => `${m}\nimport type { SVGProps } from "react";`
      );
    } else {
      content = `import type { SVGProps } from "react";\n` + content;
    }
  }

  // Replace the component signature safely (supports variations)
  // Matches: const Xxx = (props) => (   OR const Xxx = (props: SVGProps<...>) => (
  content = content.replace(
    /const\s+([A-Za-z0-9_]+)\s*=\s*\(\s*props(?:\s*:\s*SVGProps<SVGSVGElement>\s*)?\s*\)\s*=>\s*\(/,
    `const $1 = ({ size = 32, color = 'currentColor', ...props }: SVGProps<SVGSVGElement> & { size?: number; color?: string }) => (`
  );

  // Find the first opening <svg ...> tag (non-greedy)
  const svgOpenMatch = content.match(/<svg[\s\S]*?>/);
  if (!svgOpenMatch) {
    console.warn("No <svg> tag found in", file);
    fs.writeFileSync(filePath, content, "utf8");
    return;
  }
  const originalTag = svgOpenMatch[0];

  // Extract viewBox if present
  const vbMatch = originalTag.match(/viewBox=(["'])([^"']+)\1/);
  const viewBoxValue = vbMatch ? vbMatch[2] : "0 0 32 32";

  // Keep xmlns if present (and any aria-, role, className, id, data-*, preserve)
  // Build attrs by removing width/height/stroke/fill/{...props} and viewBox/xmlns (we'll re-add)
  let attrs = originalTag
    .replace(/^<svg/, "")
    .replace(/>$/, "")
    .trim();

  // remove width, height, stroke, fill attributes (handles various formats)
  attrs = attrs
    .replace(/\s*(width)\s*=\s*({[^}]*}|"[^"]*"|'[^']*')/gi, "")
    .replace(/\s*(height)\s*=\s*({[^}]*}|"[^"]*"|'[^']*')/gi, "")
    .replace(/\s*(stroke)\s*=\s*({[^}]*}|"[^"]*"|'[^']*')/gi, "")
    .replace(/\s*(fill)\s*=\s*({[^}]*}|"[^"]*"|'[^']*')/gi, "")
    .replace(/\{\s*\.\.\.props\s*\}/g, "") // remove existing spreads
    .replace(/\s*viewBox=(["'])(.*?)\1/gi, "") // remove viewBox (we will re-add)
    .replace(/\s*xmlns=(["'])(.*?)\1/gi, "") // remove xmlns (we will re-add)
    .trim();

  // Remove duplicate spaces
  attrs = attrs.replace(/\s{2,}/g, " ").trim();

  // Reconstruct a clean <svg ...> opening tag
  const xmlnsAttr = `xmlns="http://www.w3.org/2000/svg"`;
  const preservedAttrs = attrs ? attrs + " " : "";
  const newSvgTag = `<svg ${preservedAttrs}viewBox="${viewBoxValue}" xmlns="${xmlnsAttr}" width={size} height={size} stroke={color} {...props}>`;

  // Replace the original open tag with the new one
  content = content.replace(originalTag, newSvgTag);

  // Replace background path that draws the white square with a transparent rect
  content = content.replace(
    /<path[^>]*d=(["'])M0 0h32v32H0z\1[^>]*\/>/g,
    `<rect width="32" height="32" fill="none" />`
  );

  // Replace any hard-coded fill="..." (except "none" and "currentColor") -> fill={color}
  content = content.replace(/fill=(["'])(?!none|currentColor)([^"']*)\1/g, "fill={color}");
  // Also handle fill={'#fff'}-style
  content = content.replace(/fill=\{\s*["'](?!none|currentColor)([^"']*)["']\s*\}/g, "fill={color}");

  // Replace any hard-coded stroke="..." (except "none" and "currentColor") -> stroke={color}
  content = content.replace(/stroke=(["'])(?!none|currentColor)([^"']*)\1/g, "stroke={color}");
  content = content.replace(/stroke=\{\s*["'](?!none|currentColor)([^"']*)["']\s*\}/g, "stroke={color}");

  // Remove any leftover duplicate {...props} occurrences inside file (we already inject one)
  content = content.replace(/\{\s*\.\.\.props\s*\}/g, "");

  // Final cleanup: remove accidental duplicated whitespace in opening tag
  content = content.replace(/<svg\s+/g, "<svg ");

  // Write back
  fs.writeFileSync(filePath, content, "utf8");
  console.log("Processed:", file);
});

console.log("✅ Done. Backups (*.bak) created for originals.");
