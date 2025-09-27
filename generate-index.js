const fs = require("fs");
const path = require("path");

const iconsDirs = [
  { dir: path.join(__dirname, "src/icons"), folderName: "icons" },
  { dir: path.join(__dirname, "src/iconsfilled"), folderName: "iconsfilled" }
];

const outputFile = path.join(__dirname, "src/index.ts");

// Convert filenames to PascalCase for React component names
const toPascalCase = (str) =>
  str.replace(/(^\w|[-_](\w))/g, (_, c1, c2) => (c1 || c2).toUpperCase());

let exportLines = [];

iconsDirs.forEach(({ dir, folderName }) => {
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx") || f.endsWith(".js"));
  
  files.forEach((f) => {
    const name = toPascalCase(path.basename(f, path.extname(f)));
    const fileNameWithoutExt = path.basename(f, path.extname(f));
    exportLines.push(`export { default as ${name} } from "./${folderName}/${fileNameWithoutExt}";`);
  });
});

fs.writeFileSync(outputFile, exportLines.join("\n"));
console.log("✅ src/index.ts generated with all icons (normal + filled)");
