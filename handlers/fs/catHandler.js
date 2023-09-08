const path = require("path");
const fs = require("fs");
const fileTypeCheck = require("../../utils/fileTypeCheck");

const catHandler = (chunkStr) => {
  const targetName = chunkStr.replace("cat", "").trim();
  const targetPath = path.resolve(global.directory, targetName);
  const isFile = fileTypeCheck(targetPath) === "file";

  if (isFile) {
    const stream = fs.createReadStream(targetPath, "utf-8");
    stream.on("data", (chunk) => {
      console.log(chunk);
    });
    stream.on("error", () => {
      console.error("[ERROR]: Operation failed");
    });
    stream.on("end", () => {
      console.error("Operation cat was successful");
    });
  } else {
    console.error("[ERROR]: Target should be file");
  }
};

module.exports = catHandler;
