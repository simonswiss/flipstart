# FlipStart.

FlipStart was created by the team at ThemeFlip to kickstart new front-end projects.

The setup embraces the modularity of Jade (Pug?), Stylus and BEM to provide a simple, clean starting point.

FlipStart does not pretend to be the ultimate solution for any project. It does a good job for us at providing a simple structure to build upon. Feel free to clone it or fork it if you find a good use for it too!

### Installation

1. clone the repo
2. run `npm install` to fetch dependencies
3. launch dev site in BrowserSync with `gulp`
4. work inside the `/src` folder
5. compile static site with `gulp build`

### Dev vs Build

Development files are compiled inside the `/src` folder and BrowserSync serves files from that directory.

When running the `build` command, assets will be concatenated / uglified / copied into a `build` folder, that gets completely overwritten on each run of the command.

By default, all the CSS files from development get compiled into an `all.min.css` file, while the JS files go into `all.min.js`.

Most Bootstrap CSS and JS modules are disabled by default - un-comment them to activate as needed!

### Features

* Jade (Pug?) templates compiled into HTML
* JSON data object pulled in  with `gulp-data`
* BEM module structure with separated Jade and Stylus partials
* Equal height columns with [jquery.matchHeight.js](https://github.com/liabru/jquery-match-height)
* Stylus styles compiled into CSS
* Autoprefixer applied to the compiled CSS
* Sourcemaps generated for the CSS and JS
* Concat + minification of CSS and JS assets via `gulp-useref`
* BrowserSync server with multi-device syncing and live reload

### Feedback Welcome!

We certainly don't pretend that FlipStart is the silver bullet of front-end devleopment. We are openly welcoming any sort of feedback on how to improve the kit. Should you have any questions or recommendations, please reach out!
