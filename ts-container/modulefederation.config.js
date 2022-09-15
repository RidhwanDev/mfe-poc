const deps = require("./package.json").dependencies;

module.exports = {
  name: "container",
  remotes: {
    helloReact: "helloReact1@http://localhost:8081/remoteEntry.js",
  },
};
