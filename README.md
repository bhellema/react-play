## Just Playing Around

### Getting Started With React
https://facebook.github.io/react/docs/getting-started.html

1. npm init
2. Install [browserify](http://browserify.org/) via `npm install -g browserify`.  [browserify demo](http://tagtree.tv/browserify-an-intro)
3. Install dependencies `npm install --save react react-dom babelify babel-preset-react`
4. Building the source with `browserify -t [ babelify --presets [ react ] ] src/main.js -o build/react-play.js`
5. Install watchify such that we don't have to continue to compile.  `sudo npm install watchify -g`
6. Building with watchify `watchify/ -t [ babelify --presets [ react ] ] src/main.js -o build/react-play.js`

_Pro Tip:_ use envify to control production and dev modes.  Install envify via `npm install envify`.
