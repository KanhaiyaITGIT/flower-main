import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("src/assets/optimized");

const jobs = [
  { src: "src/assets/hero.png", out: "hero-640.webp", size: 640, quality: 78 },
  { src: "src/assets/f3.png", out: "f3-320.webp", size: 320, quality: 76 },
  { src: "src/assets/baloons/b1.jpg", out: "b1-320.webp", size: 320, quality: 74 },
  { src: "src/assets/recepmarriage/bride2.jpg", out: "bride2-320.webp", size: 320, quality: 76 },
  { src: "src/assets/anniversory/anni1.jpg", out: "anni1-320.webp", size: 320, quality: 76 },
];

await mkdir(outDir, { recursive: true });

for (const job of jobs) {
  const target = path.join(outDir, job.out);
  await sharp(job.src)
    .rotate()
    .resize({
      width: job.size,
      height: job.size,
      fit: "cover",
      position: "center",
      withoutEnlargement: true,
    })
    .webp({ quality: job.quality, effort: 6 })
    .toFile(target);
  console.log(`${job.src} -> ${path.relative(process.cwd(), target)}`);
}
