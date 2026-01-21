const fs = require("fs");
const path = require("path");

const source = "testing.txt";
const destination = "copied.txt";
const dirPath = path.join("folder1", "folder2", "folder3");


fs.writeFile(source, "this is new file", (err) => {
  if (err) {
    console.error("Error while creating file:", err);
    return;
  }
  console.log("File created successfully");

  
  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.error("Error while copying file:", err);
      return;
    }
    console.log("File copied successfully");

   
    fs.unlink(source, (err) => {
      if (err) {
        console.error("Error while deleting file:", err);
        return;
      }
      console.log("File deleted successfully");

      
      fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) {
          console.error("Error creating directory:", err);
          return;
        }
        console.log("Directory created successfully");

       
        fs.readdir(".", (err, files) => {
          if (err) {
            console.error("Error reading directory:", err);
            return;
          }
          console.log("Files in current directory:", files);
        });
      });
    });
  });
});
