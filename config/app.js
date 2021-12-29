module.exports = {
  htmlmin: {
    collapseWhitespace: true, //убрать символы пробела минимилизация html
  },

  pug: {
    pretty: true, //СЖАТИЕ
    data: {
      news: require("../data/new.json"),
    },
  },
};