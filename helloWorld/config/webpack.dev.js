const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json").dependencies;

const devConfig = {
  mode: "development",
  output: {
    uniqueName: "hello-react-app-12345",
    publicPath: "http://localhost:8081/",
  },
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "helloReact1",
      filename: "remoteEntry.js",
      exposes: {
        "./HelloReactApp": "./src/bootstrap",
      },

      // shared: ["react"],
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
      //   // react: {
      //   //   eager: true,
      //   // },
      //   // },
      // },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
