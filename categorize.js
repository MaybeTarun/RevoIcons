const fs = require("fs");
const path = require("path");

// React icons folders
const tsxDir = path.join(__dirname, "src/icons");
const tsxFilledDir = path.join(__dirname, "src/iconsfilled");

// Raw SVG icons folders
const svgDir = path.join(__dirname, "icons");
const svgFilledDir = path.join(__dirname, "iconsfilled");

[tsxFilledDir, svgFilledDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

function moveFilledFiles(fromDir, toDir, ext) {
  const files = fs.readdirSync(fromDir).filter((f) => f.endsWith(ext));

  files.forEach((file) => {
    if (file.endsWith(`Filled${ext}`)) {
      const oldPath = path.join(fromDir, file);
      const newPath = path.join(toDir, file);

      fs.renameSync(oldPath, newPath);
    }
  });
}

moveFilledFiles(tsxDir, tsxFilledDir, ".tsx");
moveFilledFiles(svgDir, svgFilledDir, ".svg");

