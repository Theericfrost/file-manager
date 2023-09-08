const path = require("path");
const fs = require("fs");
const fileTypeCheck = require("../../utils/fileTypeCheck");

const rmHandler = (chunkStr) => {
  const targetName = chunkStr.replace("rm", "").trim();
  const targetPath = path.resolve(global.directory, targetName);
  const isFile = fileTypeCheck(targetPath) === "file";

  if (isFile) {
    try {
      fs.unlinkSync(targetPath, "");
      console.log("[INFO]: Operation rm was successful");
    } catch {
      console.error("[ERROR]: Operation failed");
    }
  } else {
    console.error("[ERROR]: Target should be file");
  }
};

module.exports = rmHandler;
