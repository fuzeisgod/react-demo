/*
*   @file craco.config.js
*   @author Zixin Chen
*   基于 craco 的 create-react-app 定值化配置文件
*/
const CracoLessPlugin = require('craco-less');
const theme = require('./theme')
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: theme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  babel: {
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]]
  }
};