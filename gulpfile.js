const {src, dest} = require("gulp");

// Плагины
const fileInclude = require("gulp-file-include")

// Обработка HTML
const html = () => {
  return src("./src/html/*.html")
  .pipe(fileInclude())
  .pipe(dest("./public"));
};

// Задачи
exports.html = html;
