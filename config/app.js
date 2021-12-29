const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd, //убрать символы пробела минимилизация html
  },

  pug: {
    pretty: isDev, //СЖАТИЕ
    data: {
      news: require("../data/new.json"),
    },
  },

  webpack: {
    mode: isProd ? "production" : "development" 
  },

  imagemin: {
    verbose: true, //verbose: true & false показать размер сжатия
  },

  fonter: {
    formats: ["ttf", "woff", "eot", "svg"],
  },
};
