const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "src/icons");
const outputFile = path.join(__dirname, "src/index.ts");

const files = fs.readdirSync(iconsDir).filter(f => f.endsWith(".tsx") || f.endsWith(".js"));

// Convert filenames to PascalCase for React component names
const toPascalCase = str =>
  str
    .replace(/(^\w|[-_](\w))/g, (_, c1, c2) => (c1 || c2).toUpperCase());

const exportLines = files
  .map(f => {
    const name = toPascalCase(path.basename(f, path.extname(f)));
    const fileNameWithoutExt = path.basename(f, path.extname(f));
    return `export { default as ${name} } from "./icons/${fileNameWithoutExt}";`;
  })
  .join("\n");

fs.writeFileSync(outputFile, exportLines);
console.log("✅ src/index.ts generated with all icons");
