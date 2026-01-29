const fs = require("fs");
const path = require("path");
const { Transform } = require("stream");

// file name from console
const inputFile = process.argv[2];

const inputFilePath = path.join(__dirname, inputFile);
const outputFilePath = path.join(__dirname, "output.txt");

// streams
const readStream = fs.createReadStream(inputFilePath);
const writeStream = fs.createWriteStream(outputFilePath);

// transform stream
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const transformedData = chunk.toString().toUpperCase();
    callback(null, transformedData);
  }
});

// pipe streams
readStream
  .pipe(upperCaseTransfor
  .pipe(writeStream);
