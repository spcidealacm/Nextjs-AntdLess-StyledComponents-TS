/** @type {import('next').NextConfig} */
const withAntdLess = require("next-plugin-antd-less");
const path = require('path')

module.exports = withAntdLess({
  reactStrictMode: true,
  lessVarsFilePath: "./styles/antd.less",
  webpack(config) {
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});