const fs = require("fs");

const fileTypeCheck = (path) => {
  try {
    const stats = fs.statSync(path);

    return stats.isDirectory() ? "directory" : "file";
  } catch (e) {
    return "error";
  }
};

module.exports = fileTypeCheck;
