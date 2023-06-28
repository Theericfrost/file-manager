const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const fileTypeCheck = require("../../utils/fileTypeCheck");

const hashHandler = (chunkStr) => {
  const targetName = chunkStr.replace("hash", "").trim();
  const targetPath = path.resolve(global.directory, targetName);
  const isFile = fileTypeCheck(targetPath) === "file";

  if (isFile) {
    try {
      const stream = fs.createReadStream(targetPath);
      const hash = crypto.createHash("sha256");

      stream.on("data", function (data) {
        hash.update(data, "utf-8");
      });

      stream.on("end", function () {
        const hashValue = hash.digest("hex");
        console.log(`[INFO]: Operation hash was successful: ${hashValue}`);
      });
    } catch {
      console.error("[ERROR]: Operation failed");
    }
  } else {
    console.error("[ERROR]: Target should be file");
  }
};

module.exports = hashHandler;
