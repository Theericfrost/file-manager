const path = require("path");
const fs = require("fs");
const zlib = require("zlib");
const { pipeline } = require("stream");
const fileTypeCheck = require("../../utils/fileTypeCheck");

const compressHandler = (chunkStr) => {
  const [targetName, newName] = chunkStr
    .replace("compress", "")
    .trim()
    .split(" ");

  if (targetName && newName) {
    const targetPath = path.resolve(global.directory, targetName);
    const newPath = path.resolve(global.directory, newName);
    const isFile = fileTypeCheck(targetPath) === "file";

    if (isFile) {
      const readableStream = fs.createReadStream(targetPath);
      const writableStream = fs.createWriteStream(newPath);

      const brotliStream = zlib.createBrotliCompress({
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 1,
        },
      });

      pipeline(readableStream, brotliStream, writableStream, (err) => {
        if (err) {
          console.error("[ERROR]: Operation failed");
        } else {
          console.log("[INFO]: Compression complete!");
        }
      });
    } else {
      console.error("[ERROR]: Target should be file");
    }
  } else {
    console.error("[ERROR]: Operation failed");
  }
};

module.exports = compressHandler;
