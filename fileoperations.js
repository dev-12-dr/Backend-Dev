const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file");
    return;
  }

  const wordCount = data.trim().split(/\s+/).length;
  fs.writeFile("output.txt", `Word Count: ${wordCount}`, (err) => {
    if (err) {
      console.error("Error writing file");
      return;
    }
    console.log("Word count written to output.txt");
  });
});
