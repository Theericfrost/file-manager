const path = require("path");
const fileTypeCheck = require("../../utils/fileTypeCheck");

const cdHandler = (chunkStr) => {
  const targetName = chunkStr.replace("cd", "").trim();
  const targetPath = path.resolve(global.directory, targetName);
  if (targetPath) {
    const isDirectory = fileTypeCheck(targetPath) === "directory";
    if (isDirectory) {
      global.directory = targetPath;
    } else {
      console.error("[ERROR]: Target should be global.directory");
    }
  } else {
    console.error("[ERROR]: Operation failed");
  }
};

module.exports = cdHandler;
