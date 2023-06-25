const upHandler = () => {
  if (global.directory === "/") {
    console.error("[ERROR]: You can't go upper then homedir");
  } else {
    let newDirectory = global.directory
      .split("/")
      .slice(0, directory.split("/").length - 1)
      .join("/");
    global.directory = newDirectory === "" ? "/" : newDirectory;
  }
};

module.exports = upHandler;
