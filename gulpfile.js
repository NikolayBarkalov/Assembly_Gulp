const { series, parallel } = require('gulp');
 
function clean(cb) {
	// тело функции
	cb();
}
 
function cssTranspile(cb) {
	// тело функции
	cb();
}
 
function cssMinify(cb) {
	// тело функции
	cb();
}
 
function jsTranspile(cb) {
	// тело функции
	cb();
}
 
function jsBundle(cb) {
	// тело функции
	cb();
}
 
function jsMinify(cb) {
	// тело функции
	cb();
}
 
function publish(cb) {
	// тело функции
	cb();
}
 
exports.build = series(
	clean,
	parallel(
		cssTranspile,
		series(jsTranspile, jsBundle)
	),
	parallel(cssMinify, jsMinify),
	publish
);