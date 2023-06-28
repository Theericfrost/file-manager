const path = require("path");
const fs = require("fs");
const fileTypeCheck = require("../../utils/fileTypeCheck");

const renameHandler = (chunkStr) => {
  const [targetName, newName] = chunkStr
    .replace("rename", "")
    .trim()
    .split(" ");

  if (targetName && newName) {
    const targetPath = path.resolve(global.directory, targetName);
    const newPath = path.resolve(global.directory, newName);
    const isFile = fileTypeCheck(targetPath) === "file";

    if (isFile) {
      try {
        fs.renameSync(targetPath, newPath);
        console.log("[INFO]: Operation rename was successful");
      } catch {
        console.error("[ERROR]: Operation failed");
      }
    } else {
      console.error("[ERROR]: Target should be file");
    }
  } else {
    console.error("[ERROR]: Operation failed");
  }
};

module.exports = renameHandler;
