const os = require("os");

const goodbye = require("./utils/goodbuy");
const showHelp = require("./utils/showHelp");
const logLocation = require("./utils/logLocation");

const upHandler = require("./handlers/location/upHandler");
const cdHandler = require("./handlers/location/cdHandler");
const lsHandler = require("./handlers/location/lsHandler");

const catHandler = require("./handlers/fs/catHandler");
const renameHandler = require("./handlers/fs/renameHandler");
const copyHandler = require("./handlers/fs/copyHandler");
const mvHandler = require("./handlers/fs/mvHandler");
const addHandler = require("./handlers/fs/addHandler");
const rmHandler = require("./handlers/fs/rmHandler");

const osHandler = require("./handlers/os/osHandler");

const hashHandler = require("./handlers/hash/hashHandler");

const decompressHandler = require("./handlers/zlib/decompressHandler");
const compressHandler = require("./handlers/zlib/compressHandler");

global.directory = os.homedir();

const userName = process.argv
  .find((argument) => argument.startsWith("--username="))
  ?.replace("--username=", "");

console.log(`[INFO]: Welcome to the File Manager, ${userName}!`);
logLocation();
console.log(
  `[INFO]: You should write --help if you want to know more about commands`
);

process.stdin.on("data", (chunk) => {
  const chunkStr = chunk.toString().trim();

  if (chunkStr === "up") {
    upHandler();
    logLocation();
    return;
  } else if (chunkStr.startsWith("cd")) {
    cdHandler(chunkStr);
    logLocation();
    return;
  } else if (chunkStr === "ls") {
    lsHandler();
    logLocation();
    return;
  } else if (chunkStr.startsWith("cat")) {
    catHandler(chunkStr);
    logLocation();
    return;
  } else if (chunkStr.startsWith("rename")) {
    renameHandler(chunkStr);
    logLocation();
    return;
  } else if (chunkStr.startsWith("copy")) {
    copyHandler(chunkStr);
    logLocation();
    return;
  } else if (chunkStr.startsWith("mv")) {
    mvHandler(chunkStr);
    logLocation();
    return;
  } else if (chunkStr.startsWith("add")) {
    addHandler(chunkStr);
    logLocation();
    return;
  } else if (chunkStr.startsWith("rm")) {
    rmHandler(chunkStr);
    logLocation();
    return;
  } else if (chunkStr.startsWith("os")) {
    osHandler(chunkStr);
    logLocation();
    return;
  } else if (chunkStr.startsWith("hash")) {
    hashHandler(chunkStr);
    logLocation();
    return;
  } else if (chunkStr.startsWith("compress")) {
    compressHandler(chunkStr);
    logLocation();
    return;
  } else if (chunkStr.startsWith("decompress")) {
    decompressHandler(chunkStr);
    logLocation();
    return;
  } else if (chunkStr === "--help") {
    logLocation();
    return showHelp();
  } else if (chunkStr === ".exit") {
    logLocation();
    return goodbye(userName);
  } else {
    logLocation();
    return console.error("[ERROR]: Invalid input");
  }
});

process.on("SIGINT", () => {
  goodbye(userName);
});
