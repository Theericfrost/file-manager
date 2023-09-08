const goodbye = (userName) => {
  console.log(
    `[INFO]: Thank you for using File Manager, ${userName}, goodbye!`
  );
  process.exit();
};

module.exports = goodbye;
