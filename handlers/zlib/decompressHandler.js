const path = require("path");
const fs = require("fs");
const zlib = require("zlib");
const { pipeline } = require("stream");
const fileTypeCheck = require("../../utils/fileTypeCheck");

const decompressHandler = (chunkStr) => {
  const [targetName, newName] = chunkStr
    .replace("decompress", "")
    .trim()
    .split(" ");

  if (targetName && newName) {
    const targetPath = path.resolve(global.directory, targetName);
    const newPath = path.resolve(global.directory, newName);
    const isFile = fileTypeCheck(targetPath) === "file";

    if (isFile) {
      const readableStream = fs.createReadStream(targetPath);
      const writableStream = fs.createWriteStream(newPath);

      const brotliStream = zlib.createBrotliDecompress();

      pipeline(readableStream, brotliStream, writableStream, (err) => {
        if (err) {
          console.error("[ERROR]: Operation failed");
        } else {
          console.log("[INFO]: decompress complete!");
        }
      });
    } else {
      console.error("[ERROR]: Target should be file");
    }
  } else {
    console.error("[ERROR]: Operation failed");
  }
};

module.exports = decompressHandler;
