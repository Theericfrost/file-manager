const path = require("path");
const fs = require("fs");
const fileTypeCheck = require("../../utils/fileTypeCheck");
const { pipeline } = require("stream");

const mvHandler = (chunkStr) => {
  const [targetName, newName] = chunkStr.replace("mv", "").trim().split(" ");

  if (targetName && newName) {
    const targetPath = path.resolve(global.directory, targetName);
    const newPath = path.resolve(global.directory, newName);
    const isFile = fileTypeCheck(targetPath) === "file";

    if (isFile) {
      const readableStream = fs.createReadStream(targetPath, "utf-8");
      const writableStream = fs.createWriteStream(newPath, "utf-8");

      pipeline(readableStream, writableStream, (err) => {
        if (err) {
          console.error("[ERROR]: Operation failed");
        } else {
          try {
            fs.unlinkSync(targetPath);
            console.log("[INFO]: Operation mv was successful");
          } catch {
            console.error("[ERROR]: Operation failed");
          }
        }
      });
    } else {
      console.error("[ERROR]: Target should be file");
    }
  } else {
    console.error("[ERROR]: Operation failed");
  }
};

module.exports = mvHandler;
