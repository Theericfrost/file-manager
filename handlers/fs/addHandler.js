const path = require("path");
const fs = require("fs");

const addHandler = (chunkStr) => {
  const targetName = chunkStr.replace("add", "").trim();
  const targetPath = path.resolve(global.directory, targetName);

  try {
    fs.writeFileSync(targetPath, "");
    console.log("[INFO]: Operation add was successful");
  } catch {
    console.error("[ERROR]: Operation failed");
  }
};

module.exports = addHandler;
