/* eslint-disable require-jsdoc */
/**
 * -----------------------------------------------------------------------------
 * 🧩 PLUGINS AND PATHS
 * -----------------------------------------------------------------------------
 */
// #region

// ☝️🧐 The combination of Jekyll built-in server + gulp watchers + Chrome Live
// Reload Extension is much more faster than the 'gulp only' process.
// And the first workflow allows us to use extension-free links.
// But for some reason, the watchFiles() does not work in the `serve` series.
// Therefore, I launch two processes in parallel: `npm start`.

// The last option: symlink, lastRun
import { src, dest, watch, series, parallel } from 'gulp';

// GENERAL
import browserSync from 'browser-sync';
import changed from 'gulp-changed';
import gulpif from 'gulp-if';

// Prevent pipe breaking caused by errors from gulp plugins
import plumber from 'gulp-plumber';
import size from 'gulp-size';
import sourcemaps from 'gulp-sourcemaps';
import yargs from 'yargs';

// JEKYLL & MARKUP
import shell from 'shelljs';

// STYLES
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'cssnano';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import uncss from 'postcss-uncss';

// SCRIPTS
import webpack from 'webpack-stream';

// IMAGES
import imagemin from 'gulp-imagemin';
import imageminGIF from 'imagemin-gifsicle';
import imageminJPG from 'imagemin-mozjpeg';
import imageminPNG from 'imagemin-pngquant';
import imageminSVG from 'imagemin-svgo';

// UTILITIES
const del = require('del');

const PRODUCTION = yargs.argv.p;
const sass = gulpSass(dartSass);
const server = browserSync.create();

// Paths
const root = {
  root: '.',
  src: './src',
  // It is better to stick to the system standards to avoid errors.
  tmp: './assets',
  dest: {
    site: './_site',
    assets: './_site/assets',
    build: './.publish',
  },
};

const paths = {
  css: {
    src: {
      main: `${root.src}/style.scss`,
    },
    watch: `${root.src}/**/*.scss`,
    tmp: `${root.src}/css`,
    dest: `${root.dest.assets}/css`,
  },

  jekyll: {
    watch: [
      `${root.base}/*.html`,
      `${root.base}/_config.yml`,
      `${root.base}/_data/*.yml`,
      `${root.base}/_includes/*.html`,
      `${root.base}/_layouts/*.html`,
      `${root.base}/_posts/*.*`,
      `${root.base}/**/*.md`,
    ],
  },

  js: {
    src: {
      main: `${root.src}/main.js`,
      vendor: `${root.src}/js/**/*.js`,
    },
    watch: [`${root.src}/**/*.js`],
    dest: `${root.dest.assets}/js`,
  },

  img: {
    src: {
      graphics: [
        `${root.src}/**/*.+(jpg|jpeg|png|svg|gif|webp)`,
        `!${root.src}/base/graphics/**/*`,
        `!${root.src}/img/**/*`,
      ],
      content: `${root.src}/img/**/*.+(jpg|jpeg|png|svg|gif|webp)`,
    },
    // Vars array in watchers breaks build process, so there is one var for a watcher
    watch: [
      `${root.src}/**/*.+(jpg|jpeg|png|svg|gif|webp)`,
      `!${root.src}/base/icons/sprite/**/*`,
    ],
    dest: `${root.dest.assets}/img`,
  },
};
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 🧪 JEKYLL
 * -----------------------------------------------------------------------------
 */
// #region

// eslint-disable Missing JSDoc comment.

// Error: no acceptor (port is in use or requires root privileges)'
// We need to stop the local server, see what processes are running
// on the 4000th port ...
// $ lsof -i tcp:4000
// And then terminate unnecessary processes by specifying the PID
// $ kill -9 <PID>

function jekyllBuild(done) {
  let command;

  if (PRODUCTION) {
    command = shell.exec('JEKYLL_ENV=production bundle exec jekyll build');
    done();
  }

  if (!PRODUCTION) {
    command = shell.exec('bundle exec jekyll build --config _config.yml');
    // command = child.spawn('bundle', ['exec', 'jekyll', 'build', '--config', '_config.yml,_config.dev.yml'], { stdio: 'inherit' });
    done();
  }
  return command;
}

function jekyllServe(done) {
  shell.exec(
    'bundle exec jekyll serve --incremental --watch --drafts --trace --config _config.yml'
  );
  done();
}
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 🎨 STYLES
 * -----------------------------------------------------------------------------
 */
// #region

// COMMON STYLES FUNCTION
function cssTasks(source, subtitle, destination, unCssHtml) {
  src(source)
    .pipe(changed(destination))
    .pipe(plumber())
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(
      sass({
        precision: 4,
        includePaths: ['.'],
        // deprecate warnings from external libraries
        quietDeps: true,
      }).on('error', sass.logError)
    )
    // autoprefixer (browserslist) has been set in package.json
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(dest(paths.css.tmp))
    .pipe(
      gulpif(
        PRODUCTION,
        gulpif(
          unCssHtml,
          postcss([
            uncss({
              html: unCssHtml,
              ignore: [
                /* eslint-disable max-len */
                // Bootstrap
                /\.carousel(-[a-zA-Z]+)?/,
                /\.collaps((-[a-zA-Z])+)?/,
                /\.dropdown(-[a-zA-Z]+)?/,
                /\.modal(-[a-zA-Z]+)?/,
                /\.navbar(-[a-zA-Z]+)?/,
                /\w\.fade/,
                /\w\.in/,
                /\w\.open/,

                // Custom
                '.vk',
                'iframe',
                /\.[hs]laquo-[a-z0-9]+/,
                /\.[mp][bt]-[a-z0-9]+/,
                /* eslint-enable max-len */
              ],
            }),
          ])
        )
      )
    )
    .pipe(postcss([cssnano({ reduceIdents: { keyframes: false } })]))
    .pipe(size({ title: `styles: ${subtitle}` }))
    .pipe(dest(destination))
    .pipe(server.stream());
}

// MAIN
// source, subtitle, destination, unCssHtml
function css(done) {
  cssTasks(
    paths.css.src.main, // src
    'main', // subtitle
    paths.css.dest,

    // uncssHTML; use array syntax for normal results
    [`${root.dest.site}/**/*.html`]
  );
  done();
}
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 💾 SCRIPTS
 * -----------------------------------------------------------------------------
 */
// #region
function js() {
  return src(paths.js.src.main)
    .pipe(changed(paths.js.dest))
    .pipe(
      webpack({
        entry: paths.js.src.main,
        mode: 'production',
        output: {
          filename: '[name].js',
          library: 'jsCheatsheet',
        },
      })
    )
    .pipe(dest(paths.js.dest));
}
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 🖼 IMAGES
 * -----------------------------------------------------------------------------
 */
// #region
// Common images function
function imgTasks(source, subtitle) {
  src(source)
    .pipe(changed(`${root.dest.site}/assets/img`))
    .pipe(
      imagemin(
        [
          imageminGIF({
            interlaced: true,
            optimizationLevel: 3,
          }),
          imageminJPG({ quality: 85 }),
          imageminPNG([0.8, 0.9]),
          imageminSVG({
            plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
          }),
        ],
        { verbose: true }
      )
    )
    .pipe(dest(`${root.dest.site}/assets/img`))
    .pipe(size({ title: `images: ${subtitle}` }));
}

// Graphics
function imgGraphics(done) {
  imgTasks(
    paths.img.src.graphics, // src
    'graphics' // subtitle
  );
  done();
}

// Content
function imgContent(done) {
  imgTasks(
    paths.img.src.content, // src
    'content' // subtitle
  );
  done();
}

// OPTIMIZE
const img = parallel(imgGraphics, imgContent);
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 🛠 UTILITIES
 * -----------------------------------------------------------------------------
 */
// #region
function clean() {
  return del([
    `${paths.css.dest}/**/*`,
    `${paths.js.dest}/**/*`,
    `${root.src}/**/*.css`,
  ]);
}
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 📶 SERVER
 * -----------------------------------------------------------------------------
 */
// #region

function watchFiles() {
  watch(paths.css.watch, series(css));
  watch(paths.js.src.main, series(js));
  watch(paths.img.watch, series(img));
  watch(paths.jekyll.watch, series(jekyllBuild));
}

const serve = series(clean, jekyllBuild, parallel(css, js, img), jekyllServe);

/* Use Browsersync for testing on mobile devices. Use html paths instead
extension-free permalinks */
function serveBS(done) {
  server.init({
    server: {
      // baseDir: '../../../',
      baseDir: root.dest.site,
    },
    middleware(req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      next();
    },
    port: 9000,
    notify: false,
  });
  done();
}
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 🏗 BUILD / DEFAULT
 * -----------------------------------------------------------------------------
 */
// #region

const build = series(clean, jekyllBuild, parallel(css, js, img));
// #endregion

/**
 * -----------------------------------------------------------------------------
 * ☑️ TASKS
 * -----------------------------------------------------------------------------
 */
// Add-ons
exports.bs = serveBS;
exports.clean = clean;
exports.j = jekyllBuild;
exports.jks = jekyllServe;

// Base
exports.img = img;
exports.js = js;
exports.css = css;
exports.w = watchFiles;
exports.default = build;
exports.s = serve;
