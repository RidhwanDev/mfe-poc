const cracoModuleFederation = require("craco-module-federation");
export default {
  // mode: "development",
  // output: {
  //   uniqueName: "test-mfe",
  //   publicPath: "http://localhost:3000/",
  // },
  // devServer: {
  //   port: 3000,
  // },
  optimization: false,
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
