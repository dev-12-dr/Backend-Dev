const os = require("os");
const fs = require("fs");

setInterval(() => {
  fs.appendFileSync(
    "log.txt",
    `CPU: ${os.cpus()[0].model}, RAM: ${os.totalmem()}\n`
  );
}, 5000);
