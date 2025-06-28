/*

=========================================================
* Volt Free - Bootstrap 5 Dashboard
=========================================================

* Product Page: https://themesberg.com/product/admin-dashboard/volt-premium-bootstrap-5-dashboard
* Copyright 2020 Themesberg (https://www.themesberg.com)
* License (https://themesberg.com/licensing)

* Designed and coded by https://themesberg.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Please contact us to request a removal.

*/

var gulp = require('gulp');
var del = require('del');
var wait = require('gulp-wait');
var sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var cssbeautify = require('gulp-cssbeautify');
var fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const npmDist = require('gulp-npm-dist');
const fse = require('fs-extra');
const path = require('path');
const glob = require('glob');
const fs = require('fs');

// Define paths

const paths = {
    dist: {
        base: './dist/',
        css: './dist/css',
        html: './dist/pages',
        assets: './dist/assets',
        img: './dist/assets/img',
        vendor: './dist/vendor'
    },
    dev: {
        base: './html&css/',
        css: './html&css/css',
        html: './html&css/pages',
        assets: './html&css/assets',
        img: './html&css/assets/img',
        vendor: './html&css/vendor'
    },
    base: {
        base: './',
        node: './node_modules'
    },
    src: {
        base: './src/',
        css: './src/css',
        html: './src/pages/**/*.html',
        assets: './src/assets/**/*.*',
        partials: './src/partials/**/*.html',
        scss: './src/scss',
        node_modules: './node_modules/',
        vendor: './vendor'
    },
    temp: {
        base: './.temp/',
        css: './.temp/css',
        html: './.temp/pages',
        assets: './.temp/assets',
        vendor: './.temp/vendor'
    }
};

// Compile SCSS
gulp.task('scss', function () {
    return gulp.src([paths.src.scss + '/custom/**/*.scss', paths.src.scss + '/volt/**/*.scss', paths.src.scss + '/volt.scss'])
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 1%']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.temp.css))
        .pipe(browserSync.stream());
});

gulp.task('index', function () {
    return gulp.src([paths.src.base + '*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: './src/partials/',
            context: {
                environment: 'development'
            }
        }))
        .pipe(gulp.dest(paths.temp.base))
        .pipe(browserSync.stream());
});

gulp.task('html', function () {
    return gulp.src([paths.src.html])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: './src/partials/',
            context: {
                environment: 'development'
            }
        }))
        .pipe(gulp.dest(paths.temp.html))
        .pipe(browserSync.stream());
});

gulp.task('assets', function () {
    return gulp.src([paths.src.assets])
        .pipe(gulp.dest(paths.temp.assets))
        .pipe(browserSync.stream());
});

gulp.task('vendor', function () {
    return gulp.src(npmDist(), { base: paths.src.node_modules })
        .pipe(gulp.dest(paths.temp.vendor));
});

gulp.task('serve', gulp.series('scss', 'html', 'index', 'assets', 'vendor', function () {
    browserSync.init({
        server: paths.temp.base
    });

    gulp.watch([paths.src.scss + '/volt/**/*.scss', paths.src.scss + '/custom/**/*.scss', paths.src.scss + '/volt.scss'], gulp.series('scss'));
    gulp.watch([paths.src.html, paths.src.base + '*.html', paths.src.partials], gulp.series('html', 'index'));
    gulp.watch([paths.src.assets], gulp.series('assets'));
    gulp.watch([paths.src.vendor], gulp.series('vendor'));
}));

// Beautify CSS
gulp.task('beautify:css', function () {
    return gulp.src([
        paths.dev.css + '/volt.css'
    ])
        .pipe(cssbeautify())
        .pipe(gulp.dest(paths.dev.css))
});

// Minify CSS
gulp.task('minify:css', function () {
    return gulp.src([
        paths.dist.css + '/volt.css'
    ])
        .pipe(cleanCss())
        .pipe(gulp.dest(paths.dist.css))
});

// Minify Html
gulp.task('minify:html', function () {
    return gulp.src([paths.dist.html + '/**/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: './src/partials/',
            context: {
                environment: 'production'
            }
        }))
        .pipe(gulp.dest(paths.dist.html))
});

gulp.task('minify:html:index', function () {
    return gulp.src([paths.dist.base + '*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: './src/partials/',
            context: {
                environment: 'production'
            }
        }))
        .pipe(gulp.dest(paths.dist.base))
});

// Clean
gulp.task('clean:dist', function () {
    return del([paths.dist.base]);
});

gulp.task('clean:dev', function () {
    return del([paths.dev.base]);
});

// Compile and copy scss/css
gulp.task('copy:dist:css', function () {
    return gulp.src([paths.src.scss + '/volt/**/*.scss', paths.src.scss + '/custom/**/*.scss', paths.src.scss + '/volt.scss'])
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 1%']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.dist.css))
});

gulp.task('copy:dev:css', function () {
    return gulp.src([paths.src.scss + '/volt/**/*.scss', paths.src.scss + '/custom/**/*.scss', paths.src.scss + '/volt.scss'])
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 1%']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.dev.css))
});

// Copy Html
gulp.task('copy:dist:html', function () {
    return gulp.src([paths.src.html])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: './src/partials/',
            context: {
                environment: 'production'
            }
        }))
        .pipe(gulp.dest(paths.dist.html));
});

gulp.task('copy:dev:html', function () {
    return gulp.src([paths.src.html])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: './src/partials/',
            context: {
                environment: 'development'
            }
        }))
        .pipe(gulp.dest(paths.dev.html));
});

// Copy index
gulp.task('copy:dist:html:index', function () {
    return gulp.src([paths.src.base + '*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: './src/partials/',
            context: {
                environment: 'production'
            }
        }))
        .pipe(gulp.dest(paths.dist.base))
});

gulp.task('copy:dev:html:index', function () {
    return gulp.src([paths.src.base + '*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: './src/partials/',
            context: {
                environment: 'development'
            }
        }))
        .pipe(gulp.dest(paths.dev.base))
});

// Copy assets
gulp.task('copy:dist:assets', function () {
    return gulp.src(paths.src.assets)
        .pipe(gulp.dest(paths.dist.assets))
});

gulp.task('copy:dev:assets', function () {
    return gulp.src(paths.src.assets)
        .pipe(gulp.dest(paths.dev.assets))
});

// Copy node_modules to vendor
gulp.task('copy:dist:vendor', function () {
    return gulp.src(npmDist(), { base: paths.src.node_modules })
        .pipe(gulp.dest(paths.dist.vendor));
});

gulp.task('copy:dev:vendor', function () {
    return gulp.src(npmDist(), { base: paths.src.node_modules })
        .pipe(gulp.dest(paths.dev.vendor));
});

gulp.task('end:dist', async () => {
    const paths = {
        src: { base: './src' },
        dist: { base: './dist' },
        partials: { base: './src/partials' }
    };

    fse.copySync(`${paths.src.base}/Js`, `${paths.dist.base}/Js`);

    const schemaUIs = ['Donors', 'GpsTable'];

    schemaUIs.forEach(name => {
        const srcPartialFolder = path.join(paths.partials.base, 'CommonConfigColumns');
        const destPartialFolder = path.join(paths.partials.base, name);

        if (fse.existsSync(srcPartialFolder)) {
            if (fse.existsSync(destPartialFolder)) {
                console.warn(`Partials already exist for ${name} at ${destPartialFolder}`);
            } else {
                fse.copySync(srcPartialFolder, destPartialFolder);
                console.log(` Partials copied to → ${destPartialFolder}`);
            }
        } else {
            console.warn(`Source partials not found: ${srcPartialFolder}`);
        }

        const srcJsFolder = path.join(paths.dist.base, 'Js', 'CommonConfigColumns');
        const destJsFolder = path.join(paths.dist.base, 'Js', name);
        fse.copySync(srcJsFolder, destJsFolder);

        const srcHtmlFolder = path.join(paths.dist.base, 'pages', 'CommonConfigColumns');
        const destHtmlFolder = path.join(paths.dist.base, 'pages', name);

        if (fse.existsSync(srcHtmlFolder)) {
            const htmlFiles = glob.sync('*.html', { cwd: srcHtmlFolder });
            const schemaFile = path.join(__dirname, `${name}.json`);

            htmlFiles.forEach(file => {
                const srcFile = path.join(srcHtmlFolder, file);
                const destFile = path.join(destHtmlFolder, file);
                fse.ensureDirSync(destHtmlFolder);

                let content = fs.readFileSync(srcFile, 'utf8');
                content = content.replace(/CommonConfigColumns/g, name);

                if ((file.toLowerCase().includes('create') || file.toLowerCase().includes('update')) && fse.existsSync(schemaFile)) {
                    const schemaJson = JSON.parse(fs.readFileSync(schemaFile, 'utf8'));

                    const formInputs = schemaJson.map(col => {
                        const field = col.ColumnName;
                        const lowerField = field.toLowerCase();
                        const inputId = `${field}Id`;

                        let inputType = "text";
                        if (lowerField.includes("date") || lowerField.includes("dob")) inputType = "date";
                        else if (lowerField.includes("email")) inputType = "email";
                        else if (lowerField.includes("mobile") || lowerField.includes("phone")) inputType = "tel";
                        else if (lowerField.includes("amount") || lowerField.includes("lat") || lowerField.includes("long") || lowerField.includes("id")) inputType = "number";

                        return `
                            <div class="mb-3 row">
                                <label for="${inputId}" class="col-sm-4 col-form-label">${field}</label>
                                <div class="col-sm-8">
                                    <input type="${inputType}" class="form-control" id="${inputId}" name="${field}" required autocomplete="off">
                                    <div class="invalid-feedback">Please enter ${field}</div>
                                </div>
                            </div>`;
                    }).join('\n');

                    content = content.replace('<!-- FORM_COLUMNS_PLACEHOLDER -->', formInputs);
                }

                fs.writeFileSync(destFile, content, 'utf8');
                console.log(` Copied & processed ${file} → ${destHtmlFolder}`);
            });
        } else {
            console.warn(`HTML template folder not found: ${srcHtmlFolder}`);
        }

        const schemaFile = path.join(__dirname, `${name}.json`);
        const schemaDest = path.join(paths.dist.base, `${name}.json`);
        if (fse.existsSync(schemaFile)) {
            fse.copySync(schemaFile, schemaDest);
        }

        const columnsJsonPath = path.join(destJsFolder, 'commonColumns.json');
        if (fse.existsSync(schemaFile)) {
            const schemaJson = JSON.parse(fs.readFileSync(schemaFile, 'utf8'));

            const newColumns = [
                {
                    field: "KS-Serial",
                    title: "#",
                    formatter: "jFLocalSerialColumn"
                },
                ...schemaJson.map(col => ({
                    field: col.ColumnName,
                    title: col.ColumnName
                }))
            ];

            fs.writeFileSync(columnsJsonPath, JSON.stringify(newColumns, null, 4), 'utf8');
            console.log(` commonColumns.json generated for ${name}`);
        }

        const templateStatusFile = path.join(paths.dist.base, 'Js', 'CommonConfigColumns', 'Update', 'FormLoad', 'RowDataFromGet', 'AfterFetch', 'status200.js');
        const destStatusFile = path.join(destJsFolder, 'Update', 'FormLoad', 'RowDataFromGet', 'AfterFetch', 'status200.js');

        if (fse.existsSync(schemaFile) && fse.existsSync(templateStatusFile)) {
            const schemaJson = JSON.parse(fs.readFileSync(schemaFile, 'utf8'));
            let statusContent = fs.readFileSync(templateStatusFile, 'utf8');

            schemaJson.forEach(col => {
                const original = col.ColumnName;

                const regexKey = new RegExp(`jVarLocalData\\.[A-Z_]*${original.toUpperCase()}[A-Z_]*`, 'g');
                statusContent = statusContent.replace(regexKey, `jVarLocalData.${original}`);

                const regexInParam = new RegExp(`in[A-Za-z]*${original.toUpperCase()}[A-Za-z]*\\s*:\\s*jVarLocalData\\.[A-Z_]*${original.toUpperCase()}[A-Z_]*`, 'g');
                statusContent = statusContent.replace(regexInParam, `in${original}: jVarLocalData.${original}`);
            });

            fs.writeFileSync(destStatusFile, statusContent, 'utf8');
            console.log(` status200.js updated for ${name}`);
        }
    });

    return true;
});


gulp.task('build:dev', gulp.series('clean:dev', 'copy:dev:css', 'copy:dev:html', 'copy:dev:html:index', 'copy:dev:assets', 'beautify:css', 'copy:dev:vendor'));
gulp.task('build:dist', gulp.series('clean:dist', 'copy:dist:css', 'copy:dist:html', 'copy:dist:html:index', 'copy:dist:assets', 'minify:css', 'minify:html', 'minify:html:index', 'copy:dist:vendor', 'end:dist'));

// Default
gulp.task('default', gulp.series('serve'));