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

const gulp = require('gulp');
const del = require('del');
const wait = require('gulp-wait');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const cssbeautify = require('gulp-cssbeautify');
const fileinclude = require('gulp-file-include');
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
    },
    partials: {
        base: './src/partials'
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
    const scssFiles = [
        './src/scss/volt/**/*.scss',
        './src/scss/custom/**/*.scss',
        './src/scss/volt.scss'
    ];

    return gulp.src(scssFiles)
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 1%']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'));
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

const schemaUIs = ['Donors', 'GpsTable'];

const copyCommonJs = () => {
    fse.copySync(`${paths.src.base}/Js`, `${paths.dist.base}/Js`);
};

const copyPartials = (name) => {
    const src = path.join(paths.partials.base, 'CommonConfigColumns');
    const dest = path.join(paths.partials.base, name);

    if (fse.existsSync(src)) {
        if (!fse.existsSync(dest)) {
            fse.copySync(src, dest);
            console.log(` Partials copied to → ${dest}`);
        } else {
            console.warn(`Partials already exist for ${name} at ${dest}`);
        }
    } else {
        console.warn(`Source partials not found: ${src}`);
    }
};

const copyJsFolder = (name) => {
    const src = path.join(paths.dist.base, 'Js', 'CommonConfigColumns');
    const dest = path.join(paths.dist.base, 'Js', name);
    fse.copySync(src, dest);
};

const processHtmlTemplates = (name) => {
    const srcHtmlFolder = path.join(paths.dist.base, 'pages', 'CommonConfigColumns');
    const destHtmlFolder = path.join(paths.dist.base, 'pages', name);
    const schemaFile = path.join(__dirname, `${name}.json`);

    if (!fse.existsSync(srcHtmlFolder)) {
        console.warn(`HTML template folder not found: ${srcHtmlFolder}`);
        return;
    }

    const htmlFiles = glob.sync('*.html', { cwd: srcHtmlFolder });

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
};

const copySchemaJson = (name) => {
    const schemaFile = path.join(__dirname, `${name}.json`);
    const schemaDest = path.join(paths.dist.base, `${name}.json`);

    if (fse.existsSync(schemaFile)) {
        fse.copySync(schemaFile, schemaDest);
    }
};

const generateCommonColumns = (name) => {
    const schemaFile = path.join(__dirname, `${name}.json`);
    const destJsFolder = path.join(paths.dist.base, 'Js', name);
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
};

const updateStatus200 = (name) => {
    const schemaFile = path.join(__dirname, `${name}.json`);
    const templateStatusFile = path.join(
        paths.dist.base,
        'Js',
        'CommonConfigColumns',
        'Update',
        'FormLoad',
        'RowDataFromGet',
        'AfterFetch',
        'status200.js'
    );

    const destStatusFile = path.join(
        paths.dist.base,
        'Js',
        name,
        'Update',
        'FormLoad',
        'RowDataFromGet',
        'AfterFetch',
        'status200.js'
    );

    if (!fse.existsSync(schemaFile) || !fse.existsSync(templateStatusFile)) {
        console.warn(`Schema or template missing for ${name}`);
        return;
    }

    const schemaJson = JSON.parse(fs.readFileSync(schemaFile, 'utf8'));
    let statusContent = fs.readFileSync(templateStatusFile, 'utf8');

    const dataCallPattern = /jVarLocalData\.[\w$]+/g;
    const idPattern = /'[\w$]+Id'/g;

    const dataMatches = statusContent.match(dataCallPattern) || [];
    const idMatches = statusContent.match(idPattern) || [];

    schemaJson.forEach((col, index) => {
        const column = col.ColumnName;

        if (dataMatches[index]) {
            statusContent = statusContent.replace(dataMatches[index], `jVarLocalData.${column}`);
        }

        if (idMatches[index]) {
            statusContent = statusContent.replace(idMatches[index], `'${column}Id'`);
        }
    });

    fse.ensureDirSync(path.dirname(destStatusFile));
    fs.writeFileSync(destStatusFile, statusContent, 'utf8');
    console.log(` status200.js updated for ${name}`);
};

gulp.task('end:dist', async () => {
    copyCommonJs();

    schemaUIs.forEach(name => {
        copyPartials(name);
        copyJsFolder(name);
        processHtmlTemplates(name);
        copySchemaJson(name);
        generateCommonColumns(name);
        updateStatus200(name);
    });

    return true;
});

gulp.task('build:dev', gulp.series('clean:dev', 'copy:dev:css', 'copy:dev:html', 'copy:dev:html:index', 'copy:dev:assets', 'beautify:css', 'copy:dev:vendor'));
gulp.task('build:dist', gulp.series('clean:dist', 'copy:dist:css', 'copy:dist:html', 'copy:dist:html:index', 'copy:dist:assets', 'minify:css', 'minify:html', 'minify:html:index', 'copy:dist:vendor', 'end:dist'));

// Default
gulp.task('default', gulp.series('serve'));
