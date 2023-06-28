const path = require("path");
const fs = require("fs");
const fileTypeCheck = require("../../utils/fileTypeCheck");
const { pipeline } = require("stream");

const copyHandler = (chunkStr) => {
  const [targetName, newName] = chunkStr.replace("copy", "").trim().split(" ");

  if (targetName && newName) {
    const targetPath = path.resolve(global.directory, targetName);
    const newPath = path.resolve(global.directory, newName);
    const isFile = fileTypeCheck(targetPath) === "file";

    if (isFile) {
      const readableStream = fs.createReadStream(targetPath);
      const writableStream = fs.createWriteStream(newPath);

      pipeline(readableStream, writableStream, (err) => {
        if (err) {
          console.error("[ERROR]: Operation failed");
        } else {
          console.log("[INFO]: Operation copy was successful");
        }
      });
    } else {
      console.error("[ERROR]: Target should be file");
    }
  } else {
    console.error("[ERROR]: Operation failed");
  }
};

module.exports = copyHandler;
