const showHelp = () => {
  const commands = [
    {
      title: "up",
      description: "Go upper from current directory",
      usage: "up",
    },
    {
      title: "cd",
      description: "Go to dedicated folder from current directory",
      usage: "cd path_to_directory",
    },
    {
      title: "ls",
      description:
        "Print in console list of all files and folders in current directory",
      usage: "ls",
    },
    {
      title: "cat",
      description: "Read file and print it's content in console",
      usage: "cat path_to_file",
    },
    {
      title: "add",
      description: "Create empty file in current working directory",
      usage: "add new_file_name",
    },
    {
      title: "rn",
      description: "Rename file",
      usage: "rn path_to_file new_filename",
    },
    {
      title: "cp",
      description: "Copy file",
      usage: "cp path_to_file path_to_new_directory",
    },
    {
      title: "mv",
      description: "Move file",
      usage: "mv path_to_file path_to_new_directory",
    },
    { title: "rm", description: "Delete file", usage: "rm path_to_file" },
    {
      title: "os --EOL",
      description:
        "Get EOL (default system End-Of-Line) and print it to console",
      usage: "os --EOL",
    },
    {
      title: "os --cpus",
      description: "Get host machine CPUs info",
      usage: "os --cpus",
    },
    {
      title: "os --homedir",
      description: "Get home directory and print it to console",
      usage: "os --homedir",
    },
    {
      title: "os --username",
      description: "Get current system user name",
      usage: "os --username",
    },
    {
      title: "os --architecture",
      description:
        "Get CPU architecture for which Node.js binary has compiled and print it to console",
      usage: "os --architecture",
    },
    {
      title: "hash",
      description: "Calculate hash for file and print it into console",
      usage: "hash path_to_file",
    },
    {
      title: "compress",
      description: "Compress file ",
      usage: "compress path_to_file path_to_destination",
    },
    {
      title: "decompress",
      description: "Decompress file",
      usage: "decompress path_to_file path_to_destination",
    },
  ];
  console.table(commands);
};

module.exports = showHelp;
