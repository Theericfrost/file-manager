const fs = require("fs");
const path = require("path");
const fileTypeCheck = require("../../utils/fileTypeCheck");

const lsHandler = () => {
  try {
    let files = fs.readdirSync(global.directory);
    files = files.map((file) => ({
      fileName: file,
      type: fileTypeCheck(path.resolve(global.directory, file)),
    }));
    console.table(files);
  } catch (e) {
    console.error("[ERROR]: Operation failed");
  }
};

module.exports = lsHandler;
