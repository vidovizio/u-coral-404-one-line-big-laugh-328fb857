const entry = "Clean code: 10% logic, 90% debat 'userData' vs 'userInfo' vs 'userPayload' — 53 komentar PR, merge: 'data'.";

const fs = require("node:fs");
const path = require("node:path");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? path.resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : path.join(__dirname, "output");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, "entry.txt");
fs.writeFileSync(outputPath, entry, "utf-8");