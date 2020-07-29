
const mix = require("laravel-mix");

mix.setResourceRoot("");
require("laravel-mix-ejs")

mix.ts("./script/index.ts", "./dist/js/")
.sass("./sass/index.scss", "./dist/css/")
.ejs("./ejs/index.ejs", "./dist/")
.autoload({
  "jquery": ['$', 'window.jQuery'],
})
.browserSync({
  files: "./**/*",
  server: "./dist/",
  proxy: false
});
