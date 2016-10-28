WhatToDo - Project

Step by step:

1. Install "nodejs": https://nodejs.org/en/

    Check it in Command-Line: node -v and npm -v

2. Create project "whattodo-redux" with commands:

    cd ../whattodo-redux 
    npm init -y

3. Install "webpack":

    npm install --save-dev webpack webpack-dev-server html-webpack-plugin
    Then, we need to add it into package.jsson:
        ...
        "scripts": {
            "start": "webpack-dev-server --progress --colors --hot --config ./webpack.config.js",
            "build": "webpack --progress --colors --config ./webpack.config.js"
        },
        ...

4. Create id="app" which is the root that React Component will render

5. Build project:
    npm run build

6. Start project:
    npm start

7. Install "Hot Reloading": Apply changes in source code to web browser immediately.
    npm install --save-dev react-hot-loader
    module.exports = {
        entry: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ],
        ...
        devServer: {
            ...
            hot: true
        }
    };

8. Optional. Install Bable: Its mission is to compile ES6 to ES5 which is supported on almost of browser
    npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-1 babel-preset-stage-2

    - File .babelrc
        {
            "presets": [
                "es2015",
                "react",
                "stage-1",
                "stage-2"
            ]
        }
    - module.exports = {
        ...
        module: {
            loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
            }]
        },
        ...
    };

9. Install React:
    npm install --save react react-dom

10. Setup testing with mocha(test framework), chai(library for comparing) and jsdom(access to dom element):
    npm install --save-dev mocha chai jsdom
    - Create setup.js file in test folder
    - Add scripts for testing:
        ...
        "scripts": {
            ...
            "test": "mocha --compilers js:babel-core/register --require ./test/setup.js 'src/**/*spec.js'"
        },
        ...
    - Additional: Enzyme(A library supports emulating the states in test processing):
        npm install --save-dev react-addons-test-utils enzyme
    - How to test:
        npm test
    - Bonus: add the following config:
        ...
        "scripts": {
            ...
            "test:watch": "npm run test -- --watch"
        },
        ...
        to watch fail tests on local while developing
             npm run test:watch

11. Redux:
    npm install --save redux redux-logger

12. Connect between React & Redux:
    npm install --save react-redux