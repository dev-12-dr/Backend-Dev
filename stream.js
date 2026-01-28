const fs = require("fs");
const path = require("path");


const fileName = process.argv[2];

if (!fileName) {
  console.log("node stream.js long-doc.txt");
  
  process.exit(1);
}

const inputFilePath = path.join(__dirname, fileName);

const readStream = fs.createReadStream(inputFilePath, {
  encoding: "utf8"
});

readStream.on("data", (chunk) => {
  console.log("📦 Received chunk:\n", chunk);
});

readStream.on("end", () => {
  console.log("✅ No more data to read.");
});

readStream.on("error", (err) => {
  console.error("❌ Error reading file:", err.message);
});
