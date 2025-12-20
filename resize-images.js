import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = path.resolve("public/images");
const outputDir = path.resolve("public/images-16x9");

// Target output size (16:9)
const WIDTH = 960;
const HEIGHT = 540;

// Output quality (smaller file, still looks good)
const JPEG_QUALITY = 82;

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

async function run() {
  for (const file of files) {
    // Skip non-images
    if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;

    const inputPath = path.join(inputDir, file);

    // Keep the same filename, but output as .jpg for consistency
    const baseName = file.replace(/\.(jpg|jpeg|png)$/i, "");
    const outputPath = path.join(outputDir, `${baseName}.jpg`);

    try {
      await sharp(inputPath)
        .resize(WIDTH, HEIGHT, {
          fit: "cover", // crops to fill 16:9
          position: "center", // crop from center
        })
        .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
        .toFile(outputPath);

      console.log(`✅ ${file} -> ${baseName}.jpg`);
    } catch (err) {
      console.error(`❌ Failed on ${file}:`, err.message);
    }
  }
}

run();
