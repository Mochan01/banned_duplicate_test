
const mix = require("laravel-mix");

mix.setResourceRoot("");
require("laravel-mix-ejs")

mix.ts("./script/index.ts", "./docs/js/")
.sass("./sass/index.scss", "./docs/css/")
.ejs("./template/index.ejs", "./docs/")
.copyDirectory('./img', './docs/img')
.options({
  processCssUrls: false
})
.autoload({
  "jquery": ['$', 'window.jQuery'],
})
.browserSync({
  files: "./**/*",
  server: "./docs/",
  proxy: false
});
