const os = require("os");

const osHandler = (chunkStr) => {
  const targetName = chunkStr.replace("os --", "").trim();
  switch (targetName) {
    case "EOL":
      console.log(`${JSON.stringify(os.EOL)}`);
      break;
    case "cpus":
      console.log(os.cpus());
      break;
    case "homedir":
      console.log(os.homedir());
      break;
    case "username":
      console.log(os.userInfo().username);
      break;
    case "architecture":
      console.log(os.arch());
      break;
  }
};

module.exports = osHandler;
