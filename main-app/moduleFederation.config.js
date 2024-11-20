const { dependencies } = require("./package.json");
module.exports = {
name: "MainApp",
filename: "remoteEntry.js",
remotes: {
  LoginPage: "LoginPage@http://localhost:3001/remoteEntry.js",
  cartPage: "cartPage@http://localhost:3003/remoteEntry.js",
  productPage: "productPage@http://localhost:3002/remoteEntry.js",
},
exposes: {},
shared: {
    ...dependencies,
    react: {
      singleton: true,
      import: "react",
      shareScope: "default",
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    "react-router-dom":{
      singleton: true,
      requiredVersion: dependencies["react-router-dom"],
    }
  },
}
