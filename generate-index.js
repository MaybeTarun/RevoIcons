const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "src/icons");
const files = fs.readdirSync(iconsDir);

const exportLines = files
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => {
    const name = path.basename(f, ".tsx");
    return `export { default as ${name} } from "./icons/${name}";`;
  })
  .join("\n");

fs.writeFileSync(path.join(__dirname, "src/index.ts"), exportLines);
