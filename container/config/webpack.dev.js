const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json").dependencies;

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        helloReact: "helloReact1@http://localhost:8081/remoteEntry.js",
        createAnalysis: "createAnalysis@http://localhost:8082/remoteEntry.js",
      },
      // shared: {
      //   ...deps,
      //   react: {
      //     singleton: true,
      //     eager: true,
      //     requiredVersion: deps["react"],
      //   },
      //   "react-dom": {
      //     singleton: true,
      //     eager: true,
      //     requiredVersion: deps["react-dom"],
      //   },
      //   "react-router-dom": {
      //     singleton: true,
      //     eager: true,
      //     requiredVersion: deps["react-router-dom"],
      //   },
      // },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
