const fs = require("fs");
const path = require("path");

// file name from console
const inputFile = process.argv[2];

const inputFilePath = path.join(__dirname, inputFile);
const outputFilePath = path.join(__dirname, "output.txt");

const readStream = fs.createReadStream(inputFilePath, {
  encoding: "utf8"
});

const writeStream = fs.createWriteStream(outputFilePath, {
  encoding: "utf8"
});

readStream.on("data", (chunk) => {
  console.log("📦 Received chunk");
  writeStream.write(chunk);
});

readStream.on("end", () => {
  console.log("✅ Data copied to output.txt");
  writeStream.end();
});

readStream.on("error", (err) => {
  console.error("❌ Read error:", err.message);
});

writeStream.on("error", (err) => {
  console.error("❌ Write error:", err.message);
});
