const fs = require("fs");
const path = require("path");

// React icons folders
const tsxDir = path.join(__dirname, "src/icons");
const tsxFilledDir = path.join(__dirname, "src/iconsfilled");

// Raw SVG icons folders
const svgDir = path.join(__dirname, "icons");
const svgFilledDir = path.join(__dirname, "iconsfilled");

// Ensure target folders exist
[tsxFilledDir, svgFilledDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Helper function to move files
function moveFilledFiles(fromDir, toDir, ext) {
  const files = fs.readdirSync(fromDir).filter((f) => f.endsWith(ext));

  files.forEach((file) => {
    if (file.endsWith(`Filled${ext}`)) {
      const oldPath = path.join(fromDir, file);
      const newPath = path.join(toDir, file);

      fs.renameSync(oldPath, newPath);
      console.log(`✅ Moved: ${file} → ${path.basename(toDir)}`);
    }
  });
}

// Process both types
moveFilledFiles(tsxDir, tsxFilledDir, ".tsx");
moveFilledFiles(svgDir, svgFilledDir, ".svg");

console.log("🎉 Done categorizing .tsx and .svg icons!");
