const {src, dest} = require("gulp");

// Плагины
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin")

// Обработка HTML
const html = () => {
  return src("./src/html/*.html")
  .pipe(fileInclude())
  .pipe(htmlmin({
    collapseWhitespace: true //убрать символы пробела
  }))
  .pipe(dest("./public"));
};

// Задачи
exports.html = html;
