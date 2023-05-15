const path = require("path");
const resolvePath = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  webpack: {
    alias: {
      "@": resolvePath("src"),
    },
  },
};

export {};
