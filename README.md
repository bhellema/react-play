## Just Playing Around

### Getting Started With React
https://facebook.github.io/react/docs/getting-started.html

1. npm init
2. Install [browserify](http://browserify.org/) via `npm install -g browserify`.  [browserify demo](http://tagtree.tv/browserify-an-intro)
3. Install dependencies `npm install --save react react-dom babelify babel-preset-react`
4. Building the source with `browserify -t [ babelify --presets [ react ] ] src/main.js -o build/react-play.js`
5. Install watchify such that we don't have to continue to compile.  `sudo npm install watchify -g`
6. Building with watchify `watchify -t [ babelify --presets [ react ] ] src/main.js -o build/react-play.js`

 browserify -t [ envify --NODE_ENV=production  ] -t [ babelify --presets [ react ] ] src/main.js -o build/react-play-prod.js

_Pro Tip:_ use envify to control production and dev modes.  Install envify via `npm install envify`.

#### Setting Up Atom
I've added the following packages to help out:

- linter-eslint

#### Tags
- v1.3-modules - refactor all js files into jsx component files.
- v1.2-forms - shows how to wire up handlers and forms to state data.
- v1.1-components - shows how to create components with React.createClass.
- v1.0 - initial project setup.
